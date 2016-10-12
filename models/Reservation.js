'use strict';
var mongoose = require('mongoose');

var ReservationSchema = new mongoose.Schema({
  code: String,
  firstName: String,
  lastName: String,
  fromDate: String,
  toDate: String
});

module.exports = mongoose.model('Reservation', ReservationSchema);
