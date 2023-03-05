const fs = require('fs');
const files = ['./test1.js', 'abc', './test2.js'];

files.forEach(file => {
    try {
        const data = fs.readFileSync(file, 'utf-999');
        console.log(`file data is ${data}`);
    } catch (error) {
        console.log("error occurred " + error);
    }
});
