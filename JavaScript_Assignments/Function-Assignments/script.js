// 1. Create a simple function that prints "Hello World".
function greet() {
  console.log("Hello World");
}
greet();


// 2. Write a function that displays your name in the console.
function showName() {
  console.log("Aman Verma");
}
showName();


// 3. Create a function that prints "Welcome to College".
function welcome() {
  console.log("Welcome to College");
}
welcome();


// 4. Write a function that takes a name as a parameter and prints "Hello [name]".
function greet(name) {
  console.log("Hello " + name);
}
greet("Aman");


// 5. Create a function that takes two numbers and prints their sum.
function add(a, b) {
  console.log(a + b);
}
add(10, 20);


// 6. Write a function that takes a number and prints its square.
function square(num) {
  console.log(num * num);
}
square(5);

// 7. Create a function that takes two numbers and returns their addition.
function add(a, b) {
  return a + b;
}
console.log(add(5, 3));


// 8. Write a function that returns the multiplication of two numbers.
function multiply(a, b) {
  return a * b;
}
console.log(multiply(4, 5));


// 9. Create a function that takes a name and age and prints a message.
function details(name, age) {
  console.log(name + " is " + age + " years old");
}
details("Aman", 21);


// 10. Write a function that returns the average of three numbers.
function average(a, b, c) {
  return (a + b + c) / 3;
}
console.log(average(10, 20, 30));


// 11. Create a function and call it multiple times with different values.
function greet(name) {
  console.log("Hello " + name);
}
greet("Aman");
greet("Rahul");
greet("Priya");


// 12. Build a function that takes two numbers and returns the greater number.
function greater(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(greater(10, 25));