// const express = require('express');
// const app = express();
// const port = 5500;

// app.listen(port,()=>{
//     console.log('server running');
// });

// // GET 

// app.get("/",(req, res, next) => {
//     res.send("This is express server")
// })

// //handling get

// app.get("/hello",(req,res,next)=>{
//     res.send("this is the hello response");
// })

const http = require("http");
const fs = require("fs");
http.createServer(function (req,res){
const log = `${Date.now()}: ${req.url}: NEW REQUEST\n`;
fs.appendFile("Log.txt", log, (err,data)=>{
res.write("Hello\n");
res.end("Hello World!");
});
}).listen((8000), ()=> console.log("Server started at 8000"));