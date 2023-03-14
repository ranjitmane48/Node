const express = require('express');

const router = express.Router();

router.get('/add-user', (req,res,next) => {   
    res.send("<form action='/user' method='POST'><input type='text' name='user-name'><button type='submit'>Add User</button> </form>");
});

router.post('/user', (req,res, next) => {
    console.log("in the /user method");
    res.redirect('/');
 });

module.exports = router;
