//task 1

/*const employees=[
 {id:1,name:"Rahul",salary:25000},
 {id:2,name:"Kavin",salary:50000},
 {id:3,name:"John",salary:75000}
];

const highearners = employees.filter(employees => employees.salary > 40000 );
console.log("employees with salary >40000",highearners);

const firsthighearner = employees.find(employees => employees.salary > 60000);
console.log(" first employee with salary>60000",firsthighearner);

const totalsalaryexpense = employees.reduce((total,emp)=>total + emp.salary,0);
console.log("total company salary expense",totalsalaryexpense);

const employeesnames = employees.map(emp=>emp.name);
console.log("employees names array:",employeesnames);*/



//task 2


/*function checkAdmissionStatus(student) {
  if (student.age >= 18 && student.percentage >= 60) {
    return `Admission Approved for ${student.name}.`;
  } else {
    return `Admission Denied for ${student.name}.`;
  }
}

const applicant = {
  name: "Alex Smith",
  age: 19,
  percentage: 75
};

const status = checkAdmissionStatus(applicant);
console.log(status); */

//task 3

/*const cart = [
  { product: "Shoes", price: 2000, qty: 2 },
  { product: "Watch", price: 1500, qty: 1 },
  { product: "Bag", price: 1000, qty: 3 }
];

const totalBill = cart.reduce((total, item) => total + (item.price * item.qty), 0);
console.log("Total Bill:", totalBill);

const mostExpensive = cart.reduce((max, item) => (item.price > max.price) ? item : max);
console.log("Most Expensive Product:", mostExpensive.product);

const productNames = cart.map(item => item.product);
console.log("All Product Names:", productNames.join(", "));*/

//task 4

/*function checkTrafficSignal(signalColor) {
    let color = signalColor.toLowerCase().trim();
    let action = "";
    let fineAmount = 0;

    switch (color) {
        case "red":
            action = "Stop!";
            fineAmount = 1000; 
            console.log(`Action: ${action} Violation detected. Fine amount: ₹${fineAmount}`);
            break;

        case "yellow":
            action = "Slow down and prepare to stop.";
            console.log(`Action: ${action} No fine. Proceed with caution if already inside the intersection.`);
            break;

        case "green":
            action = "Go!";
            console.log(`Action: ${action} No violation. Safe to proceed.`);
            break;

        default:
            console.log(" Invalid light color. Please enter red, yellow, or green.");
            break;
    }
}
checkTrafficSignal("red");*/

//task 5

/*const studentRecords = [
  { studentName: "Alex", score: 95 },
  { studentName: "Blake", score: 45 },
  { studentName: "Charlie", score: 80 },
  { studentName: "Dana", score: 30 }
];

const passedStudents = studentRecords.filter(record => record.score >= 50);
const failedStudents = studentRecords.filter(record => record.score < 50);

const studentGrades = studentRecords.map(record => {
  let letterGrade;
  if (record.score >= 90) letterGrade = 'A';
  else if (record.score >= 75) letterGrade = 'B';
  else if (record.score >= 50) letterGrade = 'C';
  else letterGrade = 'F';
  
  return {
    studentName: record.studentName,
    grade: letterGrade
  };
});

console.log("Passed Students:", passedStudents);
console.log("Failed Students:", failedStudents);
console.log("Grade List:", studentGrades);*/

//task 6

/*function placeOrder(customerName, ...items) {
    console.log(`Customer: ${customerName}`);
    console.log("Ordered Items:", items.join(", "));
    console.log(`Item Count: ${items.length}`);
}
placeOrder("Rahul Sharma", "Paneer Butter Masala", "Butter Naan", "Mango Lassi");*/



//task 7


/*let balance = 0;

function deposit(amount) {
    balance = balance + amount;
    return balance;
}

function withdraw(amount) {
    if (amount <= balance) {
        balance = balance - amount;
    }
    return balance;
}

function checkBalance() {
    return balance;
}

console.log("Start:", checkBalance());
console.log("Deposited 100:", deposit(100));
console.log("Withdrew 40:", withdraw(40));*/


//task 8

