// 1. Create an anonymous function and assign it to a variable.
let greet = function () {
  console.log("Hello");
};
greet();


// 2. Create an anonymous function that prints "Hello" using a variable.
let sayHello = function () {
  console.log("Hello");
};
sayHello();


// 3. Create an anonymous function that adds two numbers and returns the result.
let add = function (a, b) {
  return a + b;
};
console.log(add(10, 20));


// 4. Call an anonymous function stored in a variable and print the output.
let message = function () {
  return "Welcome";
};
console.log(message());


// 5. Pass an anonymous function inside setTimeout().
setTimeout(function () {
  console.log("This runs later");
}, 1000);


// 6. Use setTimeout() with an anonymous function to print a message after 2 seconds.
setTimeout(function () {
  console.log("Hello after 2 seconds");
}, 2000);


// 7. Create an Immediately Invoked Function (IIFE) using an anonymous function.
(function () {
  console.log("IIFE Executed");
})();


// 8. Write an IIFE that prints a message instantly.
(function () {
  console.log("This message prints instantly");
})();


// 9. Create an anonymous function and store it in a variable, then call it multiple times.
// let greet = function () {
//   console.log("Hello User");
// };

// greet();
// greet();
// greet();


// 10. Pass an anonymous function as a callback inside another function.
function execute(callback) {
  callback();
}

execute(function () {
  console.log("Callback function executed");
});


// 11. Create an anonymous function that:
// • takes parameters
// • returns a value
let multiply = function (a, b) {
  return a * b;
};
console.log(multiply(4, 5));

// 12. Write a program that demonstrates:
// • anonymous function in variable
// • anonymous function in callback
// • anonymous function as IIFE
// Anonymous function in variable
// let greet = function () {
//   console.log("Hello");
// };
// greet();

// Anonymous function as callback
function run(callback) {
  callback();
}

run(function () {
  console.log("Callback Executed");
});

// Anonymous function as IIFE
(function () {
  console.log("IIFE Executed");
})();