const fs = require("fs");

fs.appendFile("test.txt", "this is a sample text", (err) => console.log(err));
