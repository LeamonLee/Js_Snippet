var fast_csv = require("fast-csv");


// Read 
fast_csv.parseFile("test.csv")                                       // 'fromPath' is deprecated
.on("data", function(result) {
    console.log("result: ", result);
    // result:  [ 'name', ' type', ' offset' ]
    // result:  [ 'PY_Job_ID', 'String[20]', '0']
    // result:  [ 'PY_Status', 'Int', '22' ]
    // result:  [ 'PY_TimeLeft', 'Real', '24' ]
    // result:  [ 'PY_finLength', 'Real', '28' ]

})
.on("end", function() {
    console.log("讀取成功!");
});

// Read 还可以加headers，这样每一行就会变成一个对象，而不是一个数组：
fast_csv.parseFile("test.csv", {headers : true})                    // 'fromPath' is deprecated
    .on("data", function(data){
        console.log("data: ", data);
        // { name: 'hou', age: '18' }
        // { name: 'wang', age: '13' }
    })
    .on("end", function(){
        console.log("done");
    });



// Write array of array into csvfile
var data1 = [
    ["id", "name"],
    [1, "Leamon"],
    [2, "Ted"],
    [3, "Oliver"],
    [4, "Jackey"]
]


// Wrtie array of objects into csvfile
var data2 = [
    {
        id: 1,
        name: 'Leo Yeh'
    },
    {
        id: 2,
        name: 'Tin Yin'
    },
    {
        id: 3,
        name: 'Mandy'
    }
];
    fast_csv.writeToPath("output.csv", data2, {
        headers: true,
        transform: function(row) {
            return {
                id: row.id,
                name: row.name
            };
        }
    })
    .on("finish", function() {
        console.log("寫入成功!");
    });