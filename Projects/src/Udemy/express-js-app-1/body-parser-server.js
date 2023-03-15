const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes);

app.use("/", (req,res) => {
    res.send("Hello from Express!");
});

app.use((req,res,next) => {
    res.status(404).send('Page Not Found!!');
});

app.listen(3000, ()=> {
    console.log(`server is listening on port : ${3000}`);
});