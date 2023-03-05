const express = require('express');

const server = express();
server.set('view engine', 'ejs');

server.get('/', (req,res) => {
    res.render('index');
})

server.get('/about', (req,res) => {
    res.render('about');
})

server.listen(5000, ()=> {
    console.log("Express server is listeninig on " + 5000);
})