var fs = require('fs'); 
var csv_parse = require('csv-parse');


var csvData=[];
fs.createReadStream("test.csv")
    .pipe(csv_parse({delimiter: ','}))
    .on('data', function(csvrow) {
        console.log("csvrow: ", csvrow);
        
        //do something with csvrow
        csvData.push(csvrow);        
    })
    .on('end',function() {
      //do something wiht csvData
      console.log("done: ", csvData);
    });

console.log("Main End");