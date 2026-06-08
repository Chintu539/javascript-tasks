/*const basicsalary=25000;
const hra=basicsalary*20/100;
const bonus=basicsalary*10/100;
const total=basicsalary+hra+bonus;
const tax=total*5/100;
const finalsalary=total-tax
console.log("basicsalary:"+basicsalary);
console.log("hra:"+ hra);
console.log("bonus:"+bonus);
console.log("tax:"+tax);
console.log("finalsalary:"+finalsalary);*/

/*let input=prompt("enter your marks:");
let marks=Number(input);

if (marks>=90){
    console.log("A+");
}else if(marks>=80){
    console.log("B");
}else if(marks>=70){
    console.log("c");
}else if (marks>=60){
    console.log("d")
}else{
    console.log("fail");
}*/

/*let correctUsername = "admin";
let correctPassword = "12345";

let enteredUsername = "admin";
let enteredPassword = "wrongpassword";

if (enteredUsername === correctUsername) {
    
    if (enteredPassword === correctPassword) {
        console.log("Login Success");
    } else {
        console.log("Invalid Password");
    }

} else {
    console.log("Invalid Username");
}*/

/*let balance = 5000;
let userInput = prompt("Enter amount to withdraw:");

let amount = Number(userInput);

if (amount > balance) {
  console.log("Insufficient Balance");
}

if (amount <= balance) {
  console.log("Withdrawal Success");
  balance = balance - amount;
}
console.log("Remaining Balance:");
console.log(balance);*/

/*const purchase = 12000; 
let discountPercent = 0;

if (purchase >= 10000) {
    discountPercent = 20;
} 
else if (purchase >= 5000) {
    discountPercent = 10;
} 
else if (purchase >= 2000) {
    discountPercent = 5;
} 
else {
    discountPercent = 0;
}

const discountAmount = (purchase * discountPercent) / 100;
const finalAmount = purchase - discountAmount;
console.log("Original Amount: " + purchase);
console.log("Discount: " + discountAmount);
console.log("Final Amount: " + finalAmount);*/

/*let hasHelmet = false; 
let hasLicense = false; 
let fine = 0;

if (!hasHelmet && !hasLicense) {
    fine = 3000;
} else if (!hasLicense) {
    fine = 2000;
} else if (!hasHelmet) {
    fine = 1000;
} else {
    fine = 0;
}
console.log(`Traffic Fine Amount: ₹${fine}`);*/


/*const attendance = ["P", "P", "A", "P", "A", "A", "P"];

let presentDays = 0;
let absentDays = 0;

for (let i = 0; i < attendance.length; i++) {
  if (attendance[i] === "P") {
    presentDays++;
  } else if (attendance[i] === "A") {
    absentDays++;
  }
}

console.log("Present Days : " + presentDays);
console.log("Absent Days  : " + absentDays);*/

/*const product = {
    productName: "Laptop",
    price: 50000,
    stock: 10
};
for (let key in product) {
    console.log(`${key} : ${product[key]}`);
}*/

/*let distance = 12; 
let totalFare = 0;

if (distance <= 5) {
    totalFare = distance * 20;
} else if (distance <= 10) {
    totalFare = (5 * 20) + ((distance - 5) * 15);
} else {
    totalFare = (5 * 20) + (5 * 15) + ((distance - 10) * 10);
}
console.log(`Distance = ${distance} KM`);
console.log(`Total Fare : ₹${totalFare}`);*/


const employees = [
  { id: 1, name: "Rahul", salary: 25000 },
  { id: 2, name: "Kiran", salary: 30000 },
  { id: 3, name: "Navi", salary: 40000 }
];

console.log("All Employees:");
for (let i = 0; i < employees.length; i++) {
  console.log(employees[i]);
}

let max = employees[0];

for (let i = 1; i < employees.length; i++) {
  if (employees[i].salary > max.salary) {
    max = employees[i];
  }
}

console.log("Highest Salary Employee:", max);

let min = employees[0];

for (let i = 1; i < employees.length; i++) {
  if (employees[i].salary < min.salary) {
    min = employees[i];
  }
}

console.log("Lowest Salary Employee:", min);

const count = employees.length;
console.log("Total Employees:", count);

let totalSalary = 0;

for (let i = 0; i < employees.length; i++) {
  totalSalary = totalSalary + employees[i].salary;
}

console.log("Total Salary:", totalSalary);