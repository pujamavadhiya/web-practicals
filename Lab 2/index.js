const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/form.html');
});

app.post('/submit', (req, res) => {
    const name = req.body.name;
    const rollNo = req.body.rollNo;

    console.log('Name:', name);
    console.log('Roll Number:', rollNo);

    res.send('Hello'+name+ 'Roll no '+rollNo+'form submitted sucessfully');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
