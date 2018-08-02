require('dotenv').config();
var express = require('express');
var app = express();

const PORT = process.env.PORT || 8080;
const HOST = process.env.HOST || '0.0.0.0';

app.use(express.static('public'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

var listener = app.listen(PORT, HOST,function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

