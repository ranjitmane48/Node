const express = require("express");
const router = express.Router();
const users = [{ name: "Kyle" }, { name: "sally" }];

router.use(logger);

router.get("/", (req, res) => {
  res.status(200).send("Users List Information!!");
});

//route with common path to different types of requests
router
  .route("/:id")
  .get((req, res) => {
    const result = `Get Users with ID : ${req.params.id} 
                    New User Information : ${req.user.name}`;
    res.status(200).send(result);
  })
  .put((req, res) => {
    res.send(`Put Users with ID : ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete Users with ID : ${req.params.id}`);
  });

router.post("new-user", (req, res) => {
  res.send("New User Form!!");
});

//Param is middleware/function
//if given parameters names matches the parameter name
//It accepts a parameter called next which is a middleware
//Middleware is a function which executes between starting of request and ending of the request
router.param("id", (req, res, next, id) => {
  console.log(`param method : ${id}`);
  //set a random variable [user] to store the value
  req.user = users[id];
  next();
});

//to define middleware function, add req,res and next parameters in the function
function logger(req, res, next) {
  //prints the URL where the request comes from
  console.log(req.originalUrl);
  next();
}

module.exports = router;
