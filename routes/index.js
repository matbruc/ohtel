var express = require('express');
var router = express.Router();
var http = require('http');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'oHtel' });
});

router.get('/checkin', (req, res, next) => res.render('checkin'));

router.post('/checkCode', (req, res, next) => {
  var code = req.body.reserveId;
  var options = {
    hostname: 'localhost',
    port: 3007,
    path: '/reservations',
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'code': code
    }
  };

  var reqr = http.request(options, (resp) => {
    var resCode, resFirstName, resLastName, resDateFrom, resDateTo;
    resp.setEncoding('utf8');
    resp.on('data', (data) => {
      var d = JSON.parse(data);
      resCode = d[0].code;
      resFirstName = d[0].firstName;
      resLastName = d[0].lastName;
      resDateFrom = d[0].fromDate;
      resDateTo = d[0].toDate;
    });
    resp.on('end', () => {
      console.log('No more data in response.');
      res.render('result',  {
        'code': resCode,
        'firstName': resFirstName,
        'lastName': resLastName,
        'dateFrom': resDateFrom,
        'dateTo': resDateTo
      });
    });
  });

  reqr.on('error', (e) => {
    console.log(`problem with request: ${e.message}`);
  });

  reqr.end();
});

module.exports = router;
