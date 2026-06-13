//task1

/*const name = "Ravi";
const salary = 30000;
const experience = 3;

let bonus = 0;

if (experience >= 5) {
    bonus = salary * 20/100;
} else if (experience >= 2) {
    bonus = salary * 10/100;
} else {
    bonus = salary * 5/100;
}

const finalSalary = salary + bonus;

console.log("Employee Name: " + name);
console.log("Bonus: " + bonus);
console.log("Final Salary: " + finalSalary);*/

/*const studentName = prompt("enter your name:");
const age = prompt("enter your age:");
const percentage = prompt(" enter your percentage:");

//task2
if (age >= 17) {
    if (percentage >= 60) {
        console.log("Admission Approved");
    } else {
        console.log("Admission Rejected");
    }
} else {
    console.log("Admission Rejected");
}*/

//task3
/*const choice =4;

switch (choice) {
    case 1:
        console.log("Order Confirmed: Pizza");
        break;
    case 2:
        console.log("Order Confirmed: Burger");
        break;
    case 3:
        console.log("Order Confirmed: Shawarma");
        break;
    case 4:
        console.log("Order Confirmed: Fried Rice");
        break;
    default:
        console.log("Invalid Choice");
}*/


//task4
/*const students = [
    "Ravi",
    "Suresh",
    "Kiran",
    "Anil",
    "Vamsi",
    "Raju",
    "Teja",
    "Mahesh",
    "Arun",
    "Naveen"
];

for (const name of students) {
    console.log(name);
}

const total = students.length;
console.log("Total Students: " + total);*/

// task 5
/*const cart = [
    { product: "Mobile", price: 15000 },
    { product: "Headset", price: 2000 },
    { product: "Charger", price: 1000 }
];

for (const item of cart) {
    console.log(item.product + " - " + item.price);
}

let total = 0;

for (const item of cart) {
    total = total + item.price;
}

console.log("Total Cart Value: " + total);

let maxPrice = 0;
let expensiveProduct = "";

for (const item of cart) {
    if (item.price > maxPrice) {
        maxPrice = item.price;
        expensiveProduct = item.product;
    }
}

console.log("Most Expensive Product: " + expensiveProduct);*/


//task 6
/*let balance = 10000;

function deposit(amount) {
    balance = balance + amount;
    console.log("Deposited: " + amount);
}

function withdraw(amount) {
    if (amount <= balance) {
        balance = balance - amount;
        console.log("Withdrawn: " + amount);
    } else {
        console.log("Insufficient Balance");
    }
}

function checkBalance() {
    console.log("Remaining Balance: " + balance);
}

deposit(2000);
withdraw(3000);
checkBalance();*/

// task7
/*const age = 25;

let price = 0;

if (age < 5) {
    price = 0;
} else if (age >= 5 && age <= 18) {
    price = 100;
} else if (age > 18 && age <= 60) {
    price = 200;
} else {
    price = 120;
}

console.log("Ticket Price: " + price);*/

//task8
/*const amount = 4500;

let discount = 0;

if (amount > 5000) {
    discount = amount * 0.20;
} else if (amount > 3000) {
    discount = amount * 0.10;
} else if (amount > 1000) {
    discount = amount * 0.05;
} else {
    discount = 0;
}

const finalAmount = amount - discount;

console.log("Original Amount: " + amount);
console.log("Discount: " + discount);
console.log("Final Amount: " + finalAmount);*/


// task9
/*const items = ["Rice", "Oil", "Sugar", "Milk", "Egg"];

items.push("Bread");
items.push("Butter");

items.shift();

items.pop();

let found = false;

for (const item of items) {
    if (item === "Milk") {
        found = true;
    }
}

if (found) {
    console.log("Milk is available");
} else {
    console.log("Milk is not available");
}

console.log("Final Inventory:");
for (const item of items) {
    console.log(item);
}*/

// task 10
/*const patient = {
    patientName: "Ravi",
    age: 30,
    disease: "Fever",
    doctor: "Dr. Sharma"
};

for (const key in patient) {
    console.log(key + ": " + patient[key]);
}


const { patientName, age, disease, doctor } = patient;

console.log("Patient Name: " + patientName);
console.log("Age: " + age);
console.log("Disease: " + disease);
console.log("Doctor: " + doctor);*/

//task 11
/*function sendSMS() {
    console.log("SMS Sent To Customer");
}

function placeOrder(callback) {
    console.log("Order Placed Successfully");
    
    callback();
}

placeOrder(sendSMS);*/


//  task12
/*function* offersGenerator() {
    yield "10% Cashback";
    yield "20% Cashback";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}

const offers = offersGenerator();

console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);*/

// task 13
/*const employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kavin", salary: 30000 },
    { id: 3, name: "John", salary: 40000 }
];

for (const emp of employees) {
    console.log(emp.name);
}

let totalSalary = 0;

for (const emp of employees) {
    totalSalary = totalSalary + emp.salary;
}

console.log("Total Salary Expense: " + totalSalary);

let maxSalary = 0;
let topEmployee = "";

for (const emp of employees) {
    if (emp.salary > maxSalary) {
        maxSalary = emp.salary;
        topEmployee = emp.name;
    }
}

console.log("Highest Salary Employee: " + topEmployee);*/

// task 14
/*let availableSeats = 50;

function bookSeats(requestedSeats) {
    if (requestedSeats <= availableSeats) {
        availableSeats = availableSeats - requestedSeats;
        console.log("Booking Successful");
        console.log("Seats Booked: " + requestedSeats);
        console.log("Remaining Seats: " + availableSeats);
    } else {
        console.log("Booking Failed - Not enough seats");
    }
}

bookSeats(10);
bookSeats(30);
bookSeats(15); */

//task 15
/*const store = {
    Mobile: 15000,
    Laptop: 50000,
    Headphone: 2000,
    Smartwatch: 3000
};

const selectedProducts = ["Mobile", "Headphone", "Smartwatch"];

console.log("Selected Products:");
for (const item of selectedProducts) {
    console.log(item);
}

let total = 0;

for (const item of selectedProducts) {
    total = total + store[item];
}

console.log("Total Amount: " + total);

const gst = total * 0.18;

const finalBill = total + gst;

console.log("GST (18%): " + gst);
console.log("Final Bill: " + finalBill);*/