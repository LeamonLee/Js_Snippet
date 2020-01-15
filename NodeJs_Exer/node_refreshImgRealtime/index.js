const path = require("path");
const fs = require("fs");
const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

setInterval(() => {
    
    let strImageName = Math.floor(Math.random() * 13) + 1;  // returns a random integer from 1 to 13
    strImageName = strImageName.toString();
    strImageName = strImageName + '.png';
    let strImgPath = "./imgs/" + strImageName;

    fs.readFile(strImgPath, function(err, data) {
        if (err) throw err;
    
        // Encode to base64
        var encodedImage = new Buffer.from(data, 'binary').toString('base64');

        // Decode from base64
        //var decodedImage = new Buffer(encodedImage, 'base64').toString('binary');

        io.emit("image", encodedImage);
    });
    
},1);

console.log("Server is running on port 3000");
server.listen(3000);
