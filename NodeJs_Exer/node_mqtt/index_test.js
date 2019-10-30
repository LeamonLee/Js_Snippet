var mqtt = require("mqtt");
var dctConfig = {
    port:1883
    // clientId:"nodejs"
};


var client = mqtt.connect("mqtt://10.101.100.97", dctConfig);
var lstSubTopics = ["/topic/2"];

client.on("connect", () => {

    console.log("Connected to Mqtt broker...");
    lstSubTopics.forEach((strTopic) => {
        client.subscribe(strTopic);
        console.log(`Subscribed topic ${strTopic}`);
    });
    
    // client.subscribe("/topic/2");
    // console.log(`Subscribed topic ${"/topic/2"}`);
    
});

client.on("message", (strTopic, strPayload) => {
    console.log(`Received topic ${strTopic}. Payload: ${strPayload}`);
});

function qryStatus(){
    client.publish("topicFromPLC/nodejsssss", 
        JSON.stringify({
            "mac" : "EX_Lab",
            "func" : "list",
            "cb_topic"  : "leamon"
        })
    );

    console.log("published topic...");
}

setInterval(qryStatus, 2000);