const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('../routes/admin');
const shopRoutes = require('../routes/shop');
const app = express();
const path = require('path');

app.use(bodyParser.urlencoded({extended: false}));

app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);

app.get("/", (req,res) => {
    res.send("Hello from Express!");
});

app.use((req,res,next) => {
    console.log("error callback invoked");
    res.status(404).sendFile(path.join(__dirname, '../', 'views' , '404.html'));
});

app.listen(3000, ()=> {
    console.log(`server is listening on port : ${3000}`);
});