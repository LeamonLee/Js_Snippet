function timeoutPromise(delay){
	return new Promise(function(resolve, reject) {
	  	setTimeout(function() {
			reject('Timeout!');
		  }, delay);
		
	});
}

function mqtt_getOverviewInfo(nDelay){
	return new Promise((resolve, reject)=>{
		setTimeout(function() {
			reject('MQTT Timeout! Please check if python recipe server or mosquitto broker is up.');
		}, nDelay);
		
		mqtt_client.on("message", (strTopic, strPayload) => {
			
			if(strTopic === jobOverview_topic){
				resolve(JSON.parse(strPayload));	
			}
		});
		
	});
}

function test_mqtt_getOverviewInfo(strMachineName, nDelay){
	mqtt_client.publish("job/dispatch/action", 
        JSON.stringify({
            "mac" : "EX_Lab",
            "func" : "list",
            "cb_topic"  : jobOverview_topic
        })
	);

	Promise.race([mqtt_getOverviewInfo(), timeoutPromise(5000)])
	.then((result)=>{
		console.log("result: ", result);
		return res.status(200).send({"result": result});
	})
	.catch((err)=>{
		return res.status(500).send({"error": err});
	});

	mqtt_getOverviewInfo(5000)
	.then((result)=>{
		console.log("result: ", result);
		return res.status(200).send({"result": result});
	})
	.catch((err)=>{
		return res.status(500).send({"error": err});
	});
}