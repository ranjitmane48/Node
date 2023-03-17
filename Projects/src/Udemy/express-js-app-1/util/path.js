const path = require("path");

//dirname returns directory name of the path
module.exports = path.dirname(require.main.filename);
console.log("exported path" + path.dirname(require.main.filename));
//module.exports = path.dirname(process.mainModule.filename);
