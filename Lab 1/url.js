const url = require("url");
const http = require("http");
http.createServer(function (req,res){
const parsedUrl =
url.parse("https://www.w3schools.com/nodejs/nodejs_events.asp", true);
const data = {
'Protocol': parsedUrl.protocol,
'Host': parsedUrl.host,
'Path': parsedUrl.pathname,
'Query': parsedUrl.query,
'Fragment': parsedUrl.hash
}
const responseData = JSON.stringify(data);
res.setHeader('Content-Type', 'application/json');
res.end(responseData);
}).listen(8000, () => console.log("Server started at port: 8000"));