// 1. What is the purpose of switch-case in JavaScript?
let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  default:
    console.log("Invalid");
}


// 2. Write a program to display a drink based on user choice (1 → Tea, 2 → Coffee, 3 → Juice, default → Invalid).
let choice = 2;

switch (choice) {
  case 1:
    console.log("Tea");
    break;

  case 2:
    console.log("Coffee");
    break;

  case 3:
    console.log("Juice");
    break;

  default:
    console.log("Invalid Choice");
}


// 3. Write a program to display the day of the week based on a number (1–7).
let day = 5;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("Saturday");
    break;

  case 7:
    console.log("Sunday");
    break;

  default:
    console.log("Invalid Day");
}


// 4. Write a program using switch-case with string values (like "Vanilla", "Chocolate", "Strawberry").
let flavor = "Chocolate";

switch (flavor) {
  case "Vanilla":
    console.log("Vanilla Ice Cream");
    break;

  case "Chocolate":
    console.log("Chocolate Ice Cream");
    break;

  case "Strawberry":
    console.log("Strawberry Ice Cream");
    break;

  default:
    console.log("Flavor not available");
}


// 5. Write a program to show how default works when no case matches.
let number = 10;

switch (number) {
  case 1:
    console.log("One");
    break;

  case 2:
    console.log("Two");
    break;

  default:
    console.log("No case matched");
}


// 6. Write a program and explain how break works in switch-case.
let num = 1;

switch (num) {
  case 1:
    console.log("Case 1");
    break;

  case 2:
    console.log("Case 2");
    break;
}


// 7. Write a program and observe what happens if break is not used.
let num = 1;

switch (num) {
  case 1:
    console.log("Case 1");

  case 2:
    console.log("Case 2");

  default:
    console.log("Default");
}


// 8. Create a program that demonstrates fall-through behavior in switch-case.
let grade = "A";

switch (grade) {
  case "A":
  case "B":
    console.log("Excellent");
    break;

  case "C":
    console.log("Good");
    break;

  default:
    console.log("Try Again");
}


// 9. Write a program to handle menu selection (like Home, About, Contact) using switch-case.
let menu = "Contact";

switch (menu) {
  case "Home":
    console.log("Welcome Home");
    break;

  case "About":
    console.log("About Us");
    break;

  case "Contact":
    console.log("Contact Page");
    break;

  default:
    console.log("Invalid Menu");
}


// 10. Write a program and explain how switch-case compares values (strict equality).
let value = "1";

switch (value) {
  case 1:
    console.log("Number One");
    break;

  case "1":
    console.log("String One");
    break;

  default:
    console.log("No Match");
}


// 11. Write a program and trace step-by-step how matching happens in switch-case.
let color = "red";

switch (color) {
  case "blue":
    console.log("Blue Color");
    break;

  case "red":
    console.log("Red Color");
    break;

  default:
    console.log("No Color");
}


// 12. Write a program and explain when the default block executes.
let fruit = "Mango";

switch (fruit) {
  case "Apple":
    console.log("Apple Selected");
    break;

  case "Banana":
    console.log("Banana Selected");
    break;

  default:
    console.log("Fruit not available");
}
