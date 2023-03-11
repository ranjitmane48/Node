const logAge = function (age) {
    console.log(age);
}

const logName = (name) => {
    console.log(name);
}

// const add = (a,b) => {
//     return a + b;
// }

const add = (a,b) =>  a + b;
const addOne = a => a + 1;
const addRandom = () => Math.random().toPrecision(1);

logAge(26);
logName("ranjit");
console.log(add(1,2));
console.log(addOne(1));
console.log(addRandom());