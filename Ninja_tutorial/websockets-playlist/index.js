var express = require('express');
var socket = require('socket.io');

// App setup
var app = express();
var server = app.listen(4000, function(){
    console.log('listening for requests on port 4000,');
});

// Static files
app.use(express.static('public'));

// Socket setup & pass server
var io = socket(server);
io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    // Handle chat event
    socket.on('chatFromClient', function(data){
        console.log(data);
        io.sockets.emit('chatFromServer', data);
    });

    // Handle typing event
    socket.on('typingFromClient', function(data){
        // Broadcast will send the messages to every other client sockets except the original one itself.
        socket.broadcast.emit('typingFromServer', data);
    });

    // If user stops typing, then clear typing hint message
    socket.on('stopTypeFromClient', function(data){
        // Broadcast will send the messages to every other client sockets except the original one itself.
        socket.broadcast.emit('stopTypeFromServer', data);
    });
});
