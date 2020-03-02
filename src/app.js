var person = {
    name: "jeff",
    age: 30,
    hobby: [1, "footbal"]
};
person.hobby.push('addmin');
person.hobby[2] = "win";
var favourite;
favourite = ["jeff", ",miller"];
console.log(person.hobby);
for (var _i = 0, _a = person.hobby; _i < _a.length; _i++) {
    var hobbies = _a[_i];
    console.log(hobbies);
}
