// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

// to get fewer properties out of the bigger object

const { PI, E, SQRT2 } = Math;

const circle = {
    label: 'circleX',
    radius: 2
};

const circleArea = ({radius}, {precision = 2} = {}) => 
    (PI * radius * radius).toFixed(precision);

//prints 12.57
console.log(circleArea(circle));
console.log(Math);

const [first, second, , fourth] = [10,20,30,40];
console.log(fourth);

const [firstItem, ...restOfItems] = [10,20,30,40];
//10
console.log(firstItem);
//[ 20, 30, 40 ]
console.log(restOfItems);

const data = {
    temp1: '001',
    temp2: '002',
    firstName: 'John',
    lastName: 'Doe'
}

const { temp1, temp2, ...person} = data;
const newObject = {
    ...person
};
console.log(newObject);
