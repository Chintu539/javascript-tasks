const url = "https://fakestoreapi.com/products";
let allProducts = [];
let cart = [];


fetch(url)
.then(res => res.json())
.then(data => {
    allProducts = data;
    displayProducts(allProducts);
    showStats();
    console.log("Products Loaded Successfully");
})
.catch(err => console.log(err));


function displayProducts(products){
    const container = document.getElementById("products");
    container.innerHTML = "";

    products.forEach(p => {
        let div = document.createElement("div");

        div.innerHTML = 
           `<img src="${p.image}" width="100">
            <h4>${p.title}</h4>
            <p>₹${p.price}</p>
            <p>${p.category}</p>
            <button onclick="addToCart(${p.id})">Add</button>`;
        container.appendChild(div);
    });
}

document.getElementById("search").addEventListener("keyup", function(){
    let text = this.value.toLowerCase();
    let filtered = allProducts.filter(p =>
        p.title.toLowerCase().includes(text)
    );
    displayProducts(filtered);
});


document.getElementById("category").addEventListener("change", function(){

    let value = this.value;
    if(value === "all"){
        displayProducts(allProducts);
        return;
    }
    let filtered = allProducts.filter(p =>
        p.category === value
    );
    displayProducts(filtered);
});


function addToCart(id){
    let product = allProducts.find(p => p.id === id);
    cart.push(product);
    console.log("Cart Items:", cart);
}

function showStats(){
    let total = allProducts.reduce((sum, p) => sum + p.price, 0);
    document.getElementById("total").innerText =
        "Total Value: $" + total.toFixed(2);
}
