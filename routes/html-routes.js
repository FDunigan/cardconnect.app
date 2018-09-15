// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various handlebars templates
// *********************************************************************************

// Dependencies
var path = require("path");

// Routes
module.exports = function(app) {


  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/config", function(req, res) {
    res.render("config");
  });

  app.get("/pay", function(req, res) {
    res.render("pay");
  });

  app.get("/bill", function(req, res) {
    res.render("bill");
  });

  app.get("/report", function(req, res) {
    res.render("report");
  });

};
