var mqtt = require("mqtt");
var dctConfig = {
    port:1883,
    clientId:"nodejs"
};


var client = mqtt.connect("mqtt://10.101.100.95", dctConfig);
var lstSubTopics = ["job/dispatch/broadcast", "leamon"];

client.on("connect", () => {

    console.log("Connected to Mqtt broker...");
    lstSubTopics.forEach((strTopic) => {
        client.subscribe(strTopic);
    });
    
});

client.on("message", (strTopic, strPayload) => {
    console.log(`Received topic ${strTopic}. Payload: ${strPayload}`);
});

// 1=standby, 2=launched, 3=executed, 4=delete, 
// 其他狀態+100 =Request for update   當新Recipe進來時，需給Stauts為"1"
function qryStatus(){
    client.publish("job/dispatch/action", 
        JSON.stringify({
            "mac" : "EX_Lab",
            "func" : "list",
            "cb_topic"  : "leamon"
        })
    );

    console.log("published topic...");
}

setInterval(qryStatus, 5000);