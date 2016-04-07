var express = require('express');
var app = express();
var port = 5000;

app.use(express.static('./'));

app.get('/*', function (req, res) {
  console.log('wowowowowowow');
  res.sendFile('index.html', { root: '.'});
});

app.listen(port, function() {
  console.log('Port is on ' + port);
});
