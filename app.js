var express = require('express');
var app = express();
var server = require('http').createServer(app);

// app.get('/', function(request, response){
//   response.send("Rock Paper Scissors")
// });

app.use(express.static(process.cwd() + '/public'));
app.use(express.static(__dirname + '/views'));

// app.get('/', function(request, response){
//   response.sendfile('views/index.html')
// });

app.get('/', function(req, res){
  res.sendFile('index.html');
});

server.listen(3000, function(){
  console.log("Server listening on port 3000");
});

module.exports = server;
