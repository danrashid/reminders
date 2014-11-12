/*
Sources:
  • https://www.npmjs.org/package/mongodb
  • http://mongodb.github.io/node-mongodb-native/1.4/markdown-docs/queries.html
  • http://mongodb.github.io/node-mongodb-native/api-generated/collection.html
*/

var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
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

exports.get = function (req, callback) {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log('Connected correctly to server');

    /*
    This is a common gotcha. If looking up by the default _id stored on Mongo objects,
    you can't simply query by the _id string. It has to be cast as an ObjectID object first.
    http://mongodb.github.io/node-mongodb-native/1.4/api-bson-generated/objectid.html
    */
    var id = new ObjectID(req.params.id);

    db.collection('reminders').findOne({_id: id}, function(err, doc) {
      assert.equal(err, null);
      console.log('Found ' + JSON.stringify(doc));
      db.close();
      console.log('Connection closed');
      callback(doc);
    });
  });
};

exports.update = function (req, callback) {
  MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log('Connected correctly to server');

    var id = new ObjectID(req.params.id);

    db.collection('reminders').findAndModify(
      {_id: id},
      [],
      {
        name: req.body.name,
        date: req.body.date
      },
      function(err, doc) {
        assert.equal(err, null);
        console.log('Updated ' + JSON.stringify(doc));
        db.close();
        console.log('Connection closed');
        callback(doc);
      }
    );
  });
};
