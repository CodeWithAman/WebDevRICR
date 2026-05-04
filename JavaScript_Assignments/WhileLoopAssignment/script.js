// 1. Print numbers from 1 to 5
let i1 = 1;

while (i1 <= 5) {
  console.log(i1);
  i1++;
}

// 2. Print numbers from 5 to 1
let i2 = 5;

while (i2 >= 1) {
  console.log(i2);
  i2--;
}

// 3. Start from 2 and keep adding 2 (less than 11)
let i3 = 2;

while (i3 < 11) {
  console.log(i3);
  i3 += 2;
}

// 4. Sum of numbers from 10 to 5
let i4 = 10;
let sum = 0;

while (i4 >= 5) {
  sum += i4;
  i4--;
}

console.log("Sum =", sum);

// 5. Role of initialization, condition, increment
let i5 = 1;          // Initialization (starting point)

while (i5 <= 5) {   // Condition (loop runs while true)
  console.log(i5);  // Work (task)
  i5++;             // Increment (update)
}


// 6. Trace execution step-by-step
let i6 = 1;

while (i6 <= 3) {
  console.log(i6);
  i6++;
}
// Execution trace:
// i = 1 → condition true → print 1 → i = 2
// i = 2 → condition true → print 2 → i = 3
// i = 3 → condition true → print 3 → i = 4
// i = 4 → condition false → loop stops


// 7. Condition false at beginning
let i7 = 10;

while (i7 < 5) {
  console.log(i7);
  i7++;
}


// 8. Variable not updated inside loop
let i8 = 1;

while (i8 <= 5) {
  console.log(i8);
  i8++ 
}


// 9. Infinite loop example
// let i9 = 1;

// while (true) {
//   console.log(i9);
//   i9++;
// }

// 10. Condition controls stopping
let l = 1;

while (l <= 5) {
  console.log(l);
  l++;
}


// 11. Increment vs Decrement
// Increment (forward)
let m = 1;
while (m <= 5) {
  console.log(m);
  m++;
}

// Decrement (reverse)
let j = 5;
while (j >= 1) {
  console.log(j);
  j--;
}

// 12. Number of times loop runs
let n = 1;

while (n <= 4) {
  console.log(n);
  n++;
}
