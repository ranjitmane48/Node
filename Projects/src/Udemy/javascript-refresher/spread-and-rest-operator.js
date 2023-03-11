const colors1 = ['red', 'blue'];

//slice method copies the entire array
const colors2 = colors1.slice();

//creates nested array
const colors3 = [colors2];

//spread operator creates copy of exisiting array and then creates a new array
const colors4 = [...colors1];

const person = {
    name : 'ranjit',
    age : 26
}

//copies the object using spread operator
const copiedPeson = {...person};

//if spread operator is used in argument list of the function 
// then it is rest operator
const toArray = (...args) => {
    return args;
}

console.log(colors2);
console.log(colors3);
console.log(colors4);
console.log(copiedPeson);
console.log(toArray(1,2,3,4,5,6));





