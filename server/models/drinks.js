var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Drink = ({
  name: String,
  type: String
});


mongoose.connect('mongodb://localhost/drinks');

module.exports = mongoose.model('drinks', Drink);
