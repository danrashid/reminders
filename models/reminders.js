/*
Sources:
  • https://www.npmjs.org/package/mongodb
  • http://mongodb.github.io/node-mongodb-native/1.4/markdown-docs/queries.html
*/

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/myproject';

exports.create = function (req, callback) {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log('Connected correctly to server');

    db.collection('reminders').insert({
      name: req.body.name,
      date: req.body.date
    }, function(err, result) {
      assert.equal(err, null);
      console.log('Inserted ' + JSON.stringify(req.body));
      db.close();
      console.log('Connection closed');
      callback(result);
    });
  });
};

exports.getAll = function (callback) {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log('Connected correctly to server');

    db.collection('reminders').find().toArray(function(err, docs) {
      assert.equal(err, null);
      console.log('Found ' + docs.length + ' docs');
      db.close();
      console.log('Connection closed');
      callback(docs);
    });
  });
};
