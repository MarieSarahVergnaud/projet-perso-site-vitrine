var express = require('express');
var app = express();

 const port = parseInt(process.env.APP_PORT ?? "5000", 10);

app.get('/', function(req, res) {
  res.send('hello world'); 
});

console.log("bonjour 🏖️") 
app.listen (port, () => {
	console.log(`☀️ Server is actualy running on port ${port}`)})