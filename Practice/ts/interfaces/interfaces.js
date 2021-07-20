// Interfaces in TypeScript
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * (this.radius * this.radius);
    };
    Circle.prototype.describeShape = function () {
        return 'The assigned shape is Circle...';
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(length, width) {
        this.length = length;
        this.width = width;
    }
    Rectangle.prototype.calculateArea = function () {
        return Math.PI * (this.length * this.width);
    };
    Rectangle.prototype.describeShape = function () {
        return 'The assigned shape is Rectangle...';
    };
    return Rectangle;
}());
// Main
var circleObj = new Circle(3);
console.log('The Area of Circle is : ' + circleObj.calculateArea());
console.log(circleObj.describeShape());
var rectObj = new Rectangle(4, 5);
console.log('\nThe Area of Rectangle is : ' + rectObj.calculateArea());
console.log(rectObj.describeShape());
