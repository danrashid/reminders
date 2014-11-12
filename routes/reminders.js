var express = require('express');
var router = express.Router();
var model = require('../models/reminders');

router
  .get('/', function(req, res) {
    res.render('reminders', { title: 'Reminders!' });
  })
  .post('/', function(req, res) {
    model.create(req, function () {
      // Always redirect after POSTing! (unless it's AJAXy)
      res.redirect('/reminders');
    });
  });

module.exports = router;
