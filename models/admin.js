var mongoose = require('mongoose');
var adminSchema = mongoose.Schema({
  uid:{
    type: String,
    unique: true
  },
  email:{
    type: String,
    unique: true
  }

})

var admins = mongoose.model('admins',adminSchema);
module.exports = admins;
