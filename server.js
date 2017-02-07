
var azure = require('azure-storage');
var http = require('http');

var connectionString='DefaultEndpointsProtocol=https;AccountName=dinistorage;AccountKey=5xs76p+fMf2RaeYKGKtHki5lNxMGcwgEqZ4a8T9CSStAt9fe+krH6oqKNZTqjsbVTQgsG9iUgLl3syTBjxU8PQ==;';
var queueSvc = azure.createQueueService(connectionString);

http.createServer(function (req, res) {
    
    res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('post received');

}).listen(process.env.PORT || 3000);




