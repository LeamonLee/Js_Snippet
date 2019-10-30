var express = require('express');

var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static(path.join(__dirname, '/dist/project')));
// app.use(express.static('./dist'));

/* GET home page. */
app.get('/*', function (req, res, next) {
    //Path to your main file
    console.log(path.join(__dirname + '/dist/project/index.html'))
    res.status(200).sendFile(path.join(__dirname + '/dist/project/'));
});


const port = 3001
app.listen(port, () => console.log(`Example app listening on port ${port}!`))