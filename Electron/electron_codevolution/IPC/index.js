// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const electron = require("electron");
const ipc = electron.ipcRenderer;

const errorBtn = document.getElementById("errorBtn");
const asyncBtn = document.getElementById("asyncBtn");
const syncBtn = document.getElementById("syncBtn");

errorBtn.addEventListener("click", function(){
    ipc.send("open-error-dialog");
});

ipc.on("opened-error-dialog", (event, arg)=>{
    console.log(arg);
});

// asynchrounous method
asyncBtn.addEventListener("click", function(){
    console.log("async msg 1");
    ipc.send("async-message");
    console.log("async msg 2");
});

ipc.on("async-reply", (event, arg)=>{
    console.log(arg);
});

// synchrounous method
syncBtn.addEventListener("click", function(){
    console.log("sync msg 1");
    const reply = ipc.sendSync("sync-message");
    console.log(reply);
    console.log("sync msg 2");
});

// use remote module to use native api
const BrowserWindow = electron.remote.BrowserWindow;
let win = new BrowserWindow();
win.loadURL("https://github.com");