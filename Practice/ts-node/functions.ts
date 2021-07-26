// Passing Number type as arguments and returning Number type as the return value
const addNumbers = (a: number, b: number): number => {
    return a+b
}

// Passing String type as arguments with default params and returning String type as the return value
export const concatStrings = (s1: String, s2: String = 'default'): string => {
    return `${s1} ${s2}`
}

// Passing Union type as arguments and returning String type as the return value
const utilityFormat = (str: String, params: String | number): string => {
    return `String : ${str}, Params: ${params}`
}

// Passing Union type as arguments and returning Void type as the return value
export const format = (str: String, params: String | number): void => {
    console.log(utilityFormat(str, params))
}

// Passing String as an argument type and returning Promise type as a return value
export const promiseFunc = (url: String): Promise<string> => {
    return Promise.resolve(`Fetching Data from ${url}`)
}

// Passing REST parameter as an argument type and returning String type as a return type
export const restParams = (name: String, ...hobbies: string[]): String => {
    return `Name is : ${name}. Hobbies are : ${hobbies.join(' ')}`
}

export default addNumbers