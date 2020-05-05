const person= {

    name: "jeff",
    age: 30,
    hobby: [1,"footbal"]
};

person.hobby.push('addmin');
person.hobby[2]="win";
let favourite: string[];
favourite= ["jeff",",miller"]
console.log(person.hobby);

for(const hobbies of person.hobby){
    console.log(hobbies);
}


