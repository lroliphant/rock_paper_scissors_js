var express = require('express');
var app = express();
var server = require('http').createServer(app);
var sass = require('node-sass');

app.use(express.static(process.cwd() + '/public'));
app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
  res.sendFile('index.html');
});

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;
