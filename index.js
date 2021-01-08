// Code borrowed from the-complete-javascript developer
// Udemy video course to get a working node server 
var express = require('express');
var app = express();
var path = require('path');
app.set('port', 8083);

app.use( function(req, res, next) {
  console.log(req.method, req.url);
  next();
});
app.use (express.static(path.join(__dirname + '/public/')));;

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log("Listening on port " + port);
});

