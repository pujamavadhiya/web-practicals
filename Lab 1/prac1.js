const http = require("http") 
const fs = require("fs")
const server = http.createServer((req, res) => { 
    console.log(req.headers)

    res.write("This is the response from the server") 

    const d = new Date()
    const log = `${d}:new request received\n`;
fs.appendFile('log.txt',log,(err,data)=>{});

switch(req.url){
    case "/":
        res.end("\n Home Page");
        break;
    default : 
        res.end("\n default page");
        break;
}
res.end(); 
}) 


server.listen((3001), () => { 
    console.log("Server is Running"); 
})