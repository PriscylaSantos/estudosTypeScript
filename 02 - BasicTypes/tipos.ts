/* Boolean */
let aberto: boolean = false;
console.log(aberto);

/* Number */
let idade: number = 26;
console.log(idade);

let hex: number = 0xf00d;
console.log(hex);

let binary: number = 0b1010;
console.log(binary);

let octal: number = 0o744;
console.log(octal);

/* String */
let nome : string = "Priscyla";
nome = "Priscyla Santos";
console.log(nome); 

let fullName: string = `Priscyla Santos`;
let age: number = 25;
let sentence: string = `Hello, my name is ${ fullName }. I'll be ${ age + 1 } years old nest month.`;
console.log(sentence);

/* Array */
let listOne: number[] = [1, 2, 3];
console.log(listOne);

let listTwo: Array<number> = [4, 5, 6];
console.log(listTwo);

let alunos: Array<string> = ["Ana", "Joana", "Paula", "Priscyla", "Natalia"];
console.log(alunos);

/* Tuple */
let x: [string, number];
x = ["Priscyla", 8];
console.log(x[0].substr(1));

x[3] = "Nataly";
console.log(x[3].toString());

console.log(x);

/* Enum */
enum Colors { Red = 123, Green = 43, Blue = 27}
let c: Colors = Colors.Green;
console.log(c);

enum Color { Red = 1, Green, Blue}
let colorName: string = Color[2];
console.log(colorName);

/* Any */
let notSure: any = 4;
console.log(notSure);
notSure = "Sou uma string";
console.log(notSure);
notSure = false;
console.log(notSure);

let list: any[] = [34, "banana maçã", false];
console.log(list);
list[0] = "Feijão Vermelho";
list[1] = 100;
list[2] = true;
console.log(list);

/* Void */
function warnUser(): void{
    console.log("This is my warning message");
}
let a: any = warnUser();

