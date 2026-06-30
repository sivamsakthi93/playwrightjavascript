// js object --> we cn store more then 1 data in to the single variable 
//the data will be store in the form of key and value formate
let details={
    name: "divya",
    location: "chennai",
    phoneno: 5678,
    working: true
}


// print the entire object
console.log(details)
// get the particular property 
console.log(details.name);
console.log(details["location"])
// add the property in existing js object
details.lastname="venkat"
details["role"]="tester"
console.log(details)
// update the existing property which is present inside the object
details.name="Bharathi"
details["role"]="automation tester"
console.log(details);

// delete the property
delete(details.name)
console.log(details)

console.log(delete(details))
//console.log(details)

for(let x in details){
   // console.log(x)
   console.log(x," : ", details[x])
}

