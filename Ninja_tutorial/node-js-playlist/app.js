var express = require('express');
var todoController = require("./controllers/todoController");

var app = express();

// set up template engine
app.set("view engine", "ejs");

// set up static routes with static files
// app.use("/assets", express.static("./public"))
app.use(express.static("./public"));         // if you don't specify any route, it would map every route to this folder.

// fire controllers
todoController(app);

// listen to port
app.listen(3000);
console.log("You are listening to port 3000...");