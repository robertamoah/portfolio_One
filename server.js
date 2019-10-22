var express = require ("express");
var app = express();
var exphbs  = require('express-handlebars');
var PORT = 3000;



app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 





app.get('/', function (req, res) {
    res.render('home');
});




app.listen(PORT, () =>{
    console.log("hello you are on Port "+ PORT)
}) 