
var objErrorCode = {
    "Err0_0":["WireBroken", "Spark", "Material shortage"]
}

function word2Array(data){

    // Create an array with length 16 and all filled in 0.
    // let result = [].fill.call({ length: 16 }, 0);
    // let result = []; result.length = 16;  result.fill(0);
    // let result = Array.from(Array(16), () => 0);
    // let result = Array(16).fill(0);
    let result = []; for (var i = 0; i < 16; i++) result[i] = 0;

    console.log("result: ", result);
    let bitPosistion = 1;
    for(let i = 0; i < result.length; i++){
        if((data & bitPosistion) > 0){
            console.log("data & bitPosistion: ", data & bitPosistion);
            result[i] = 1;
        }
            
        bitPosistion = bitPosistion << 1;
        console.log("bitPosistion: ", bitPosistion);
    }
    
    return result;
}

function array2Word(arrEvent){

    let nResult = 0;
    let bitValue = 1;
    for(let i = 0; i < arrEvent.length; i++){

        if(arrEvent[i]){
            nResult = nResult + bitValue;
        }
        bitValue = bitValue << 1;
        // bitValue = bitValue * 2;
    }
    return nResult;
}

// let arrEvent = [1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0];
// let wordResult = array2Word(arrEvent);
// console.log("wordResult: ", wordResult);

let errorMainCode = "Err0_0"
let errorSubCodeFromMongo = 
let arrResult = word2Array(errorCodeFromMongo);
console.log("arrResult: ", arrResult);

for(let i=0; i<arrResult.length;i++){
    if(arrResult[i] == true){
        return objErrorCode[errorMainCode][i]
    }
}