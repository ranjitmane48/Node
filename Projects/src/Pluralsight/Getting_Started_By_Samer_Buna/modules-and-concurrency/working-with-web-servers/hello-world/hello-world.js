const http = require('http');


//the request listenfer is a function which will be 
// invoked every time there is reqest event
const requestListener = (req,res) => {
    console.dir(res, { depth : 0});
    //console.dir(req, { depth : 0});
    //console.log(req.url);
    //req and res are both streams
    //req is readable stream while res is writabke stream
    res.write("hello world \n");
    res.end();
    //res.end("hello world \n");
}

const server = http.createServer(requestListener);

// const server = http.createServer( (req,res) => {
//     res.end("hello world");
// })

//subscribing the request event
//erver.on('request', requestListener);

server.listen(5000, ()=> {
    console.log("server is listening on port", 5000);
})
