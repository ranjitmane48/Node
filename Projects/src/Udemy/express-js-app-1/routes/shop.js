const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

// router.get('/', (req,res) => {
//     res.send("Hello from Shop API!!");
// });

router.get('/', (req,res) => {
    res.sendFile(path.join(rootDir, '..', 'views', 'shop.html'));
});

router.get('/shop', (req,res) => {
    res.send("in the shop api");
});

module.exports = router;