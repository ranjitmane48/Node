const os = require('os');

console.log("OS platform" + os.platform());
console.log("OS CPU architecture" + os.arch());
console.log("Logical CPU cores" + os.cpus().length);
console.log("Home directory of current user" + os.homedir());

// OUTPUT
// OS platformwin32
// OS CPU architecturex64
// Logical CPU cores8
// Home directory of current userC:\Users\ranjit-admin