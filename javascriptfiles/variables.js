// variable is reserved memory area which is used to store the data
// 2 type of variable
// for declearing the variable we have  3 type
// var, let, const


// we need to dcleare the variable inside the method/function
// decleare the gloabal variable out side the method

// var --> old one we can able to decleare the duplicate variable and we can use it for both local and gloabal
// we can able to update the data
// let --> latest one we can't able to decleare the duplicate variable and we can use it for both local and gloabal
// const--> we can't able to update the data


let a="lll";
var b="vvv";
const c=89;


function f1(){
    let a=100;
    console.log(a);
    console.log(b);
}

function f2(){
    console.log(b);

}

function f3(){
    console.log(c);
}

f1();
f2();
f3();