/*let signal = prompt("enter the signal color:")

switch (signal){
    case "red":
        console.log("stop your vehicle");
        break;

    case "yellow":
        console.log("get ready");
        break;
    
    case "green":
        console.log("you can go");
        break;

    default:
        console.log("invalid signal entered");
}*/

//task2

/*const employees=[
    {name:"employee 1",status:"present"},
    {name:"employee 2",status:"present"},
    {name:"employee 3",status:"present"},
    {name:"employee 4",status:"present"},
    {name:"employee 5",status:"present"},
    {name:"employee 6",status:"present"},
    {name:"employee 7",status:"present"},
    {name:"employee 8",status:"present"},
    {name:"employee 9",status:"present"},
    {name:"employee 10",status:"present"},
    {name:"employee 11",status:"present"},
    {name:"employee 12",status:"present"},
    {name:"employee 13",status:"present"},
    {name:"employee 14",status:"present"},
    {name:"employee 15",status:"present"},
    {name:"employee 16",status:"present"},
    {name:"employee 17",status:"present"},
    {name:"employee 18",status:"present"},
    {name:"employee 19",status:"present"},
    {name:"employee 20",status:"present"},
    {name:"employee 21",status:"present"},
    {name:"employee 22",status:"present"},
    {name:"employee 23",status:"present"},
    {name:"employee 24",status:"present"},
    {name:"employee 25",status:"present"},
    {name:"employee 25",status:"present"},
    {name:"employee 26",status:"present"},
    {name:"employee 27",status:"present"},
    {name:"employee 28",status:"present"},
    {name:"employee 29",status:"present"},
    {name:"employee 30",status:"present"},
];

for (let i=1; i<employees.length; i++){
    console.log(`employees ${i} present `)
}*/

//task 3

/*let balance = 10000;
const withdrawalamount= prompt("enter the amount want to withdraw:")

while(balance>0){
    balance -= withdrawalamount;
    console.log(`witdrawal amount successful. Reamaining balance: ${balance}`)
}*/

//task4
/*let age = 19;
let percentage = 75;
let entranceExamPassed = true;

if (age >= 18) {
    if (percentage >= 70) {
        if (entranceExamPassed) {
            console.log("Admission Accepted!");
        } else {
            console.log("Admission Rejected: Entrance exam not passed.");
        }
    } else {
        console.log("Admission Rejected: Percentage is below 70.");
    }
} else {
    console.log("Admission Rejected: Must be at least 18 years old.");
}*/

//task5

/*function foodDeliveryStatus(customerName, foodItem, deliveryAddress) {
    console.log(`Hello ${customerName}, your ${foodItem} is on its way to ${deliveryAddress}!`);
}

foodDeliveryStatus("Alice", "Pizza", "123 Maple St");*/

//task 6
/*function calculateSalary(basePay, hours) {
    return basePay * hours;
}

function calculateBonus(salary) {
    const bonusRate = 10/100; 
    return salary * bonusRate;
}

const monthlySalary = calculateSalary(50, 160);
const performanceBonus = calculateBonus(monthlySalary);

console.log(`Salary: $${monthlySalary}`);
console.log(`Bonus: $${performanceBonus}`);*/

//task 7
/*function generateInvoice(finalPrice) {
  console.log(`Invoice generated. Total Amount: $${finalPrice}`);
}

function applyDiscount(price, discount, callback) {
  console.log("Calculating discount...");
  const finalPrice = price - (price * (discount / 100));
  callback(finalPrice);
}

applyDiscount(100, 10, generateInvoice);*/

/*function* promotionalOffers() {
  yield "10% OFF";
  yield "20% OFF";
  yield "Free Delivery";
  yield "Buy 1 Get 1";
}

const offers = promotionalOffers();

console.log(offers.next().value); 
console.log(offers.next().value);  
console.log(offers.next().value); 
console.log(offers.next().value);*/


//task9

/*const scienceStudents = ['Anna', 'Ben', 'Chloe'];
const commerceStudents = ['David', 'Emma', 'Felix'];

const allStudents = [...scienceStudents, ...commerceStudents];

console.log(allStudents); */

