// npm install --save socket.io
var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
var request = require('request');
var querystring=require('querystring');

var counter =1;






app.get('/', function(req, res){
    res.sendFile(__dirname + '/browser/index.html');
});



io.on('connection', function(socket){
    console.log(`a user num:${counter} connected'`);
    counter++;
    socket.on('chat message',  msg=>{
            io.emit('chat message', msg);

      });
    
  });



http.listen(3000, function(){
  console.log('listening on *:3000');
});