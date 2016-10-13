var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'oHtel' });
});

router.get('/checkin', (req, res, next) => res.render('checkin'));

router.post('/checkCode', (req, res, next) => {
  const code = req.body.reserveId;
  fetch('http://localhost:3007/reservations', {
    method: 'GET',
    headers: { 'code': code }
  })
  .then(response => {
    var responses = response.json();
    console.log(responses);
    res.render('result', {
          code: responses.code,
          name: responses.firstName,
          lastName: responses.lastName,
          dateFrom: responses.dateFrom,
          dateTo: responses.dateTo
    });
  });
});

module.exports = router;
