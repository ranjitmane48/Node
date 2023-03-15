const express = require('express');
const path = require('path');

const router = express.Router();

// router.get('/', (req,res) => {
//     res.send("Hello from Shop API!!");
// });

router.get('/', (req,res) => {
    console.log('current __dirname is ' + __dirname);
    res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

router.get('/shop', (req,res) => {
    res.send("in the shop api");
});

module.exports = router;