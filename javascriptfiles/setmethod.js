let s=new Set([34,34,6,7,8,0,0,"js","js",true,'a','b','c','d']);
console.log(s);
s.add("sql")
console.log(s);
s.forEach(e=>{
    console.log(e)
})
console.log(s.size);
console.log(s.has("js"))
s.delete(34)
console.log(s);
//s.clear();
console.log(s.size);
// join  sets
let s1=new Set(['a','b','c',55,60])
let c=s.union(s1);
console.log([...c]);

// get common data b/w 2 set

let i=s.intersection(s1);
console.log([...i]);
// get uniqe data but it take only from 1 st set
let d=s.difference(s1);
console.log([...d]);
// get unique value from both sets
let sd=s.symmetricDifference(s1);

// check if all elements exist in another set
console.log(s.isSubsetOf(s1))
// check if it contains all element of another set
console.log(s.isSupersetOf(s1))
//checks if set share zero common element
console.log(s.isDisjointFrom(s1))