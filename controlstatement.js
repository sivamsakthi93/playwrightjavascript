// a = 8;

// while (a < 10) { 
//   console.log(a);
//   a++;
// }

// a = 12;

// while (a > 10) { 
//   console.log(a);
//   a--;
// }

//for loop is use for iterating a block of code a number of times
for (let i = 0; i <= 6; i++) {
    if (i === 3) {
        //break;
        continue;
    }
  console.log(i);
}

//for loop is use for iterating a block of code a number of times
//it is used to iterate over the elements of an array or a collection
let j = ["abc", "bac", "cba"];
for (let i = 0; i < j.length; i++) {
  console.log(j[i]);
}


//for each loop is use for iterating a block of code a number of times
//it is used to iterate over the elements of an array or a collection
let s = ["d", "e", "f"];
s.forEach(y=> {
  console.log(y);
});

//for of loop is use for iterating a block of code a number of times
//it iterates over the values of an iterable object such as an array, string, or map
let t = ["g", "h", "i"];    
for (let x of t) {
  console.log(x);
}

//for in loop is use for iterating a block of code a number of times
// it iterates over the properties of an object or the elements of an array
let u = {name: "John", age: 30, city: "New York"};
for (let key in u) {
  console.log(key + ": " + u[key]);
}

let k = ["dsdf", "easd", "fqew"];    
for (let i in k) {
  console.log(k[i]);
}