const express = require("express");
const cmd = require("node-cmd");

const app = express();

app.get("/", function(request, response){
	response.send("Hello world!");
});

app.post("/updated", function(request, response){
	try{
		cmd.runSync("cd tests && git clone https://github.com/JoyStickUi/WebhookLearning && cd WebhookLearning && git pull && cd ..");
		cmd.runSync("python3 tests.py");
		response.send("OK");
	}catch(e){
		response.send("ERROR");
	}
});

app.listen(3000);
