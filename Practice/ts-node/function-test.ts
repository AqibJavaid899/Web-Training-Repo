import addNumbers, {concatStrings, format, promiseFunc, restParams, getNames} from "./functions";

console.log(addNumbers(2,3))

console.log(concatStrings('John', 'Doe'))

format("John Doe", 'Male')
format('John Doe', 56)

console.log(promiseFunc('https://jsonschema.com'))

console.log(restParams('John', 'Reading', 'Sports', 'Video Games'))

console.log(getNames({firstName: 'John', lastName: 'Doe'}))