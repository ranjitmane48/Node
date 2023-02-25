import { createServer } from "http";

//import http from 'http';

// const server = http.createServer((req,res) => {
//     res.end('Hello world!!');
// });


const server = createServer((req, res) => {
    res.end("Hello world!");
});

server.listen(4242, ()=> {
    console.log("server is listening!!");
});
