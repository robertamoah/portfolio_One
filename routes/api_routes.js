var express = require ("express");
var app = express();
var exports = module.exports = {};



module.exports = function robert(){

app.get('/', function (req, res) {
    res.render('home');
    // res.send("its go here")
    res.end()
     })


}

