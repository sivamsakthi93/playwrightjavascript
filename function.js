
// function is a block of code which is used to execute the command
// normal function/ non return type function
// return type function
// parameter function
// non parameter
// ananymous function
// arrow function
// self invoking function
// static function --> belongs to the class

// syntx for function ---> function nameOfFunction(){  }

function normalfun(){
    console.log("iam a non return type function")
}

function returntype(){
   let t="login with fb";
   console.log("iam a return type function")
   return t
}

function param(un, pw){
    console.log(un)
    console.log(pw)
}

let ananymous=function(){
    console.log("iam a anynomous function")
}

let arrowfun=()=>{
    console.log("iam a arrow function")
}

(function selfinvoking(){
    console.log("iam a self invoking function")
})();





normalfun();
let d=returntype();
console.log(d)
param('admin',123)
ananymous();
arrowfun();


// instance creation or object calling or instance calling or class calling
// syntx--> let a=new nameoftheclass();
// if we want to access one of the class functions into another file we can create instance
// achive the instance creation using new keyword
