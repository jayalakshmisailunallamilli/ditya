var express = require('express')
var app = express();

app.get('/', function (req,res) {
	res.send('{ "response": "Hello from sailu" }');
});

app.get('/will', function (req,res) {
	res.send('{ "response": "bavish" }');
});
app.get('/ready',function (req,res){
	res.send('{ "response": Great!, it works!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
