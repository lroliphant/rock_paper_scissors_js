var express = require('express');
var app = express();
var server = require('http').createServer(app);

app.use(express.static(process.cwd() + '/assets'));
app.use(express.static(__dirname + '/'));

app.get('/', function(req, res){
  res.sendFile('index.html');
});

server.listen(process.env.PORT || 3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;
