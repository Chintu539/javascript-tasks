/*const students = [
  { id: 1, name: "Ravi", department: "CSE", mark: 85 },
  { id: 2, name: "Sita", department: "ECE", mark: 92 },
  { id: 3, name: "John", department: "EEE", mark: 60 },
  { id: 4, name: "Anu", department: "CSE", mark: 45 },
  { id: 5, name: "Rahul", department: "IT", mark: 78 }
];

console.log("Student Names:");
for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}

let total = 0;
for (let i = 0; i < students.length; i++) {
  total = total + students[i].mark;
}
console.log("Total Marks:", total);

console.log("Above 80:");
for (let i = 0; i < students.length; i++) {
  if (students[i].mark > 80) {
    console.log(students[i].name);
  }
}

console.log("Grades:");
for (let i = 0; i < students.length; i++) {
  let m = students[i].mark;
  let grade = "";

  if (m >= 90) {
    grade = "A";
  } else if (m >= 75) {
    grade = "B";
  } else if (m >= 50) {
    grade = "C";
  } else {
    grade = "Fail";
  }

  console.log(students[i].name + " - " + grade);
}

function printStudents() {
  for (let i = 0; i < students.length; i++) {
    console.log(
      students[i].id,
      students[i].name,
      students[i].department,
      students[i].mark
    );
  }
}
printStudents();*/
--------------------------------------------------------------
/*const employees = [
  { id: 1, name: "Ravi", salary: 25000, department: "IT" },
  { id: 2, name: "Sita", salary: 40000, department: "HR" },
  { id: 3, name: "John", salary: 32000, department: "Finance" },
  { id: 4, name: "Anu", salary: 28000, department: "IT" },
  { id: 5, name: "Rahul", salary: 50000, department: "HR" }
];

console.log("Employee Names:");
for (let i = 0; i < employees.length; i++) {
  console.log(employees[i].name);
}

let totalSalary = 0;
for (let i = 0; i < employees.length; i++) {
  totalSalary = totalSalary + employees[i].salary;
}
console.log("Total Salary:", totalSalary);

console.log("Salary above 30000:");
for (let i = 0; i < employees.length; i++) {
  if (employees[i].salary > 30000) {
    console.log(employees[i].name);
  }
}

console.log("Department Info:");
for (let i = 0; i < employees.length; i++) {
  let dept = employees[i].department;
  let message = "";

  switch (dept) {
    case "IT":
      message = "Works on software";
      break;
    case "HR":
      message = "Handles employees";
      break;
    case "Finance":
      message = "Manages money";
      break;
    default:
      message = "Other department";
  }

  console.log(employees[i].name + " - " + message);
}

function generateReport(callback) {
  console.log("Payroll Report:");
  callback();
}

function showDetails() {
  for (let i = 0; i < employees.length; i++) {
    console.log(
      employees[i].id,
      employees[i].name,
      employees[i].salary,
      employees[i].department
    );
  }
}
generateReport(showDetails);*/
------------------------------------------------------------------------------------
/*const foods = [
  { id: 1, foodName: "Biryani", price: 250, category: "Main" },
  { id: 2, foodName: "Pizza", price: 300, category: "Main" },
  { id: 3, foodName: "Burger", price: 150, category: "Snacks" },
  { id: 4, foodName: "IceCream", price: 100, category: "Dessert" },
  { id: 5, foodName: "Fried Rice", price: 220, category: "Main" }
];

console.log("Food Names:");
for (let i = 0; i < foods.length; i++) {
  console.log(foods[i].foodName);
}

let total = 0;
for (let i = 0; i < foods.length; i++) {
  total = total + foods[i].price;
}
console.log("Total Menu Value:", total);

console.log("Foods above 200:");
for (let i = 0; i < foods.length; i++) {
  if (foods[i].price > 200) {
    console.log(foods[i].foodName);
  }
}

console.log("Category Info:");
for (let i = 0; i < foods.length; i++) {
  let cat = foods[i].category;
  let msg = "";

  switch (cat) {
    case "Main":
      msg = "Full meal item";
      break;
    case "Snacks":
      msg = "Light food";
      break;
    case "Dessert":
      msg = "Sweet item";
      break;
    default:
      msg = "Other";
  }

  console.log(foods[i].foodName + " - " + msg);
}

function placeOrder(callback) {
  console.log("Order Placed Successfully!");
  callback();
}

function showOrder() {
  console.log("Your items:");
  for (let i = 0; i < foods.length; i++) {
    console.log(foods[i].foodName);
  }
}
placeOrder(showOrder);*/
----------------------------------------------------------------------------------------------
/*const movies = [
  { movieName: "RRR", ticketPrice: 200, availableSeats: 50, language: "Telugu" },
  { movieName: "Jawan", ticketPrice: 250, availableSeats: 0, language: "Hindi" },
  { movieName: "Leo", ticketPrice: 220, availableSeats: 30, language: "Tamil" }
];


console.log("Movie Names:");
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i].movieName);
}


let totalSeats = 0;

for (let i = 0; i < movies.length; i++) {
  totalSeats = totalSeats + movies[i].availableSeats;
}
console.log("Total Available Seats: " + totalSeats);


console.log("Booking Status:");

for (let i = 0; i < movies.length; i++) {
  if (movies[i].availableSeats > 0) {
    console.log(movies[i].movieName + " - Booking Available");
  } else {
    console.log(movies[i].movieName + " - Housefull");
  }
}


console.log("Movie Language:");

for (let i = 0; i < movies.length; i++) {

  let lang = movies[i].language;

  switch (lang) {
    case "Telugu":
      console.log(movies[i].movieName + " is Telugu Movie");
      break;

    case "Hindi":
      console.log(movies[i].movieName + " is Hindi Movie");
      break;

    case "Tamil":
      console.log(movies[i].movieName + " is Tamil Movie");
      break;

    default:
      console.log(movies[i].movieName + " Other Language");
  }
}

function booking(callback) {
  console.log("Booking Confirmed");
  callback();
}

function message() {
  console.log("Enjoy your movie!");
}
booking(message);*/
---------------------------------------------------------------------------

