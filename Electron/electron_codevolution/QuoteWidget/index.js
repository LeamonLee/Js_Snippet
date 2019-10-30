// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

let request = require("request");

request("https://api.quotable.io/random", (err, res, body) =>{

    let bodyJson = JSON.parse(body);
    console.log(bodyJson);
    let randomQuote = bodyJson["content"];
    console.log(randomQuote);

    document.getElementById("quote").innerHTML = randomQuote;
});

setInterval(()=>{

    request("https://api.quotable.io/random", (err, res, body) =>{

    let bodyJson = JSON.parse(body);
    let randomQuote = bodyJson["content"];
    document.getElementById("quote").innerHTML = randomQuote;
    console.log(randomQuote);
    });

}, 5000);