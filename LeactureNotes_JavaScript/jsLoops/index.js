for(var i=0; i<=10; i++)
{
    console.log(i);
}


console.log("Multiplication Table of 2");
for(var i=1; i<=10; i++)
{
    console.log("2 x " + i + " = " + (2*i));
}

let a = [24, 58, 33, 86, 96, 12, 53, 23, 32, 100];
// console.log("Array Elements:");
// for loop 
// for(var i=0; i<10; i++)
// {
//     console.log(a[i]);
// }

// while loop
// let k=0;
// while(k<10){
//     console.log(a[k]);
//     k++;
// }

// do while loop
console.log("Multiplication table of 2 using do while loop");
let k=1;
do{
    console.log("2 x " + k + " = " + (2*k));
    k++;
}while(k<=10);