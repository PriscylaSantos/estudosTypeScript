/* Enum */
enum Colors { Red = 123, Green = 43, Blue = 27}
let c: Colors = Colors.Green;
console.log(c);

enum Color { Red = 1, Green, Blue}
let colorName: string = Color[2];
console.log(colorName);
