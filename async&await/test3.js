async function main(){
    let result = await A();
    console.log("main result: ", result);
}

function getUser(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            console.log("getUser done");
            resolve({"name": "Leamon", "age":28});
        }, 3000);
    })
}

async function A(){
    let user = await getUser();
    console.log("A function done. User: ", user);
    return user;
}

main();

console.log("Main thread keeps going...");