// Passing Str type and Number type (as optional) to the function
const optionalArgFunc = (str: string, num?: number): string => {
    return `str Value is : ${str}\nnum value is : ${num ? `${num}` : "NA"}`}

// console.log(optionalArgFunc('Hello', 12))
console.log(optionalArgFunc('Hello'))


// Accessing Optional Object key in the Function
interface optionalUserObj {
    name: string;
    info?: {
        semester?: number;
        grade?: String;
    }
} 

// Use Optional Chaining and Coalesce operator to output NA in case of absence of User's Grade
const optionalObjFunc = (user: optionalUserObj): string => {
    return `\nUser Name: ${user.name}\nUser Grade is: ${user?.info?.grade ?? "NA"}`
}

// console.log(optionalObjFunc({name: "Aqib", info: {semester: 4, grade: 'A'}}))
console.log(optionalObjFunc({name: "Aqib"}))


// Accessing Optional Callback function inside of the Function
type simpleFunc = () => void;

const optionalCallback = (str: string, callback?: simpleFunc): void => {
    console.log(`String is: ${str}`)
    // Making the function optional
    callback?.()
}

optionalCallback("Pizza")