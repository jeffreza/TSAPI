import { Person } from "./person";
import { addListener } from "cluster";

function hello(person:Person): string{

    return 'hello, ${person.firstName}, ${person.firstName} ';

}

let person: Person = {firstName:"ali", lastName:"raza"};

console.log(hello(person));