var express = require('./config/express');
var app = express();
var db = require('./config/mongodb')();

module.exports = app;
