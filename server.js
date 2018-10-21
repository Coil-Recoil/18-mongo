// Calling dependencies

var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var exphbs = require("express-handlebars");

var db = require("./models");

//Connection info

var PORT = process.env.PORT || 3000;

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoscraper";

var app = express();

app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
});

require("./routes/index.js")(app)

//Setting up Handlebars

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Starting app

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});