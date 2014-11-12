var express = require('express');
var router = express.Router();
var model = require('../models/reminders');

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
    model.update(req, function (doc) {
      res.redirect('/reminders');
    });
  });

module.exports = router;
