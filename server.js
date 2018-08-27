var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

//var userArray = require('./app/data/friends.js');
 
var app = express();
var PORT = process.env.PORT || 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
 
// parse application/json
app.use(bodyParser.json());
require("./controllers/burger_controller")(app);
app.use(express.static('public'));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.listen(process.env.PORT || 3000);
console.log("listening to PORT"+ PORT);