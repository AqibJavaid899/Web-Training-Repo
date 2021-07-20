// Interfaces in TypeScript

interface Shape {
    calculateArea() : number;
    describeShape() : string;
}

class Circle implements Shape {
    constructor(readonly radius : number) {}

    calculateArea() : number {
        return Math.PI * (this.radius * this.radius)
    }

    describeShape () : string {
        return 'The assigned shape is Circle...'
    }
}

class Rectangle implements Shape {
    constructor(readonly length : number, readonly width: number) {}

    calculateArea() : number {
        return Math.PI * (this.length * this.width)
    }

    describeShape () : string {
        return 'The assigned shape is Rectangle...'
    }
}


// Main

const circleObj = new Circle(3)
console.log('The Area of Circle is : '+ circleObj.calculateArea())
console.log(circleObj.describeShape())

const rectObj = new Rectangle(4,5)
console.log('\nThe Area of Rectangle is : '+ rectObj.calculateArea())
console.log(rectObj.describeShape())