


var throng = require('throng');
var WORKERS = process.env.WEB_CONCURRENCY || 4;
throng({
  start: start,
  workers: WORKERS,
  lifetime: Infinity
});

function start(id) {
    var http = require('http');

    console.log('Started worker');
    http.createServer(function (req, res) {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('post received');

    }).listen(process.env.PORT || 3000);
}





