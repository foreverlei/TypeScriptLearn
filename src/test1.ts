// interface Shape {
//     color: string;
// }

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


class Animal1 {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal1 {
    age:number = 10;
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal = new Animal1("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");


rhino = animal as Rhino;
console.log(rhino.age);
// animal = rhino;
// animal = employee; // 错误: Animal 与 Employee 不兼容.
