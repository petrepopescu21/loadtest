var Express = require('express');
var azure = require('azure-storage');
var app = Express();


var connectionString='DefaultEndpointsProtocol=https;AccountName=dinistorage;AccountKey=5xs76p+fMf2RaeYKGKtHki5lNxMGcwgEqZ4a8T9CSStAt9fe+krH6oqKNZTqjsbVTQgsG9iUgLl3syTBjxU8PQ==;';
var queueSvc = azure.createQueueService(connectionString);
queueSvc.createQueueIfNotExists('nodequeue', function(error, result, response){
  if(!error){
    // Queue created or exists
  }
});

app.post('/', function(req,res) {
    queueSvc.createMessage('nodequeue', "Hello world!", function(error, result, response){
        if(!error){
            res.send(response.isSuccessful);
        }
        else {
            res.send('Sumtin wong');
        }
    });
});

app.listen(3000);