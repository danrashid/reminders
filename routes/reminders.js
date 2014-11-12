var express = require('express');
var router = express.Router();
var model = require('../models/reminders');

function update(req, res) {
  model.update(req, function () {
    res.redirect('/reminders');
  });
}

function remove(req, res) {
  model.remove(req, function () {
    res.redirect('/reminders');
  });
}

router
  .get('/', function(req, res) {
    model.getAll(function (docs) {
      res.render('reminders', {
        title: 'Reminders!',
        reminders: docs
      });
    });
  })
  .post('/', function(req, res) {
    model.create(req, function () {
      // Always redirect after POSTing! (unless it's AJAXy)
      res.redirect('/reminders');
    });
  })
  .get('/:id', function(req, res) {
    model.get(req, function (doc) {
      res.render('reminder', {
        title: 'Editing ' + doc.name,
        reminder: doc
      });
    });
  })
  .post('/:id', function(req, res) {
    // Oops! delete is a reserved word in JavaScript. Let's call it remove instead.
    (req.body.method === 'delete' ? remove : update)(req, res);
  });

module.exports = router;