/*const patients = [
  { patientId: 1, patientName: "Ravi", age: 65, disease: "Heart" },
  { patientId: 2, patientName: "Sita", age: 45, disease: "Fever" },
  { patientId: 3, patientName: "John", age: 70, disease: "Diabetes" },
  { patientId: 4, patientName: "Anu", age: 30, disease: "Cold" },
  { patientId: 5, patientName: "Rahul", age: 80, disease: "Heart" }
];


console.log("Patient Names:");

for (let i = 0; i < patients.length; i++) {
  console.log(patients[i].patientName);
}


let count = 0;

for (let i = 0; i < patients.length; i++) {
  count = count + 1;
}

console.log("Total Patients: " + count);


console.log("Patients above 60:");

for (let i = 0; i < patients.length; i++) {
  if (patients[i].age > 60) {
    console.log(patients[i].patientName);
  }
}


console.log("Department:");

for (let i = 0; i < patients.length; i++) {

  let dis = patients[i].disease;

  switch (dis) {
    case "Heart":
      console.log(patients[i].patientName + " - Cardiology");
      break;

    case "Fever":
      console.log(patients[i].patientName + " - General");
      break;

    case "Diabetes":
      console.log(patients[i].patientName + " - Endocrinology");
      break;

    case "Cold":
      console.log(patients[i].patientName + " - General");
      break;

    default:
      console.log(patients[i].patientName + " - Other");
  }
}



function appointment(callback) {
  console.log("Appointment Confirmed");
  callback();
}

function message() {
  console.log("Visit Hospital on Time");
}
appointment(message);*/
------------------------------------------------------------------------------------------

