var fs = require('fs');

// Asynchrounous version. Needs a callback function.
var file = fs.readFile('input.txt','utf8',function(err,data){
    fs.writeFile('writeme.txt',data);
    console.log(data);
});

console.log('This is an instruction outside the sync file system.');