const express = require('express');
const path = require('path');

const rootDir = require('../util/path');
const router = express.Router();



// router.get('/add-user', (req,res,next) => {   
//     res.send("<form action='/admin/user' method='POST'><input type='text' name='user-name'><button type='submit'>Add User</button> </form>");
// });

router.get('/add-user', (req,res) => {
    console.log(rootDir);
    res.sendFile(path.join(rootDir, "..", "views", "add-user.html"));
});

router.post('/user', (req,res, next) => {
    res.redirect('/');
 });

module.exports = router;
