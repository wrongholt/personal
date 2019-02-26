<<<<<<< HEAD
console.log('starting function');
const AWS = require('aws-sdk');
const docClient =  new AWS.DynamoDB.DocumentClient({region: 'central'});
exports.handle = function(e, ctx, callback){
    var params = {
        Item:{
            date: Date.now(),
            message: "I love your website!"
        },
        TableName: 'guestbook'
    };
    docClient.put(params, function(err, data){
        if(err){
            callback(err, null);
        }else{
            callback(null, data);
        }
    })
=======
console.log('starting function');
const AWS = require('aws-sdk');
const docClient =  new AWS.DynamoDB.DocumentClient({region: 'central'});
exports.handle = function(e, ctx, callback){
    var params = {
        Item:{
            date: Date.now(),
            message: "I love your website!"
        },
        TableName: 'guestbook'
    };
    docClient.put(params, function(err, data){
        if(err){
            callback(err, null);
        }else{
            callback(null, data);
        }
    })
>>>>>>> 088c3b65cd37de50c9240f38b50db2c5ee92c780
}