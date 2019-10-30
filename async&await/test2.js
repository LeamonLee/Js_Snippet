
function a(){
    
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log("setTimeout1 done");
            resolve(1);
            console.log("resolve(1)");
        }, 1000)
    });
}

function b(){
    
    return new Promise((resolve, reject)=>{
        setTimeout(function(){
            console.log("setTimeout2 done");
            resolve(2);
            setTimeout(() => console.log("resolve(2)"), 1000);
        }, 1500)
    }).then(result =>{
        return new Promise((resolve, reject)=>{
            resolve(result * 2);
        });
    });
}

async function c(){

    let result = await a();
    console.log("result1: ",result)
    result = await b();
    console.log("result2: ",result)
}

c()
console.log("Main")