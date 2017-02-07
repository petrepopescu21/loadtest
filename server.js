
var azure = require('azure-storage');


var http = require('http');
 
http.createServer(function (req, res) {
    if(req.method == 'POST') {
         queueSvc.createMessage('nodequeue', "Hello world!", function(error, result, response){
            console.log('Confirmed');
        });
    res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('post received');
    console.log('----------------');
    }


else {res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, world! [helloworld sample]');}
    
}).listen(process.env.PORT || 3000);

var connectionString='DefaultEndpointsProtocol=https;AccountName=dinistorage;AccountKey=5xs76p+fMf2RaeYKGKtHki5lNxMGcwgEqZ4a8T9CSStAt9fe+krH6oqKNZTqjsbVTQgsG9iUgLl3syTBjxU8PQ==;';
var queueSvc = azure.createQueueService(connectionString);


