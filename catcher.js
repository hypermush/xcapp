var express = require('express');
var fs = require('fs');
const bodyParser = require('body-parser');

var app = express();
//app.use(bodyParser.json());
//app.use(bodyParser.raw());
app.use(bodyParser.urlencoded({ extended: true , type: "application/x-www-form-urlencoded" }));

app.get('/dreyfus', function(req, res) {
    res.send('CHET GET')
});


app.post('/save_data', function(req, res) {
    console.log(req.body);
    fs.writeFile('Output.txt', (req.body), (err) => { 
        // In case of a error throw err. 
        if (err) throw err; 

    }) 
    res.send('CHET POST')
});


app.listen(8080, () => {
    console.log('listening on 8080')
});