var express = require('express');
var path = require('path');
var port = process.env.PORT || 5000
var app = express();

app.use(express.static(__dirname + "/node_modules"));
app.use(express.static('assets'));

app.get('/', function(req, res) {
  res.sendfile('index.html');
});
app.get('/resume', function(req, res) {
  res.sendfile('pages/resume.html');
});

app.listen(port);

module.exports = app;
