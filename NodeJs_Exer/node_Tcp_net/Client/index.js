const net = require('net');

var client = net.connect({port: 8124}, function () {
    console.log('client端：向 server端 請求連線...');
});


// connect event : 與 server端 連線成功時的事件
client.on('connect', function (data) {
    console.log('client端：與 server端 連線成功! 可以開始傳輸資料');

    // write event: 傳輸資料的事件
    client.write('hello from client', function () {
        console.log('client端：開始傳輸資料，資料為: hello!')
    });

});


// data event： 到收到資料傳輸時觸發事件 ， argument 為對象傳輸的物件
client.on('data', function (data) {
    console.log(typeof data);       // <--- typeof是object
    console.log('client端：收到 server端 原始資料為: ' + data);
    console.log('client端：收到 server端 資料為: ' + data.toString())
    
    //結束 client 端 連線
    // client.end();
});

// data event： 到收到資料傳輸時觸發事件 ， argument 為對象傳輸的物件
client.on('close', function (data) {
    
    console.log("socket ended. Data: ", data.toString());
    //結束 client 端 連線
    client.end();
});

// Listening for any problems with the server
client.on('error', function(error) {
	console.log("client got problems: ", error.message);
});