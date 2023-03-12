const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if(url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if(url === '/message' && method === 'POST') {

        const body = [];

        //data event indicates the data is available in the request
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        //end event indicates node has completed parsing of request body
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>My First Page</h1></body>')
    res.write('</html>');
    res.end();
}

//module.exports = requestHandler;

// module.exports = {
//     handler : requestHandler,
//     text : "some random text"
// }

exports.handler = requestHandler;
exports.text = "some random text";