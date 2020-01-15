const cv = require("opencv4nodejs");
const path = require("path");
const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);

const wCap = new cv.VideoCapture('rtsp://pioneerm:pioneerm1188@10.101.100.152:554/videoMain');

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

setInterval(() => {
    const frame = wCap.read();
    
    console.log("typeof frame:", typeof frame);
    console.log("frame['step']:", frame["step"]);
    let step = frame["step"];
    if(step > 0){
        const image = cv.imencode(".jpg", frame).toString("base64");        // typeof image = string
        io.emit("image", image);
    }
    
}, 100);

console.log("Server is running on port 3000");
server.listen(3000);
