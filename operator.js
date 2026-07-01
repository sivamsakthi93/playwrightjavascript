/* aritmatic operator is use for performing mathematical operations on numbers
addition +
subtraction -
multiplication *
division / and %
increment ++ (pre-increment and post-increment)
decrement -- (pre-increment and post-increment) */

let a=100;
let b=20;
let c=a+b;
console.log(c)
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
//increment
console.log(a++)
console.log(a)
console.log(++a)
// //decrement
console.log(a--)
console.log(a)
console.log(--a)

/*assignment operator is use for assigning values to variables
d=e
d+=e
d-=e
d*=e
d/=e
d%=e*/
let d=10;
let e=20;
d+=e;
console.log(d)
d-=e;
console.log(d)
d*=e;
console.log(d)
d/=e;
console.log(d)
d%=e;
console.log(d)

//relational operator is use for comparing two values and returns a boolean value
let f=10;
let h="10";
let g=20;       
console.log(f>g) 
console.log(f<g)
console.log(f>=g)   
console.log(f<=g)
console.log(f==h)
console.log(f===h)
console.log(f!=g)
console.log(f!==g)

//logical operator is use for combining two or more conditions and returns a boolean value
// && --> and operator
// || --> or operator
// ! --> not operator

let i=10;
let j=20; 
console.log(i>j && i<j)
console.log(i>j || i<j)
console.log(!(i>j))