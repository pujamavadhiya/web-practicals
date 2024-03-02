const fs = require("fs");
fs.readFile("data.txt", "utf-8", (err,data)=>{
if(err){
console.log("Error encountered");
return;
}
console.log("Content in data.txt: ", data);
});
const datatoappend = "Learning Node";
fs.appendFile("data.txt", datatoappend, (err)=>{
if(err){
console.log("Error occured");
}
console.log("Data appended");
});