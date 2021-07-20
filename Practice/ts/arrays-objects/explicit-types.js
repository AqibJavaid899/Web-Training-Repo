// Arrays
// Defining an array of type numbers
var arr = [];
arr.push(12);
arr.push(3.14);
//arr.push('str') // This is not allowed
console.log(arr);
// Defining a mixed typed array
var mixedArr = [];
mixedArr.push(12);
mixedArr.push('Aqib');
mixedArr.push(true);
mixedArr.forEach(function (element) {
    console.log(element);
});
// Objects
// Defining the structure of an object
var obj;
// Not sticking to the defined object structure and object datatypes will give error in compilation 
obj = {
    name: 'Aqib',
    age: 23,
    email: 'abc@gmail.com',
    isPass: true
};
