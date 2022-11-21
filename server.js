var express = require('express');
var path = require('path');
var port = process.env.PORT || 5000
var app = express();

app.use(express.static(__dirname + "/node_modules"));
app.use(express.static('assets'));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});
app.get('/resume', function(req, res) {
  res.sendFile('pages/resume.html');
});

app.listen(port);
console.log("Server running at http://localhost:5000")
module.exports = app;
