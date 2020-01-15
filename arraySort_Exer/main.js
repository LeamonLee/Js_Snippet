
let arrTest = [{age:18, Name:"Alice"}, {age:10, Name:"Emma"}, {age:15, Name:"Tina"}, {age:20, Name:"Leamon"}, {age:17, Name:"Tina"}]

console.log("arrTest: ", arrTest);

arrTest.sort((a, b) => {
    return a["age"] - b["age"];
});

console.log("arrTest: ", arrTest);

