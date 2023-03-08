const express = require('express');

const app = express();

// eslint-disable-next-line no-undef
const port = process.env.PORT | 5000;

app.get('/', (req, res) => {
  res.end(`Welcome to my API!! \nToday's date is ${new Date().toLocaleDateString()}`);
});

// eslint-disable-next-line linebreak-style
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port: ${port} at ${new Date().toLocaleDateString()}`);
});
