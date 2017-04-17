/**
 * name
 */
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName; 
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Meu nome é " + person.firstName + " " + person.lastName ;
}

var user = {firstName: "Priscyla", lastName: "Santos"};
var student = new Student("Priscyla", "C.", "Santos");

console.log(greeter(user));
console.log(student);
console.log(greeter(student));