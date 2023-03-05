const fs = require('fs');

//readFile is asynchronous
fs.readFile( __filename, function(err, data) {
    console.log("file data is", data);
});

console.log('TEST');