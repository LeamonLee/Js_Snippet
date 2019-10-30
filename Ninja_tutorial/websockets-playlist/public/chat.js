// Make connection
var socket = io.connect('http://localhost:4000');

// Query DOM
var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output'),
    feedback = document.getElementById('feedback');

// Emit events
btn.addEventListener('click', function(){
    socket.emit('chatFromClient', {
        message: message.value,
        handle: handle.value
    });
    message.value = "";
});

message.addEventListener('keypress', function(){
    socket.emit('typingFromClient', handle.value);
});

message.addEventListener('blur', function(){
    socket.emit('stopTypeFromClient', handle.value);
});

// setup before functions
var typingTimer;                // timer identifier
var doneTypingInterval = 5000;  // time in ms, 5 second for example

// on keyup, start the countdown
message.addEventListener('keyup', function () {
    clearTimeout(typingTimer);
    typingTimer = setTimeout(doneTyping, doneTypingInterval);
});

// on keydown, clear the countdown 
message.addEventListener('keydown', function () {
    clearTimeout(typingTimer);
});

// user is "finished typing," do something
function doneTyping () {
    // do something
    socket.emit('stopTypeFromClient', handle.value);
}


// Listen for events
socket.on('chatFromServer', function(data){
    feedback.innerHTML = '';
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});

socket.on('typingFromServer', function(data){
    feedback.innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
});

socket.on('stopTypeFromServer', function(data){
    feedback.innerHTML = '';
});