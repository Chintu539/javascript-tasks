/*let age=prompt("enter your age:")

if (age<=12){
    console.log("child");
}else if (age<=19) {
    console.log("teenager");
}else if(age<=59){
    console.log("adult");
}else{
    console.log("senior citizen");
}
----------------------------------------------
/*let salary =25000;
let newSalary;

if (salary < 20000) {
    newSalary = salary + (salary * 20 / 100);
} else if (salary <= 50000) {
    newSalary = salary + (salary * 10 / 100);
} else {
    newSalary = salary + (salary * 5 / 100);
}

console.log("Old Salary: " + salary);
console.log("New Salary: " + newSalary);*/

/*const units = prompt("Enter units:");

let bill;
if (units <= 100) {
    bill = units * 5;
} else if (units <= 200) {
    bill = units * 7;
} else {
    bill = units * 10;
}
console.log("Total Bill: ₹" + bill);*/

/*const balance = 10000;

const amount = prompt("Enter withdrawal amount:");

if (amount <= balance) {
    const remaining = balance - amount;
    console.log("Withdrawal Successful");
    console.log("Remaining Balance: ₹" + remaining);
} else {
    console.log("Insufficient Funds");
}*/

/*const username = prompt("Enter username:");
const password = prompt("Enter password:");

if (username == "admin" && password == "12345") {
    console.log("Login Successful");
} else {
    console.log("Invalid Credentials");
}*/

/*const amount = Number(prompt("Enter recharge amount:"));

if (amount >= 499) {
    console.log("Netflix Offer");
} 
else if (amount >= 299) {
    console.log("2GB Extra Data");
} 
else {
    console.log("No Offer");
}*/

/*let color = prompt("Enter color:").toLowerCase();

switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid color");
}*/

/*const totalDays = Number(prompt("Enter total working days:"));
const presentDays = Number(prompt("Enter present days:"));

const percentage = (presentDays / totalDays) * 100;

console.log("Attendance: " + percentage + "%");

if (percentage >= 75) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}*/


/*const price = 500;

const tickets = Number(prompt("Enter number of tickets:"));

const total = price * tickets;

const gst = total * 5/100;

const finalAmount = total + gst;

console.log("Total Amount: ₹" + total);
console.log("GST (5%): ₹" + gst);
console.log("Final Amount: ₹" + finalAmount);*/


/*const foodCost = Number(prompt("Enter food cost:"));

let finalBill;

if (foodCost > 2000) {
    const discount = foodCost * 0.10;
    finalBill = foodCost - discount;
    console.log("Discount Applied: $" + discount);
} else {
    finalBill = foodCost;
    console.log("No Discount");
}

console.log("Final Bill: $" + finalBill);*/

/*const age = Number(prompt("Enter age:"));
const height = Number(prompt("Enter height:"));
const weight = Number(prompt("Enter weight:"));

if (age >= 18) {
    if (height >= 160) {
        if (weight >= 55) {
            console.log("Eligible");
        } else {
            console.log("Rejected: Weight is less than 55");
        }
    } else {
        console.log("Rejected: Height is less than 160");
    }
} else {
    console.log("Rejected: Age is less than 18");
}*/

/*const m1 = Number(prompt("Enter marks 1:"));
const m2 = Number(prompt("Enter marks 2:"));
const m3 = Number(prompt("Enter marks 3:"));
const m4 = Number(prompt("Enter marks 4:"));
const m5 = Number(prompt("Enter marks 5:"));

const total = m1 + m2 + m3 + m4 + m5;
const percentage = total / 5;

console.log("Total: " + total);
console.log("Percentage: " + percentage);

if (percentage >= 90) {
    console.log("Grade: A+");
} 
else if (percentage >= 80) {
    console.log("Grade: A");
} 
else if (percentage >= 70) {
    console.log("Grade: B");
} 
else if (percentage >= 60) {
    console.log("Grade: C");
} 
else {
    console.log("Grade: Fail");
}*/

/*const time = Number(prompt("Enter time (0-24):"));

if (time >= 6 && time < 14) {
    console.log("Morning Shift");
} 
else if (time >= 14 && time < 22) {
    console.log("Afternoon Shift");
} 
else {
    console.log("Night Shift");
}*/

/*const age = Number(prompt("Enter age:"));
const salary = Number(prompt("Enter salary:"));
const experience = Number(prompt("Enter experience (years):"));

if (age >= 21 && salary >= 25000 && experience >= 2) {
    console.log("Eligible");
} else {
    console.log("Not Eligible");
}*/

/*const distance = Number(prompt("Enter distance in KM:"));

let fare;

if (distance <= 5) {
    fare = distance * 20;
} else {
    const first = 5 * 20;
    const remaining = (distance - 5) * 15;
    fare = first + remaining;
}

console.log("Total Fare: $" + fare);*/

/*const num = Number(prompt("Enter a number:"));

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}*/

/*const length = Number(prompt("Enter password length:"));

if (length < 6) {
    console.log("Weak");
} 
else if (length <= 10) {
    console.log("Medium");
} 
else {
    console.log("Strong");
}*/

/*const experience = Number(prompt("Enter experience (years):"));
const salary = Number(prompt("Enter salary:"));

let bonus;

if (experience <= 2) {
    bonus = salary * 0.05;
} 
else if (experience <= 5) {
    bonus = salary * 0.10;
} 
else {
    bonus = salary * 0.20;
}

console.log("Bonus: $" + bonus);*/

/*let count = 10;

while (count >= 1) {
    console.log(count);
    count--; 
}
console.log("Happy New Year");*/

/*let degree = "Completed"; 
let communication = "Good";
let score = 75;

if (degree === "Completed") { 
    if (communication === "Good") {
        if (score >= 70) {
            console.log("Selected");
        } else {
            console.log("Failed: Technical Score");
        }
    } else {
        console.log("Failed: Communication");
    }
} else {
    console.log("Failed: Degree");
}*/

