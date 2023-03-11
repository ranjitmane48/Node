const items = ['ranjit', 26, 'satara'];

for(let item of items) {
    console.log(item);
}

console.log(items.map(item => {
    return "item : " + item;
}));