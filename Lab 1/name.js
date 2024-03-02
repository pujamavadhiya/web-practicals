const http = require("http"); 
const url = require("url"); 
http.createServer(
    function (req, res){ 
        res.writeHead(200, { 
            "Content-Type": "text/plain" 
        }); 
        const parsedUrl = url.parse(req.url, true); 
        const {pathname, query} = parsedUrl; 
        if(pathname === "/"){ 
            res.end("Welcome to Home Page " + query.name); 
        } else if
        (pathname === "/about"){ 
            res.end("Welcome to about page "+ query.name); 
        } else{ 
            res.end("Welcome "+query.name); 
        } 
    }).listen(8000, ()=>console.log("Server started at 8000"));