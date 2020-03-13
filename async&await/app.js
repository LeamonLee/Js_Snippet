const fs = require("fs");

function delayedAdd(n1, n2, delayTime){
    
    return new Promise((resolve, reject)=>{
        console.log("Execute delayedAdd...");
        setTimeout(() => resolve(n1 + n2), delayTime);
        setTimeout(() => reject("Timeout"), 5000);
    });
}

function delayedSub(n1, n2, delayTime){
    
    setTimeout(() => {return n1 - n2;}, delayTime);
    
}

function test1(){
    let p1 = delayedAdd(3,4,2000);
    let p2 = delayedAdd(1,2,3000);
    Promise.all([p1,p2]).then((results)=>{
        let answer = results.reduce((total, value)=>{
            return total * value;
        });
        console.log(answer);
    });
}

function test2(){
    
    let result = delayedAdd(1,2,1000);
    result.then((answer)=>console.log("delayedAdd finished... ", answer));
    console.log("Test2 executed...");
}

// Await Sequentially
async function test3(){
    console.log("test3 starts...");
    // delayedAdd雖然是回傳Promise，但在async await語法下，result1會變成實際resolve的值，可以直接使用。
    // 但將result1再回傳出去後，result1本身又會變成Promise物件了，外面呼叫test3()的地方需使用.then()取得資料
    let result1 = await delayedAdd(3,4,2000);       
    console.log("test3 finished...");
    // let result2 = await delayedAdd(1,2,1000);
    let answer = result1;
    console.log("test3:", answer);
    return answer;          // 將結果return出去，可以在then裡面接收到
}

// Await Parallelly
async function test4(){
    let results = await Promise.all([delayedAdd(3,4,2000), delayedAdd(1,2,2000)]);
    
    let answer = results;
    console.log(answer);
    return answer;          // 將結果return出去，可以在then裡面接收到
}

function myclosure(nDelay){
    function wrap(){
        return new Promise((resolve, reject) => {
            setTimeout(resolve, nDelay, 'one');
        });
    }
    return wrap;
}


function test5(){
    // let lstPromises = [delayedAdd(3,4,2000), delayedAdd(1,2,2000)];
    let p1 = myclosure(2000);
    let p2 = myclosure(3000);
    let lstPromises = [p1, p2];
    console.log("lstPromises: ", lstPromises);
    
    lstPromises.reduce((promiseChain, currentTask) => {
        console.log("promiseChain: ", promiseChain);
        return 	promiseChain.then(chainResults => {
                        return currentTask().then(currentResult => 
                            [...chainResults, currentResult]
                    );	
                });
        
    }, Promise.resolve([])
    )
    .then(lstResults => {
        // Do something with all results
        console.log("lstResults: ", lstResults);
        
    })
    .catch(err => {
        console.log("error: ", err);
        
    });
}

function test6(){
    // let lstPromises = [delayedAdd(3,4,2000), delayedAdd(1,2,2000)];
    let p1 = () => {
        console.log("Execute one...");
        setTimeout(()=> console.log("One executed"), 2000);
    };
    let p2 = () => {
        console.log("Execute two...");
        setTimeout(()=> console.log("Two executed"), 3000);
    };
    let lstPromises = [p1, p2];
    
    console.log("lstPromises: ", lstPromises);
    lstPromises.reduce((promiseChain, currentTask) => {
        // if(currentTask != null)
        return currentTask();
    },null);
    
}

function test7(){
    Promise.resolve('foo')
    // 1. Receive "foo" concatenate "bar" to it and resolve that to the next then
    .then(function(string) {
        return new Promise(function(resolve, reject) {
        setTimeout(function() {
            string += 'bar';
            resolve(string);
        }, 1);
        });
    })
    // 2. receive "foobar", register a callback function to work on that string
    // and print it to the console, but not before return the unworked on
    // string to the next then
    .then(function(string) {
        setTimeout(function() {
        string += 'baz';
        console.log("Second then: ", string);
        }, 1)
        return string;
    })
    // 3. print helpful messages about how the code in this section will be run
    // before string is actually processed by the mocked asynchronous code in the
    // prior then block.  
    .then(function(string) {
        console.log("Last Then:  oops... didn't bother to instantiate and return " +
                    "a promise in the prior then so the sequence may be a bit " +
                    "surprising");

        // Note that `string` will not have the 'baz' bit of it at this point. This 
        // is because we mocked that to happen asynchronously with a setTimeout function
        console.log("Third Then: ", string);
    });
}