/*const books = [
  { bookId: 1, bookName: "Java Basics", author: "Ravi", price: 600, category: "Programming" },
  { bookId: 2, bookName: "English Grammar", author: "Sita", price: 400, category: "Education" },
  { bookId: 3, bookName: "Maths Guide", author: "John", price: 700, category: "Education" },
  { bookId: 4, bookName: "Python Intro", author: "Anu", price: 800, category: "Programming" },
  { bookId: 5, bookName: "Story Book", author: "Rahul", price: 300, category: "Story" }
];


console.log("Book Names:");

for (let i = 0; i < books.length; i++) {
  console.log(books[i].bookName);
}


let total = 0;

for (let i = 0; i < books.length; i++) {
  total = total + books[i].price;
}

console.log("Total Book Value: " + total);


console.log("Books above 500:");

for (let i = 0; i < books.length; i++) {
  if (books[i].price > 500) {
    console.log(books[i].bookName);
  }
}


console.log("Book Categories:");

for (let i = 0; i < books.length; i++) {

  let cat = books[i].category;

  switch (cat) {
    case "Programming":
      console.log(books[i].bookName + " - Programming Book");
      break;

    case "Education":
      console.log(books[i].bookName + " - Education Book");
      break;

    case "Story":
      console.log(books[i].bookName + " - Story Book");
      break;

    default:
      console.log(books[i].bookName + " - Other");
  }
}


function issueBook() {
  console.log("Book Issued Successfully");
}
issueBook();*/
---------------------------------------------------------------------------------
/*const products = [
  { productId: 1, productName: "Mobile", price: 15000, stock: 5 },
  { productId: 2, productName: "Laptop", price: 50000, stock: 15 },
  { productId: 3, productName: "Headphones", price: 2000, stock: 8 },
  { productId: 4, productName: "Keyboard", price: 1000, stock: 20 },
  { productId: 5, productName: "Mouse", price: 500, stock: 3 }
];


console.log("Product Names:");

for (let i = 0; i < products.length; i++) {
  console.log(products[i].productName);
}


let totalValue = 0;

for (let i = 0; i < products.length; i++) {
  totalValue = totalValue + (products[i].price * products[i].stock);
}

console.log("Total Inventory Value: " + totalValue);


console.log("Low Stock Products:");

for (let i = 0; i < products.length; i++) {
  if (products[i].stock < 10) {
    console.log(products[i].productName);
  }
}


console.log("Stock Status:");

for (let i = 0; i < products.length; i++) {
  if (products[i].stock > 0) {
    console.log(products[i].productName + " - In Stock");
  } else {
    console.log(products[i].productName + " - Out of Stock");
  }
}



function generateReport(callback) {
  console.log("Product Report:");
  callback();
}

function showProducts() {
  for (let i = 0; i < products.length; i++) {
    console.log(
      products[i].productId,
      products[i].productName,
      products[i].price,
      products[i].stock
    );
  }
}
generateReport(showProducts);*/

