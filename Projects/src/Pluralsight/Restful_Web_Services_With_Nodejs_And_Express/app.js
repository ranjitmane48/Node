let express = require('express');

const app = express();
let port = process.env.PORT | 5000;

app.get('/', (req,res) => {
    res.end("Welcome to my API!!");
})

app.listen(port, () => {
    console.log("Server is listening on port " + port);
})