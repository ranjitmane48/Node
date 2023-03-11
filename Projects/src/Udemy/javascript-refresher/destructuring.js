const person  = {
    name : "ranjit",
    age : 26,
    greet() {
        console.log("Hi!");
    }
}

const printName = ({name, age}) => {
    console.log(name);
}

const {name} = person;
printName(person);

const numbers = [1,2,3,4,5];
const [num1, num2] = numbers;


console.log(num1);
console.log(num2);
console.log(name);