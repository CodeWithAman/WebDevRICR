// let arr = [12 , 23, 34, 45, 67, 78, 12];

// for(var i=0; i<7; i++){
//     console.log(arr[i]); 
// }

// console.log(arr);

// arr[2] = arr[2] + 10;

// console.log(arr);

// arr = [];

// console.log(arr);

let arr = [12 , 23, 34, 45, 67, 78, 12, 90, 100];

console.log(arr);

arr.push(110);
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift(11);
console.log(arr);

arr.shift();
console.log(arr);

console.log(arr.at(0));

console.log(arr.indexOf(67));

console.log(arr.includes(67));


let unShortArr = [12 , 23, 34, 45, 67, 78, 12, 90, 100];

console.log(unShortArr);

unShortArr.sort();

console.log(unShortArr)

console.log(unShortArr.reverse());

let newArr = [10, 20, 30, 40, 50];

for(var i=0; i<5; i++){
    console.log(newArr[i]);
}

console.log("forEach Loop");
newArr.forEach((element)=>{
    console.log(element);
});

for(let element of newArr){
    console.log(element);
}





