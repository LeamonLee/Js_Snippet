const {parse, Parser} = require('json2csv');
const fs = require('fs');



const fields = ['car', 'price', 'color'];
const myDatas = [{
    "car": "Audi",
    "price": 40000,
    "color": "blue"
}, {
    "car": "BMW",
    "price": 35000,
    "color": "black"
}, {
    "car": "Porsche",
    "price": 60000,
    "color": "green"
}];

const options = {fields};

// Method1
// const csvParser = parse(myDatas, options);

// Method2
const json2csvParser = new Parser({fields});
const csvParser = json2csvParser.parse(myDatas);
console.log("csvParser: ", csvParser)

fs.writeFile('json2csvFile.csv', csvParser, (err) => {
    if (err) throw err;
    console.log('file saved');
});