// 1. Declare a global variable and print it.
var name = "Aman"; // Global Variable

console.log(name);

// 2. Declare a global variable and access it inside a function.
var city = "Bhopal"; // Global Variable

function showCity() {
  console.log(city);
}
showCity();

// 3. Create a function and declare a local variable using var, then print it inside the function.
function displayName() {
  var student = "Aman"; // Local Variable
  console.log(student);
}
displayName();

// 4. Try to access a local variable outside the function and observe the error.
function displayName() {
  var student = "Aman";
  console.log(student);
}
displayName();
console.log(student); // Error

// 5. Create a function and declare a variable inside an if block using let, then print it inside the block.
function checkAge() {
  if (true) {
    let age = 20;
    console.log(age);
  }
}
checkAge();

// 6. Try to access the let variable outside the block and observe the error.
function checkAge() {
  if (true) {
    let age = 20;
    console.log(age);
  }

  console.log(age); // Error
}
checkAge();

// 7. Declare a variable using const inside a block and print it inside the block.
{
  const country = "India";
  console.log(country);
}

// 8. Try to access the const variable outside the block and observe the error.
{
  const country = "India";
  console.log(country);
}
console.log(country); // Error

// 9. Create a program with:
// One global variable
// One local variable
// One block variable
// and print them where accessible.
var college = "NRIIT"; // Global Variable

function showData() {
  var student = "Aman"; // Local Variable

  if (true) {
    let branch = "CSE"; // Block Variable

    console.log(college);
    console.log(student);
    console.log(branch);
  }

  console.log(college);
  console.log(student);
}
showData();
console.log(college);

// 10. Write a program to demonstrate:
// var works inside entire function
// let and const work only inside block { }
function testScope() {
  if (true) {
    var x = 10;
    let y = 20;
    const z = 30;

    console.log("Inside Block:");
    console.log(x);
    console.log(y);
    console.log(z);
  }

  console.log("Outside Block but Inside Function:");
  console.log(x);

  // console.log(y); // Error
  // console.log(z); // Error
}
testScope();
