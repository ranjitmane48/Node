const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true).query;
  console.log(parsedUrl);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("Hello World");
  res.end();
});

server.listen(5000, () => {
  console.log("server is listening on 5000");
});
