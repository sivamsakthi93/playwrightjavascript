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

//swap two numbers logic with using third variable
let p = 10;
let q = 20; 



//swap two numbers logic with using third variable
let x = 10;
let y = 20; 
let temp = x;
x = y;
y = temp;
console.log("x:",x);
console.log("y:",y);


//odd or even number logic
let num = 10;       
if (num % 2 == 0) {
  console.log("num is even number");
}   else {
  console.log("num is odd number");
}

//Print the days of the week using switch case
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
    console.log("Invalid day");
}   

//print the month of the year using switch case
let month = 7;
switch (month) {
  case 1:   
    console.log("January");
    break;                      
    case 2:
    console.log("February");
    break;
    case 3:
    console.log("March");
    break;
    case 4:
    console.log("April");
    break;
    case 5:
    console.log("May");
    break;
    case 6:
    console.log("June");
    break;
    case 7:
    console.log("July");
    break;
    case 8:
    console.log("August");
    break;
    case 9: 
    console.log("September");
    break;
    case 10:
    console.log("October");
    break;
    case 11:
    console.log("November");
    break;
    case 12:
    console.log("December");
    break;
    default:    
    console.log("Invalid month");
}   