----------------------------------------------------------------------------------
/*const applicants = [
  { name: "Ravi", age: 19, percentage: 75, department: "CSE" },
  { name: "Sita", age: 17, percentage: 80, department: "ECE" },
  { name: "John", age: 20, percentage: 55, department: "EEE" },
  { name: "Anu", age: 18, percentage: 65, department: "CSE" },
  { name: "Rahul", age: 21, percentage: 90, department: "IT" }
];


console.log("Applicant Names:");

for (let i = 0; i < applicants.length; i++) {
  console.log(applicants[i].name);
}


console.log("Eligibility Check:");

let eligibleCount = 0;

for (let i = 0; i < applicants.length; i++) {

  if (applicants[i].age >= 18 && applicants[i].percentage >= 60) {
    console.log(applicants[i].name + " - Eligible");
    eligibleCount = eligibleCount + 1;
  } else {
    console.log(applicants[i].name + " - Not Eligible");
  }

}


console.log("Total Eligible Students: " + eligibleCount);


console.log("Department Details:");

for (let i = 0; i < applicants.length; i++) {

  let dept = applicants[i].department;

  switch (dept) {
    case "CSE":
      console.log(applicants[i].name + " - Computer Science");
      break;

    case "ECE":
      console.log(applicants[i].name + " - Electronics");
      break;

    case "EEE":
      console.log(applicants[i].name + " - Electrical");
      break;

    case "IT":
      console.log(applicants[i].name + " - Information Technology");
      break;

    default:
      console.log(applicants[i].name + " - Other");
  }
}

function admissionResult(callback) {
  console.log("Admission Results:");
  callback();
}

function showApplicants() {
  for (let i = 0; i < applicants.length; i++) {
    console.log(
      applicants[i].name,
      applicants[i].age,
      applicants[i].percentage,
      applicants[i].department
    );
  }
}
admissionResult(showApplicants);*/
--------------------------------------------------------------------------------------
/*const passengers = [
  { passengerId: 1, name: "Ravi", seatNumber: 12, ticketPrice: 500, busType: "AC" },
  { passengerId: 2, name: "Sita", seatNumber: 0, ticketPrice: 400, busType: "Non-AC" },
  { passengerId: 3, name: "John", seatNumber: 15, ticketPrice: 600, busType: "Sleeper" },
  { passengerId: 4, name: "Anu", seatNumber: 0, ticketPrice: 450, busType: "AC" },
  { passengerId: 5, name: "Rahul", seatNumber: 20, ticketPrice: 550, busType: "Sleeper" }
];


console.log("Passenger Names:");

for (let i = 0; i < passengers.length; i++) {
  console.log(passengers[i].name);
}


let total = 0;

for (let i = 0; i < passengers.length; i++) {
  total = total + passengers[i].ticketPrice;
}

console.log("Total Collection: " + total);


console.log("Seat Status:");

for (let i = 0; i < passengers.length; i++) {
  if (passengers[i].seatNumber > 0) {
    console.log(passengers[i].name + " - Seat Booked");
  } else {
    console.log(passengers[i].name + " - No Seat");
  }
}


console.log("Bus Type:");

for (let i = 0; i < passengers.length; i++) {

  let type = passengers[i].busType;

  switch (type) {
    case "AC":
      console.log(passengers[i].name + " - AC Bus");
      break;

    case "Non-AC":
      console.log(passengers[i].name + " - Non-AC Bus");
      break;

    case "Sleeper":
      console.log(passengers[i].name + " - Sleeper Bus");
      break;

    default:
      console.log(passengers[i].name + " - Other Bus");
  }
}

function ticketConfirm(callback) {
  console.log("Ticket Confirmed");
  callback();
}

function showPassengers() {
  for (let i = 0; i < passengers.length; i++) {
    console.log(
      passengers[i].passengerId,
      passengers[i].name,
      passengers[i].seatNumber,
      passengers[i].ticketPrice
    );
  }
}

// call function
ticketConfirm(showPassengers);*/
------------------------------------------------------------------------------
/*const mobiles = [
  { brand: "Samsung", model: "S21", price: 30000, stock: 5 },
  { brand: "Apple", model: "iPhone 13", price: 70000, stock: 3 },
  { brand: "Realme", model: "Narzo", price: 15000, stock: 10 },
  { brand: "OnePlus", model: "Nord", price: 28000, stock: 4 },
  { brand: "Redmi", model: "Note 12", price: 18000, stock: 8 }
];


console.log("Mobile Names:");

for (let i = 0; i < mobiles.length; i++) {
  console.log(mobiles[i].brand + " " + mobiles[i].model);
}


let totalValue = 0;

for (let i = 0; i < mobiles.length; i++) {
  totalValue = totalValue + (mobiles[i].price * mobiles[i].stock);
}

console.log("Total Stock Value: " + totalValue);


console.log("Mobiles above 20000:");

for (let i = 0; i < mobiles.length; i++) {
  if (mobiles[i].price > 20000) {
    console.log(mobiles[i].brand + " " + mobiles[i].model);
  }
}


console.log("Brand Category:");

for (let i = 0; i < mobiles.length; i++) {

  let b = mobiles[i].brand;

  switch (b) {
    case "Samsung":
      console.log(mobiles[i].model + " - Premium Android");
      break;

    case "Apple":
      console.log(mobiles[i].model + " - iOS Device");
      break;

    case "OnePlus":
      console.log(mobiles[i].model + " - Flagship Killer");
      break;

    case "Realme":
      console.log(mobiles[i].model + " - Budget Phone");
      break;

    case "Redmi":
      console.log(mobiles[i].model + " - Value for Money");
      break;

    default:
      console.log(mobiles[i].model + " - Other Brand");
  }
}

function salesReport() {
  let data = "";

  for (let i = 0; i < mobiles.length; i++) {
    data = data + mobiles[i].brand + " " + mobiles[i].model + " ";
  }
  return data;
}

function generateReport(callback) {
  console.log("Sales Report Generated");

  let result = callback();
  console.log("Mobiles:", result); 
}
generateReport(salesReport);*/
