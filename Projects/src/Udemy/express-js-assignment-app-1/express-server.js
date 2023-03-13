const express = require('express');

const app = express();

app.use('/users', (req,res, next) => {
    console.log("request is received at middleware 1");
    res.send("<ul><li>John</li> <li>Jack</li> <li>Jake</li></ul>")
});


app.use('/', (req,res, next) => {
    console.log("request is received at middleware 2");
    res.send("<h3>Hello! Welcome to Express.JS application assignment!!!</h3>")
});

app.listen(5000, () => {
    console.log("server is listening on port : " + 5000);
})