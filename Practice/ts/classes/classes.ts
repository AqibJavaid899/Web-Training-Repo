// Classes in TypeScript


class Car {
    constructor(readonly name: string, readonly brand : string, readonly price: number) {}

    basicDescription() {
        console.log(`\nCar Basic Information \nName: ${this.name}, \nBrand: ${this.brand}, \nPrice: $ ${this.price}`)
    }

}

// Inherited Class
class specificCar extends Car {
    readonly model: string;
    readonly isAutopilot: string;

    constructor(name: string, brand: string, price: number, model: string, isAutopilot: string) {
        super(name, brand, price)
        this.model = model
        this.isAutopilot = isAutopilot
    }
    description() {
        this.basicDescription()
        console.log(`\n\nCar Specific Information \nModel: ${this.model}, \nisAutopilot: ${this.isAutopilot}`)
    }
}


// Main Function
const obj1 = new specificCar('Tesla Model X', 'Tesla', 40000, 'Model X', 'Yes');
obj1.description()