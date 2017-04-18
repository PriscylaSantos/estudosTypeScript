interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Meu nome é " + person.firstName + " " + person.lastName ;
}
var user = {firstName: "Priscyla", lastName: "Santos"};
console.log(greeter(user));