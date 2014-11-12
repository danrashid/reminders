var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  // Login form should really, absolutely be here
  res.redirect('/reminders');
});

module.exports = router;