//Task 10
/*function calculateStudentTotal(studentName, ...marks) {
    const totalMarks = marks.reduce((sum, currentMark) => sum + currentMark, 0);
    
    return {
        name: studentName,
        total: totalMarks,
        subjectsCount: marks.length
    };
}

const studentA = calculateStudentTotal("Alex", 85, 90, 78);
console.log(`${studentA.name} scored a total of ${studentA.total} across ${studentA.subjectsCount} subjects.`);

const studentB = calculateStudentTotal("Jordan", 92, 88, 95, 84, 91);
console.log(`${studentB.name} scored a total of ${studentB.total} across ${studentB.subjectsCount} subjects.`);*/

//task 11
/*const employee = {
  name: "John Doe",
  department: "Engineering",
  salary: 75000,
  experience: 5
};

const { name, department, salary, experience } = employee;

console.log("name:",name);
console.log("department:",department);
console.log("salary:",salary);
console.log("experience:",experience);*/

//task 12
/*const products = [
  { name: "Laptop", price: 55000, category: "Electronics" },
  { name: "Mouse", price: 1500, category: "Electronics" },
  { name: "Monitor", price: 12000, category: "Electronics" },
  { name: "Keyboard", price: 3000, category: "Electronics" }
];

const expensiveProducts = products.filter(product => product.price > 5000);

console.log(expensiveProducts);*/

//task 13

/*const customers = [
  { id: 1, name: "Alice", purchaseAmount: 35000 },
  { id: 2, name: "Bob", purchaseAmount: 62000 },
  { id: 3, name: "Charlie", purchaseAmount: 51000 }
];

const firstPremium = customers.find(customer => customer.purchaseAmount > 50000);

console.log(firstPremium);*/

//task 14

/*let expenses = [1200, 4500, 3000, 800, 1700];

let totalExpense = expenses.reduce((total, amount) => {
    return total + amount;
}, 0);

console.log("Total Company Expense:", totalExpense);*/


//task 15

/*let players = [
    { name: "Rahul", age: 22 },
    { name: "Kiran", age: 19 },
    { name: "Arjun", age: 15 }
];

let allEligible = players.every(player => player.age >= 18);

if (allEligible) {
    console.log("All players are eligible");
} else {
    console.log("Some players are underage");
}*/

//task 16
/*let candidates = [
    { name: "Ravi", skills: ["HTML", "CSS"] },
    { name: "Sneha", skills: ["React"] },
    { name: "Amit", skills: ["Python"] }
];

let result = candidates.some(function(candidate) {
    return candidate.skills.includes("React");
});

console.log(result);*/

//task 17
/*let mobile = prompt("Enter mobile number:");

let lengthCheck = false;
let startCheck = false;

if (mobile.length == 10) {
    lengthCheck = true;
}

let firstDigit = mobile[0];

if (firstDigit == "6" || firstDigit == "7" || firstDigit == "8" || firstDigit == "9") {
    startCheck = true;
}

if (lengthCheck && startCheck) {
    console.log("Valid Mobile Number");
} else {
    console.log("Invalid Mobile Number");
}*/

//task 18
/*let text = "Learn JavaScript Complete Course";

let words = text.split(" ");
let slug = "";

for (let i = 0; i < words.length; i++) {
    slug = slug + words[i].toLowerCase() + "-";
}

slug = slug.slice(0, slug.length - 1);

console.log(slug);*/


//task 19

/*let employees = [
    { name: "Rahul", salary: 25000 },
    { name: "Kiran", salary: 40000 },
    { name: "Arjun", salary: 30000 }
];

employees.sort(function(a, b) {
    return b.salary - a.salary;
});

console.log("Highest to Lowest:");
console.log(employees);

employees.sort(function(a, b) {
    return a.salary - b.salary;
});

console.log("Lowest to Highest:");
console.log(employees);*/

//task 20
/*let movies = ["Pushpa", "RRR", "Salaar"];

let bookingIds = movies.map(function(movie, index) {
    return movie + "-" + (index + 1);
});

console.log(bookingIds);*/
