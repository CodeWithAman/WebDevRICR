// 1. What are Jump Statements?
// Jump statements control the flow of execution:

// break → exits loop immediately
// continue → skips current iteration
// return → exits function and returns value


// 2. Stop loop when value becomes 5 (break)
// let i = 1;

// while (i <= 10) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
//   i++;
// }


// 3. Print 1 to 10 but stop at 6
// for (let i = 1; i <= 10; i++) {
//   if (i === 6) break;
//   console.log(i);
// }

// 4. Skip number 3 using continue
// for (let i = 1; i <= 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }


// 5. Skip a specific value
// let skip = 4;

// for (let i = 1; i <= 6; i++) {
//   if (i === skip) continue;
//   console.log(i);
// }


// 6. break exits loop immediately
// for (let i = 1; i <= 10; i++) {
//   if (i === 4) {
//     console.log("Loop stopped at", i);
//     break;
//   }
//   console.log(i);
// }


// 7. continue skips only current iteration
// for (let i = 1; i <= 5; i++) {
//   if (i === 2) continue;
//   console.log(i);
// }


// 8. Function to return sum
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(5, 3));


// 9. Function for total price (price + tax)
// function totalPrice(price, tax) {
//   return price + tax;
// }
// console.log(totalPrice(100, 18));


// 10. Code after return does not execute
// function test() {
//   return "Hello";
//   console.log("This will not run");
// }
// console.log(test());


// 11. Difference: break vs continue
// for (let i = 1; i <= 5; i++) {

//   if (i === 3) break;  
//   console.log("Break:", i);
// }

// continue example
// for (let i = 1; i <= 5; i++) {

//   if (i === 3) continue;
//   console.log("Continue:", i);
// }
// Difference:
// break → stops whole loop
// continue → skips one iteration


// 12. break control flow explanation
// for (let i = 1; i <= 5; i++) {
//   if (i === 3) break;
//   console.log(i);
// }
// console.log("Loop ended");
// Explanation:
// Loop runs → stops at 3
// Control moves outside loop
// Then "Loop ended" prints