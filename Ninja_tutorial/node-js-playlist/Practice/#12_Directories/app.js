var fs = require("fs");

// If the file is not existed, it will cause an error.
fs.unlink("sample.txt", function(){
   console.log("The file is deleted!")
});

// Synchrounous version
// fs.mkdirSync("sampleDirectory")

// Asynchrounous version
// fs.mkdir("sampleDirectory", function(){
//     console.log("Directory is created.");
// });

// Synchrounous version
// fs.rmdirSync("sampleDirectory")

// Asynchrounous version
// fs.rmdir("sampleDirectory", function(){
//     console.log("Directory is deleted.");
// });