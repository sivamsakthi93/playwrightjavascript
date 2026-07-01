//array is the container which can hold multiple values in a single variable
// ther is no length limit for array
// index starts from 0
// lenght starts from 1
// we can strore any type of data in array
// type of array--> 1. single dimension array 2. multi dimension array

let arr=[1,2,3,1,"sivam",true,false]
console.log(arr)
console.log(arr[0])
let arr1= new Array(5,2,3,4,5)
console.log(arr1)
console.log(arr1[0])
let arr2=new Array()
arr2[0]=2
arr2[1]=1
arr2[2]=3
console.log(arr2)
//2 dimension array
let arr3=[[1,2,3,4],[5,6,7,8],[9,10,11,12]]
console.log(arr3)
console.log(arr3[0][0])
console.log(arr3[1][3])

//array inbuild methods
//length--> returns the number of elements in the array
console.log(arr.length)
console.log(arr3.length)
console.log(arr3[0].length)
//toString--> returns the array as a string
let as=arr.toString()
console.log(as)
//push--> adds one or more elements to the end of an array and returns the new length of the array
let as1=arr.push(5)
console.log(as1)
console.log(arr)
//pop--> removes the last element from an array and returns that element
let as2=arr.pop()
console.log(as2)
console.log(arr)
//concat--> merges two or more arrays and returns a new array
let as5=arr.concat(arr1)
console.log(as5)
//shift--> removes the first element from an array and returns that element
let as3=arr.shift()
console.log(as3)
console.log(arr)
//unshift--> adds one or more elements to the beginning of an array and returns the new length of the array
let as4=arr.unshift(5)
console.log(as4)
console.log(arr)
//slice--> returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
let as6=arr.slice(1,3)
console.log(as6)
//includes--> determines whether an array includes a certain value among its entries, returning true or false as appropriate.
let as7=arr.includes(1)
console.log(as7)
//reverse--> reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
let as8=arr.reverse()
console.log(as8)
//indexOf--> returns the first index at which a given element can be found in the array, or -1 if it is not present.
let as9=arr.indexOf(1)
console.log(as9)
//lastIndexOf--> returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
let as10=arr.lastIndexOf(1)
console.log(as10)   
//join--> joins all elements of an array into a string.
let as11=arr.join("-")
console.log(as11)
//filter--> creates a new array with all elements that pass the test implemented by the provided function.
let as12=arr.filter((value)=> value>2)
console.log(as12)
//map--> creates a new array populated with the results of calling a provided function on every element in the calling array.
let as13=arr.map((value)=> value*2)
console.log(as13)
console.log(arr)