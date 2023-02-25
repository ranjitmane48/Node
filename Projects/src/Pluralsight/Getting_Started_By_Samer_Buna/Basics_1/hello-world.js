const http = require('http');

const server = http.createServer((req,res) => {
    res.end('Hello world!!');
});

server.listen(4244, ()=> {
    console.log("server is listening!!");
});