/*let bookedSeats = [];

function bookSeat(seatNumber) {
    if (bookedSeats.includes(seatNumber)) {
        return `Seat ${seatNumber} is already taken.`;
    } else {
        bookedSeats.push(seatNumber);
        return `Seat ${seatNumber} booked successfully!`;
    }
}

function checkAvailability(seatNumber) {
    if (bookedSeats.includes(seatNumber)) {
        return `Seat ${seatNumber} is Unavailable.`;
    } else {
        return `Seat ${seatNumber} is Available.`;
    }
}

function printBookedSeats() {
    console.log(" Booked Seats List ");
    for (let i = 0; i < bookedSeats.length; i++) {
        console.log(`Seat: ${bookedSeats[i]}`);
    }
}

console.log(bookSeat("A1"));
console.log(bookSeat("B5"));
console.log(bookSeat("A1")); 
console.log(checkAvailability("B5")); 
console.log(checkAvailability("C3")); 

printBookedSeats(); */


//task 9

/*function validateUser(username, password, email) {

    if (username.indexOf(" ") !== -1) {
        console.log("Username should not contain spaces");
    } else {
        console.log("Username is valid");
    }

    if (password.length >= 8) {
        console.log("Password is valid");
    } else {
        console.log("Password must be at least 8 characters");
    }

    if (email.indexOf("@") !== -1) {
        console.log("Email is valid");
    } else {
        console.log("Email must contain @");
    }
}

validateUser("janni123", "password1", "test@gmail.com");
validateUser("janni123", "pass", "testgmail.com");*/

//task 10
/*fetch("https://fakestoreapi.com/products")
.then(function(res) {
    return res.json();
})
.then(function(data) {

    console.log("Product Titles:");

    for (let i = 0; i < data.length; i++) {
        console.log(data[i].title);
    }

    console.log("Products above 1000:");

    for (let i = 0; i < data.length; i++) {
        if (data[i].price > 1000) {
            console.log(data[i].title);
        }
    }

    console.log("Total Products:", data.length);

});*/


//task 11
/*
function findDOB(dateInput) {

    let date = new Date(dateInput);

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let weekDay = days[date.getDay()];

    console.log("Day:", day);
    console.log("Month:", month);
    console.log("Year:", year);
    console.log("Weekday:", weekDay);
}

findDOB("2002-08-10");*/


//task 12
/*
function checkPlan(plan) {

    let result = plan === "Mobile" ? "480p, 1 device" :
                 plan === "Basic" ? "720p, 1 device" :
                 plan === "Standard" ? "1080p, 2 devices" :
                 plan === "Premium" ? "4K, 4 devices" :
                 "Invalid Plan";

    console.log("Plan:", plan);
    console.log("Benefits:", result);
}

checkPlan("Mobile");
checkPlan("Premium");
checkPlan("Gold");*/


//task 13
/*
const patients = [
    { id: 1, name: "Ravi", status: "normal" },
    { id: 2, name: "Sita", status: "critical" },
    { id: 3, name: "John", status: "normal" },
    { id: 4, name: "Anu", status: "critical" }
];

let critical = patients.filter(function(p) {
    return p.status === "critical";
});
console.log("Critical Patients:", critical);

let found = patients.find(function(p) {
    return p.id === 2;
});
console.log("Patient with ID 2:", found);
console.log("Total Patients:", patients.length);*/


//task 14
/*const store1 = [
    { name: "Mobile", price: 10000 },
    { name: "Laptop", price: 50000 }
];

const store2 = [
    { name: "Headphone", price: 2000 }
];

const allProducts = [...store1, ...store2];
const newList = [...allProducts, { name: "Watch", price: 3000 }];

for (let i = 0; i < newList.length; i++) {
    let { name, price } = newList[i];
    console.log(name, price);
}*/

//task 15

/*const group = ["Ravi", "Sita", "John"];

group.push("Anu");
console.log(group);
group.pop();
console.log(group);
group.unshift("Kiran");
console.log(group);
group.shift();
console.log(group);
group.splice(1, 0, "Rahul");
console.log("Final Group:", group);*/