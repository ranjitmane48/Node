const express = require('express');

const app = express();

app.use((req,rest,next) => {
    console.log("in the middleware");
    next(); //allows the request to continue to next middleware
});

app.use((req,res,next) => {
    console.log("in the another middleware");
    res.send('<b> Hello from express js !! </b>');
});

app.listen(3000, ()=> {
    console.log(`server is listening on port : ${3000}`);
});