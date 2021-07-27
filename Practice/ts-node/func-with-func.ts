// Defining a type for a function with no argument and no return value

type simpleFunction = () => void;
const callingAnotherFunction = (str: string, callback: simpleFunction): void => {
    console.log(`Logging ${str} to the screen!`)
    callback()
}

// Passing String and Function of type "SimpleFunction" in the arguments 
callingAnotherFunction("Aqib", (() => console.log("I am the Callback Function!")))


// Defining a type for a function with a number as an argument and returning a number as a return value

type singleParamFunction = (a: number) => number;
const mapFunction = (arr: number[], calculate: singleParamFunction): number[] => {
    return arr.map((number) => calculate(number))
}

console.log(mapFunction([1,2,3,4], (v => v * 100)))

// Creating a Closure in Typescript with a function returning a function from itself

type innerFunc = (a: number) => number;
const ClosureFunction = (n1: number): innerFunc => {
    return (n2: number) => n1 + n2
}

const funcAsValue = ClosureFunction(12)
console.log(funcAsValue(18))


