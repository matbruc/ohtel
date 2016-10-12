var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'oHtel' });
});

router.get('/checkin', (req, res, next) => res.render('checkin'));

module.exports = router;
