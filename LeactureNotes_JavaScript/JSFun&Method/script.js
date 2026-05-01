let a = 10,
  b = 20;

function sum(a, b) {
  let c = a + b;
  // console.log(c);
  return c;
}

let result = sum(a, b);

console.log(result);

// Function Expresssion as know as Anonymous Function

let fun = function () {
  console.log("This is function expression");
};

console.log(fun);

fun();

let addition = function (a, b) {
  return a + b;
};

console.log(addition);

console.log(addition(100, 200));

console.log(addition());


// Arrow Function

const arrowFun = () => {
    console.log("This is arrow function");
} 
arrowFun();



const arrowadd = (a , b) => a + b;

console.log(arrowadd(100 , 200));
