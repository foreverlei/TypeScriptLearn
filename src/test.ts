let x :[string,number];
x = ["aa",0];
// x = [10,"aa"];

// x[2] = "aa";

console.log(x)
enum Color {Red = 1, Green, Blue}

let colorName:Color = 2;
let colorNameString :string = Color[3];

console.log(colorNameString);

interface SearchFunc{
    (source:string,subSource:string):boolean;
}

let  mfunc :SearchFunc;
mfunc = function(sourc1e:string,sunString:string){
    return false;
}
// interface ClockConstructor {
//     new (hour: number, minute: number);
// }

// class Clock implements ClockConstructor {
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }


interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick():void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
