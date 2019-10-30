function mqtt_getOverviewInfo(strMachineName, strTopicName, nDelay){
	function gen_promise(){
		return new Promise((resolve, reject)=>{
			setTimeout(function() {
				reject('MQTT Timeout! Please check if both python recipe server and mosquitto broker are up.');
			}, nDelay);
			
			mqtt_client.publish("job/dispatch/action", 
				JSON.stringify({
					"mac" : strMachineName,
					"func" : "list",
					"cb_topic"  : strTopicName
				})
			);
			
			mqtt_event.once(strTopicName, (strPayload)=>{
				resolve(JSON.parse(strPayload));
			});
			
		});
	}
	return gen_promise;
}

async function execPromisesSeq(lstPromises){
	let results = [];
	
	for(let i = 0; i < lstPromises.length; i++){
		const val = await lstPromises[i]();
		results.push(val);
	}
	return results;
}

function getOverviewInfo(req, res){
	let lstPromises = [];
	global.lstJobMachineName.forEach((strMachineName)=>{
		if(strMachineName === "EX_Lab"){
		let strTopicName = strMachineName + '_' + jobOverview_topic;
		let p = mqtt_getOverviewInfo(strMachineName, strTopicName, 5000);
		lstPromises.push(p);
		}
	});
	
	// Execute parallely
	// Promise.all(lstPromises.map(func => func()))
	// .then((result)=>{
	// 	console.log("result: ", result);
	// 	return res.status(200).send({"result": result});
	// })
	// .catch((err)=>{
	// 	return res.status(500).send({"error": err});
	// });

	//Execute sequentially method-1
	// lstPromises = lstPromises.map(func => func());		// If you want to execute promise SEQUENTIALLY, do not write this line.
	execPromisesSeq(lstPromises)
	.then(results => {
		let lstResults = results[0]["result"].map((item)=>{
			
			
			item["Machine"] = results[0]["request"]["mac"];
			console.log(item);
			return item;
			
		});
		return res.status(200).send({"result": lstResults});
	})
	.catch(err =>{
		console.log("error: ", err);
		return res.status(500).send({"error": err});
	});

	// Execute sequentially method-2
	// lstPromises = lstPromises.map(func => func());		// If you want to execute promise SEQUENTIALLY, do not write this line.
	// let mqtt_results = lstPromises.reduce((promiseChain, currentTask) => {
	// 						return 	promiseChain.then(chainResults => {
	// 										return currentTask().then(currentResult => 
	// 											[...chainResults, currentResult]
	// 									);	
	// 								});
	// 					}, Promise.resolve([])
	// 					)
	// 					.then(lstResults => {
	// 						// Do something with all results
	// 						console.log("result: ", lstResults);
	// 						return res.status(200).send({"result": lstResults});
	// 					})
	// 					.catch(err => {
	// 						console.log("error: ", err);
	// 						return res.status(500).send({"error": err});
	// 					});
	
}
