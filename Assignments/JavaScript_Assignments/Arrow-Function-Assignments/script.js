// 1. Create an arrow function that prints “Welcome to JavaScript”.
const welcome = () => {
  console.log("Welcome to JavaScript");
};
welcome();


// 2. Write an arrow function that takes a name and prints a greeting message.
const greet = (name) => {
  console.log("Hello " + name);
};
greet("Aman");


// 3. Create an arrow function that adds two numbers and returns the result.
const add = (a, b) => {
  return a + b;
};
console.log(add(10, 20));


// 4. Write an arrow function that multiplies two numbers and prints the output.
const multiply = (a, b) => {
  console.log(a * b);
};
multiply(4, 5);


// 5. Create an arrow function that returns the square of a number.
const square = (num) => {
  return num * num;
};
console.log(square(6));


// 6. Write an arrow function that takes three numbers and returns their sum.
const sum = (a, b, c) => {
  return a + b + c;
};
console.log(sum(10, 20, 30));


// 7. Create an arrow function that returns the length of a given string.
const getLength = (str) => {
  return str.length;
};
console.log(getLength("JavaScript"));


// 8. Create an arrow function that checks whether a number is positive or negative.
const checkNumber = (num) => {
  if (num >= 0) {
    return "Positive";
  } else {
    return "Negative";
  }
};
console.log(checkNumber(-5));


// 9. Write an arrow function that finds the difference between two numbers.
const difference = (a, b) => {
  return a - b;
};
console.log(difference(20, 8));


// 10. Create an arrow function that returns a message like “Learning Arrow Functions”.
const message = () => {
  return "Learning Arrow Functions";
};
console.log(message());


// 11. Write an arrow function that returns the average of three numbers.
const average = (a, b, c) => {
  return (a + b + c) / 3;
};
console.log(average(10, 20, 30));