// DEPENDENCIES
// require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");


// EXPRESS CONFIGURATION
var app = express();

// Sets an initial port
var PORT = process.env.PORT || 8080;

var db = require("./models");

// Middleware 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }) );
app.set("view engine", "handlebars");


// ROUTER
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

// LISTENER with sequelize.sync
db.sequelize.sync({ force: true }).then(function(){
  app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });
});

module.exports = app; 