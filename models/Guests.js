var mongoose = require('mongoose');

var GuestSchema = new mongoose.Schema ({
  guest: [{
    name: String,
    comment: String
  }]
});

module.exports = mongoose.model('Guest', GuestSchema);
