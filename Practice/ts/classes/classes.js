// Classes in TypeScript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(name, brand, price) {
        this.name = name;
        this.brand = brand;
        this.price = price;
    }
    Car.prototype.basicDescription = function () {
        console.log("\nCar Basic Information \nName: " + this.name + ", \nBrand: " + this.brand + ", \nPrice: $ " + this.price);
    };
    return Car;
}());
// Inherited Class
var specificCar = /** @class */ (function (_super) {
    __extends(specificCar, _super);
    function specificCar(name, brand, price, model, isAutopilot) {
        var _this = _super.call(this, name, brand, price) || this;
        _this.model = model;
        _this.isAutopilot = isAutopilot;
        return _this;
    }
    specificCar.prototype.description = function () {
        this.basicDescription();
        console.log("\n\nCar Specific Information \nModel: " + this.model + ", \nisAutopilot: " + this.isAutopilot);
    };
    return specificCar;
}(Car));
// Main Function
var obj1 = new specificCar('Tesla Model X', 'Tesla', 40000, 'Model X', 'Yes');
obj1.description();
