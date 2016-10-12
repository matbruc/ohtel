var querystring = require('querystring');
var http = require('http');

module.exports = {
  performRequest: (endpoint, method, data, success) => {
    var dataString = JSON.stringify(data);
    var headers = {};

    if (method == 'GET') {
      endpoint += '?' + querystring.stringify(data);
    }
    else {
      headers = {
        'Content-Type': 'application/json',
        'Content-Length': dataString.length
      };
    }
    var options = {
      path: endpoint,
      method: method,
      headers: headers
    };

    var req = http.request(options, function(res) {
      res.setEncoding('utf-8');

      var responseString = '';

      res.on('data', function(data) {
        responseString += data;
      });

      res.on('end', function() {
        console.log(responseString);
        var responseObject = JSON.parse(responseString);
        success(responseObject);
      });
    });

    req.write(dataString);
    req.end();
  }
};