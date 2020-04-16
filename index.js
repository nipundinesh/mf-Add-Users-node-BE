const express = require('express');
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
const service = require('./src/services.js');

var app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/getUsers', (req, res) => {
    service.getUsers().then((data)=>{
        res.send(data)
    });
});

app.post('/addUser',  (req, res) => {
    var data = req.body;
    console.log('/addUser');
    console.log(data);

    service.addUser(data).then((res)=>{
        console.log("'res'");
    });
    
    res.send('Got a POST request')
  })


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))