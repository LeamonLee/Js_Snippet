const fs = require("fs");

function myReadFile(filepath){
    return new Promise((resolve, reject)=>{
    
    fs.readFile(filepath, {encoding: 'utf-8'}, function(err, data){
    if (!err) {
        if(data === "QccT5V6*F)46<pBu2=e7=Q@Q{~>wegMA"){
        console.log('SerialID: ' + data);
        resolve(true);
        }else{
            reject(false);
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
    console.log("result ", result);
    console.log("myReadFile finished")
    return result;
}

let isValid = isSerialIDValid();

isValid.then((res) => {
    console.log("res: ", res);
}).catch((err) => console.log("Error: ", err));

console.log("Main flow");