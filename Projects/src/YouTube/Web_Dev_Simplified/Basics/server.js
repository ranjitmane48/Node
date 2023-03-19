const express = require("express");
const app = express();
const usersRouters = require("./routes/userRoute");

//static() is used to specify the name of the folder that you want to make public to serve static files
app.use(express.static("public"));
app.set("view engine", "ejs");
//Logger is a middleware
//Middleware runs from the top to bottom
//Define middleware at the top of the page
//If you don't want to use middleware globally, middleware can also be applied at the individual endpoint/ route
//app.use(logger);

//when get method is invoked, it calls the middleware first
//The middleware then executes the next() method i.e. invokes the next method and returns the response
//The get method accepts the n number of middlewares
app.get("/", (req, res) => {
  //res.status(500).send("Hi!!");
  //res.status(500).json({"message" : "Hi"});
  //res.download("server.js");
  res.render("index", { text: "this is text from the server" });
});

app.use("/user", usersRouters);
app.listen(5000);
