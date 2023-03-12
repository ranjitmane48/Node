const http = require('http');
const requestHandler = require('./routes');

const server = http.createServer(requestHandler);

server.listen(5000, () => {
    console.log(`server is listening on ${5000}`);
})
