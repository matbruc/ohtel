'use strict';
var express = require('express');
var router = express.Router();

var Reservation = require('../models/Reservation.js');

/* GET /reservations listing. */
router.get('/', (req, res, next) => {
  Reservation.find({code: req.headers.code}, (err, reservations) => {
    console.log(req.headers.code);
    if (err) return next(err);
    res.json(reservations);
  });
});

/* POST /reservations */
router.post('/', (req, res, next) => {
  Reservation.create(req.body, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /reservations/id */
router.get('/:id', (req, res, next) => {
  Reservation.findById(req.params.id, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /reservations/:id */
router.put('/:id', (req, res, next) => {
  Reservation.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /reservations/:id */
router.delete('/:id', (req, res, next) => {
  Reservation.findByIdAndRemove(req.params.id, req.body, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
