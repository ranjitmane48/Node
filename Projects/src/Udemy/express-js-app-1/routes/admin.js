const express = require('express');
const path = require('path');

const router = express.Router();

// router.get('/add-user', (req,res,next) => {   
//     res.send("<form action='/admin/user' method='POST'><input type='text' name='user-name'><button type='submit'>Add User</button> </form>");
// });

router.get('/add-user', (req,res) => {
    res.sendFile(path.join(__dirname, "../", "views", "add-user.html"));
});

router.post('/user', (req,res, next) => {
    res.redirect('/');
 });

module.exports = router;
