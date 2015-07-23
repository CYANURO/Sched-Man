'use strict';
var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

// var db = mongoose.connect('mongodb://localhost/sketchApiDb');

var app = express();
var port = process.env.PORT || 3333;

// Weird but necessary for the client $http to get server response from localhost.
var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
};

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var sketchRouter = require('./Routes/SketchRoutes');
app.use(allowCrossDomain);
app.use('/', sketchRouter);

var server = app.listen(port, function() {
});