function test8(){
    return new Promise((resolve, reject) =>{
        Promise.resolve('foo')
        // 1. Receive "foo" concatenate "bar" to it and resolve that to the next then
        .then(function(string) {
            return new Promise(function(resolve, reject) {
                setTimeout(function() {
                    string += 'bar';
                    console.log("First then: ", string);
                    resolve(string);
                }, 1);
            });
        })
        .then(function(string) {
            return new Promise((resolve, reject)=>{
                setTimeout(function() {
                    string += 'baz';
                    console.log("Second then: ", string);
                    resolve(string);
                }, 1)
            });
        })
        .then(function(string) {
            // return new Promise((resolve, reject)=>{
            //     console.log("Third Then: ", string);
            //     resolve(string);
            // });

            console.log("Third Then: ", string);
            resolve(string);
        });
    });
    
}

function test9(){
    return new Promise((resolve, reject) =>{
        Promise.resolve('foo')
        .then(function(string) {
            
            setTimeout(function() {
                string += 'bar';
                console.log("First then: ", string);
                return string;
            }, 1);
            
        })
        .then(function(string) {
            
            setTimeout(function() {
                string += 'baz';
                console.log("Second then: ", string);
                return string;
            }, 1);
            
        })
        .then(function(string) {
            
            console.log("Third Then: ", string);
            resolve(string);
        });
    });
    
}

function test10(){
    return new Promise((resolve, reject) =>{
        Promise.resolve('foo')
        .then(function(string) {
            
            string += 'bar';
            console.log("First then: ", string);
            return string;
            
        })
        .then(function(string) {
            
            string += 'baz';
            console.log("Second then: ", string);
            return string;
            
        })
        .then(function(string) {
            
            console.log("Third Then: ", string);
            resolve(string);
        });
    });
    
}


async function testError(){
    let result1 = await delayedSub(3,4,2000);
    // let result2 = await delayedAdd(1,2,1000);
    let answer = result1;
    console.log(answer);
}

function myReadFile(filepath){
    return new Promise((resolve, reject)=>{
    
    fs.readFile(filepath, {encoding: 'utf-8'}, function(err, data){
    if (!err) {
        if(data === "QccT5V6*F)46<pBu2=e7=Q@Q{~>wegMA"){
        console.log('SerialID: ' + data);
        resolve(true);
        }  
        
    } else {
        console.log(err);
        reject(false);
    }
    });
    
});
}

SERIALID_FILE = "serialID.txt"

async function isSerialIDValid (){
    console.log("myReadFile starts...")
    let result = await myReadFile(SERIALID_FILE);
    console.log("myReadFile finished")
    return result;
}

// test2();
// test3()
// .then((result) => console.log("Main flow result: ", result))
// .catch((err) => console.log("Main flow result: ", err));

// test4();
// test5();
// test6();
// test7();

// test8()
// .then((result) => console.log("Main flow result: ", result))
// .catch((err) => console.log("Main flow result: ", err));

// test9()
// .then((result) => console.log("Main flow result: ", result))
// .catch((err) => console.log("Main flow result: ", err));

test10()
.then((result) => console.log("Main flow result: ", result))
.catch((err) => console.log("Main flow result: ", err));
// testError();

// let isValid = isSerialIDValid();

// isValid.then((res) => {
//     console.log("res................", res);
// }).catch((err) => console.log(err));

// console.log("isValid", isValid instanceof Promise);

console.log("Main flow");