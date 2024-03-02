const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.use(express.static(path.join(__dirname, 'public')));

// app.use(bodyParser.urlencoded({ extended: true }));

// first middleware before the response is sent
app.use(function(req, res, next){
  console.log("start");
  next();
});

//route handler
app.get('/',function(req,res,next){
  res.send("Middle")
  next();
});

app.use('/', function(req,res){
  console.log('End');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});