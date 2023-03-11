const person = {
    name: "ranjit",
    age: 26,
    greet() {
        console.log(`Hi! I am ${this.name}`);
    }
    // greet : function () {
    //     console.log(`Hi! I am ${this.name}`);
    // }
};

console.log(person);
person.greet();