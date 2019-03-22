// interface Shape {
//     color: string;
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// interface Square extends Shape {
//     sideLength: number;
// }
// let square = <Square>{};
// square.color = "blue";
// square.sideLength = 10;
// class Animal1 {
//     name: string;
//     constructor(theName: string) { this.name = theName; }
//     move(distanceInMeters: number = 0) {
//         console.log(`${this.name} moved ${distanceInMeters}m.`);
//     }
// }
// class Snake1 extends Animal1 {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 5) {
//         console.log("Slithering...");
//         super.move(distanceInMeters);
//     }
// }
// class Horse1 extends Animal1 {
//     constructor(name: string) { super(name); }
//     move(distanceInMeters = 45) {
//         console.log("Galloping...");
//         super.move(distanceInMeters);
//     }
// }
// let sam1 = new Snake1("Sammy the Python");
// let tom1: Animal1 = new Horse1("Tommy the Palomino");
// sam1.move();
// tom1.move(34);
var Animal1 = /** @class */ (function () {
    function Animal1(theName) {
        this.name = theName;
    }
    return Animal1;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        var _this = _super.call(this, "Rhino") || this;
        _this.age = 10;
        return _this;
    }
    return Rhino;
}(Animal1));
var Employee = /** @class */ (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animal = new Animal1("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");
rhino = animal;
console.log(rhino.age);
// animal = rhino;
// animal = employee; // 错误: Animal 与 Employee 不兼容.
//# sourceMappingURL=test1.js.map