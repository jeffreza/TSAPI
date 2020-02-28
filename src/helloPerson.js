"use strict";
exports.__esModule = true;
function hello(person) {
    return "hello  " + person.firstName + "  " + person.lastName;
}
var person = { firstName: "ali", lastName: "raza" };
console.log(hello(person));
