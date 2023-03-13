const http = require('http');

const server = http.createServer((req,res) => {
    
    const url = req.url;
    const method = req.method;

    if(url === "/")
    {
        return res.end("Welcome to First Node.JS assignment!!");
    }

    if(url === "/users")
    {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><ul><li> John </li> <li> Jack </li></ul></body>');
        res.write('</html>');
        return res.end();
    }

    if(url == '/register')
    {
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"/><button type="submit">submit</button></form></body>');
        res.write('</html>');
    }

    if(method == 'POST' && url == '/create-user')
    {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        })

        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const username = parsedBody.split('=')[1];
            console.log(username);
        })
    }

    res.end('welcome to Node.JS server!!');
});


server.listen(3000, () => {
    console.log("server is listening on " + 3000);
})