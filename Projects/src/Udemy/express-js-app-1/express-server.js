const express = require('express');

const app = express();

app.use('/add-user', (req,res,next) => {
    console.log("In the middleware!");
    res.send("<h1>Add New User!!</h1>");
});

app.use('/', (req,res,next) => {
    console.log("In the middleware!");
    res.send("<h1>Hello from Express!!</h1>");
});

app.listen(3000, ()=> {
    console.log(`server is listening on port : ${3000}`);
});