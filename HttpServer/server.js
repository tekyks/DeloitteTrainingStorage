const http = require('http');

const port = 7777;

//create a server
const server = http.createServer(function(req, res){
    //all the server logic
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    if(req.url == '/'){
        res.end('<H1> This is Home Page </H1>');
    }else if(req.url == '/about'){
        res.end('<H2> This is About Page </H2>');
    }else{
        res.end('<H3> This is Other Page </H3>');
    }
    
});




//server listening
server.listen(port, function(){
    console.log("Server is listening on Port : " + port);
});
