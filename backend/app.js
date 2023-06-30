const express = require('express');
 app = express();

const port = 5000;

app.get('/', function(req, res) {
  res.send('hello world'); 
});

console.log("bonjour 🏖️") 
app.listen (port, () => {
	console.log(`☀️ Server is actualy running on port ${port}`)})