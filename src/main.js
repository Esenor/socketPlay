var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var creepObject = require(__dirname + '/server/creepObject.js');
var creeps = {};

app.use(express.static(__dirname + '/client/public'));
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/index.html');
});

io.on('connection', function(socket) {
  var creep = new creepObject();

  var testSocket = require(__dirname + '/server/test.socket.js');
  testSocket.register(socket, io, creep, creeps);

  socket.on('disconnect', function () {
    delete creeps[creep.id];
  });
});

http.listen(3000, function() {
  console.log('Server start');
});
