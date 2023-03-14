const express = require('express');

const router = express.Router();


router.get('/', (req,res) => {
    res.send("Hello from Shop API!!");
});

router.get('/shop', (req,res) => {
    res.send("in the shop api");
});

module.exports = router;