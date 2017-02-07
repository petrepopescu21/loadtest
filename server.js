var Express = require('express');
var azure = require('azure-storage');
var app = Express();


var connectionString='DefaultEndpointsProtocol=https;AccountName=dinistorage;AccountKey=5xs76p+fMf2RaeYKGKtHki5lNxMGcwgEqZ4a8T9CSStAt9fe+krH6oqKNZTqjsbVTQgsG9iUgLl3syTBjxU8PQ==;';
var queueSvc = azure.createQueueService(connectionString);

app.post('/', function(req,res) {
    queueSvc.createMessage('nodequeue', "Hello world!", function(error, result, response){
        
    });
    res.send('ok');
});

app.get('/', function(req,res) {
    res.send('Api working!');
});
app.listen(process.env.PORT || 3000);