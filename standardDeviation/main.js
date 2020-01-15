
let arrDataset = [1,
    1,
    2,
    1,
    5,
    5,
    6,
    7,
    13,
    32,
    27,
    43,
    67,
    92,
    116,
    116,
    183,
    214,
    308,
    349,
    428,
    543,
    682,
    827,
    929,
    1080,
    1239,
    1621,
    1708,
    1994,
    2136,
    2460,
    2664,
    2894,
    3128,
    3356,
    3481,
    3565,
    3788,
    4042,
    3933,
    3922,
    4008,
    3910,
    3857,
    3580,
    3582,
    3384,
    3127,
    2833,
    2574,
    2412,
    2155,
    1944,
    1761,
    1485,
    1333,
    1132,
    944,
    791,
    686,
    499,
    429,
    328,
    246,
    234,
    181,
    134,
    117,
    84,
    67,
    58,
    29,
    25,
    20,
    11,
    9,
    7,
    7,
    3,
    1,
    3,
    1,
    1
]

console.log(standardDeviation(arrDataset));

function standardDeviation(values){
    let avg = average(values);

    let squareDiffs = values.map(function(value){
        let diff = value - avg;
        let sqrDiff = diff * diff;
        return sqrDiff;
    });

    let avgSquareDiff = average(squareDiffs);
    let stdDev = Math.sqrt(avgSquareDiff);
    return stdDev;
}

function average(data){
    let sum = data.reduce(function(sum, value){
        return sum + value;
    }, 0);

    let avg = sum / data.length;
    return avg;
}