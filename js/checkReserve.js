var utils = require('utils.js');

module.exports = {
  getReserve: (code) => {
    performRequest('/reservation:code' + deckId + '/cards', 'GET', {
      session_id: sessionId,
      "_items_per_page": 100
    }, function(data) {
      console.log('Fetched ' + data.result.paging.total_items + ' cards');
    });
  }
}
