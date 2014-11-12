var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('reminders', { title: 'Reminders!' });
});

module.exports = router;
