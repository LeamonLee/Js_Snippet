const net = require('net');

// Keep track of the chat clients
var clientSockets = [];

var server = net.createServer(function (socket) {

    // Identify this client
    socket.name = socket.remoteAddress + ":" + socket.remotePort
    // Put this new client in the list
    clientSockets.push(socket);

    console.log("clientSockets: ", clientSockets);
    console.log("socket.name: ", socket.name);

    // When socket gets errors
	socket.on('error', function(error) {
        console.log('Socket got problems: ', error.message);
        
	});

    // connection event  <--- This event won't be triggered. (X)
    // socket.on('connection', function () {
    //     console.log('socket端：收到 client 端連線請求，並通知 client 端可以開始傳送資料');
    // });

    // data event： 到收到資料傳輸時觸發事件 ， argument 為對象傳輸的物件
    socket.on('data', function (data) {

        // write event: 傳輸資料的事件
        socket.write('hi from server', function () {
            console.log('server:收到 client端 資料為: ' + data);
            
        });
    });

    socket.on("close", function(){
        socket.end();
        socket.destroy();
        clientSockets.splice(clientSockets.indexOf(socket), 1);
        console.log("socket closed");
        console.log("clientSockets: ", clientSockets);
    });
});

//用 net method listen() 方法讓 本機的 8124 port  給此 TCP server 使用
server.listen(8124, function () {
    console.log('TCP Server starts ar port 8124...');
});


// connection event
server.on('connection', function () {
    console.log('server端：收到 client 端連線請求! 並通知 client 端可以開始傳送資料');
    
});

// Listening for any problems with the server
server.on('error', function(error) {
	console.log("Server got problems: ", error.message);
});