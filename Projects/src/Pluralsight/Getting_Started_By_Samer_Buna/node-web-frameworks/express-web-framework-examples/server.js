const express = require('express');

const server = express();


server.get("/", (req,res) => {
    console.log("req: " + req);
    console.log("res: " + res);
    res.send("Welcome to Hello world !!");
})

server.get("/about", (req,res) => {
    console.log("req: " + req);
    console.log("res: " + res);
    res.send("Welcome to about page !!");
})

server.listen(5000, ()=> {
    console.log("server is listeninig on " + 5000);
})