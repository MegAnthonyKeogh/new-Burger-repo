var path = require("path");

var burger = require("../models/burger");

module.exports = function (app) {

  
    app.get("/", function (req, res) {
     burger.all(function (result){
      res.render("index", {data:result})
     })
     
    });

    app.put("/devour/:burgerId", function (req, res) {
      var burgerId = req.params.burgerId;
      burger.update(burgerId, function(result){
        res.end();
      })
    });

    app.post("/new", function (req, res) {
     var newBurger = req.body;
     burger.create(newBurger.name, function (result) {
      res.redirect("/")
     });
      

  });




  }
