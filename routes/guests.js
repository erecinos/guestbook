var express = require('express');
var router = express.Router();

var Guest = require('../models/Guests.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  Guest.find(function(err, docs) {
    res.render('guests/index', { guests: docs
});
  });
});

router.post('/', function(req, res, next) {
  var guest = new Guest({
    guest: [{
      name: req.body.name,
      comment: req.body.comment,
    }]
  });

  guest.save(function(err) {
    if (err) res.send('error' + err);
    else res.redirect('/guests');
  })
});

module.exports = router
