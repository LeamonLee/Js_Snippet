
var a = 0; 
let setIntervalID = setInterval(()=>{

    if(a == 3){
        clearInterval(setIntervalID);
        return;
        
    }
    a++;
    console.log("a: ", a);

},1000);