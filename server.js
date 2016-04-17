var express = require('express');
var app = express();
var port = 5000;

var proxyGitHub = function (request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: 'https://api.github.com/' + request.params[0],
    headers: { Authorization: 'token ' + githubToken },
  }))(request, response);
};

app.get('/github/*', proxyGitHub);

app.use(express.static('./'));

app.get('/*', function (req, res) {
  console.log('wowowowowowow');
  res.sendFile('index.html', { root: '.'});
});

app.listen(port, function() {
  console.log('Port is on ' + port);
});
