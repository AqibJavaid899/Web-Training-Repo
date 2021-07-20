// Defining a simple function using typescript construct
// Defining a function with a single argument
var sayHello = function (name) {
    return 'Hello ' + name;
};
console.log(sayHello('Ali'));
// console.log(sayHello(true)) // This is not allowed
// Defining a function which will calculate the area of the field
var area = function (height, width) {
    return height * width;
};
console.log('Area of the Field is : ', area(12, 10));
