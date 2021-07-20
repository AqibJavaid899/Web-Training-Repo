// Arrays

// Defining an array of type numbers
let arr: number[] = []
arr.push(12)
arr.push(3.14)
//arr.push('str') // This is not allowed
console.log(arr)


// Defining a mixed typed array
let mixedArr: (string|number|boolean)[] = []
mixedArr.push(12)
mixedArr.push('Aqib')
mixedArr.push(true)

mixedArr.forEach((element) => {
    console.log(element)
})

// Objects

// Defining the structure of an object
let obj : {
    name: String,
    age: number,
    email: String,
    isPass: boolean
}

// Not sticking to the defined object structure and object datatypes will give error in compilation 
obj = {
    name: 'Aqib',
    age: 23,
    email: 'abc@gmail.com',
    isPass: true

}