


var throng = require('throng');
var WORKERS = 7;
throng({
  start: start,
  workers: WORKERS,
  lifetime: Infinity
});

function start(id) {
    var http = require('http');
    console.log('started worker');
    http.createServer(function (req, res) {

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('post received');

    }).listen(process.env.PORT || 3000);
}




function createHtml(url) {
    $.get(url, function(data) {
        return data;
    });
} 
