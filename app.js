const express = require("express");
const cmd = require("node-cmd");

const app = express();

app.set("view engine", "jade");
app.set("views", "views");

app.get("/", function(request, response){
	response.render("index.jade", { "title": "my site" });
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
