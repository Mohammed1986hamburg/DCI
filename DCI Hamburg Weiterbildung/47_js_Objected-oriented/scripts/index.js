var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue",
    info: function () {
        return this.firstName + " " + this.lastName + this.age;
    },
    changeAge: function (x) {
        this.age=x;
        return this.age;
    }
}

console.log(typeof (person));
console.log(person.eyeColor);
console.log(person.info());
console.log(person.changeAge(76));
console.log(person.info());