var x;
x = ["aa", 0];
// x[2] = "aa";
console.log(x);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = 2;
var colorNameString = Color[3];
console.log(colorNameString);
//# sourceMappingURL=test.js.map