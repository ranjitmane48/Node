const express = require('express');
const { default: mongoose } = require('mongoose');
const process = require('node:process');

const app = express();
const db = mongoose.connect("mongodb://localhost:27017/");
const port = process.env.PORT | 5000;
const bookRouter = express.Router();
const Book = require('./models/BookModel');

bookRouter.route("/books").get((req, res) => {
  const response = {hello : "This is response from books router"};
  res.json(response);
});


bookRouter.route("/authors").get((req,res) => {
 const response = {hello: "This is response from authors router"}
  res.json(response);
});

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.end(`Welcome to my API!! \nToday's date is ${new Date().toTimeString()}`);
});

// eslint-disable-next-line linebreak-style
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port: ${port} at ${new Date().toTimeString()}`);
});
