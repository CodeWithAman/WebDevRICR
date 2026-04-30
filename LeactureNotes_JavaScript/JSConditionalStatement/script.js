// write the code to find positive and negative whole number
// let n = prompt("Enter a number: ");
// if (n > 0) {
//     console.log("Positive Integer");
// }
// else {
//     console.log("Negative Integer");
// }



// check if a person is eligible for voting or not
// let age = prompt("Enter your age: ")
// if (age >= 18) {
//     console.log("You are eligible for voting");
// }
// else {
//     console.log("You are not eligible for voting");
// }



// Check if a number is even or odd
// let num = prompt("Enter a number: ");
// if (num % 2 == 0) {
//     console.log("Even Number");
// }
// else {
//     console.log("Odd Number");
// }

// check grade based on marks
// let  marks = prompt("Enter your marks: ");
// if(marks >= 90){
//     console.log("Grade A");
// }
// else if(marks >= 75){
//     console.log("Grade B");

// }
// else if(marks >= 50){
//     console.log("Grade C");
// }
// else{
//     console.log("Fail");
// }

// check login condition
// let username = prompt("Enter your username: ");
// let password = prompt("Enter your password: ");
// // if(username == "aman" && password == "12345")
// // {
// //     console.log("Login successful");
// // }
// // else{
// //     console.log("Login failed");
// // }


// short hand if else statement

// // using ternary operator
// username == "aman" && password == "12345" ? console.log("login successful") : console.log("login failed");

let data ;

let name = "";
data = name || "N/A";
console.log(data);


// break amd continue statement example

for(let i=1; i<5; i++)
{
    if(i==3)
    {
        continue
    }

    console.log(i);
}


// switch case example

let day = prompt("Enter a day of the week: ");
switch(day)
{
    case 1:{
        console.log("Monday");
        break;
    }
    case 2:{
        console.log("Tuesday");
        break;
    }
    case 3:{
        console.log("Wednesday");
        break;
    }
    case 4:{
        console.log("Thursday");
        break;
    }
    case 5:{
        console.log("Friday");
        break;
    }
    case 6:{
        console.log("Saturday");
        break;
    }
    case 7:{
        console.log("Sunday");
        break;
    }
    default:{
        console.log("Invalid day");
    }
}
