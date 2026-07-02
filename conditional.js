//if elseif else statement is use for evaluating a variable and returns a value based on the variable
let a = 20;
let b = 20;
if (a > b) {
  console.log("a is greater than b");
} else if (a < b) {
  console.log("a is less than b");
} else {
  console.log("a is equal to b");
}

//switch statement is use for evaluating a variable and returns a value based on the variable
let c = 10;
 switch (c) {
  case 10:
    console.log("c is 10");
    break;
  case 20:
    console.log("c is 20");
    break;
  default:
    console.log("c is not 10 or 20");
}

//age 18 vote logic
let age = 10;
if (age == 18) {
  console.log("You are eligible to vote");
} else if (age > 18){
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

//find the largest number among three numbers
let age1 = 310;
let age2 = 320;
let age3 = 400;
if (age1 > age2 && age1 > age3) {
  console.log("age1 is the largest number");
}  else if (age2 > age1 && age2 > age3) {
  console.log("age2 is the largest number");
}  else {
  console.log("age3 is the largest number");
}

//swap two numbers logic with out using third variable
let x = 10;
let y = 20; 
let temp = x;
x = y;
y = temp;
console.log("x:",x);
console.log("y:",y);

//swap two numbers logic with using third variable
let p = 10;
let q = 20; 



//odd or even number logic
let num = 10;       
if (num % 2 == 0) {
  console.log("num is even number");
}   else {
  console.log("num is odd number");
}