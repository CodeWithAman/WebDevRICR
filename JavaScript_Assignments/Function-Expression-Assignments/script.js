// 1. Create a function expression and store it in a variable, then call it.
let greet = function () {
  console.log("Hello World");
};
greet();


// 2. Write a function expression and execute it using the variable name.
let showMessage = function () {
  console.log("Welcome");
};
showMessage();


// 3. Create a function expression that takes one value and displays it.
let display = function (value) {
  console.log(value);
};
display("JavaScript");


// 4. Write a function expression that stores and prints a message.
let message = function () {
  console.log("Learning Function Expressions");
};
message();


// 5. Create a function expression with two parameters and display both values.
let details = function (name, age) {
  console.log(name, age);
};
details("Aman", 21);


// 6. Write two function expressions with different variable names and call both.
let hello = function () {
  console.log("Hello");
};

let bye = function () {
  console.log("Goodbye");
};
hello();
bye();


// 7. Create a function expression and assign it to another variable, then call both.
let greet = function () {
  console.log("Hi");
};
let another = greet;
greet();
another();


// 8. Write a function expression and print its returned value using console.log().
let add = function (a, b) {
  return a + b;
};
console.log(add(10, 20));


// 9. Call a function expression multiple times with different values.
let greet = function (name) {
  console.log("Hello " + name);
};

greet("Aman");
greet("Rahul");
greet("Priya");


// 10. Try calling a function expression before declaring it and observe what happens.
// sayHello(); // Error

let sayHello = function () {
  console.log("Hello");
};


// 11. Write a function expression that returns the average of three numbers.
let average = function (a, b, c) {
  return (a + b + c) / 3;
};
console.log(average(10, 20, 30));