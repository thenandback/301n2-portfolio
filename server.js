var express = require('express');
var app = express();
var port = 4730;

app.use(express.static('./'));

app.get('./', function (req, res) {
  res.sendFile('index.html', { root: '.'});
});

app.listen(4730, function() {
  console.log('Port is on ' + port);
});
