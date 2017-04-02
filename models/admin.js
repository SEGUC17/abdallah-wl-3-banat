var mongoose = require('mongoose');
var adminSchema = mongoose.Schema({
username:{
  type:String,
},
password:{
  type:String,
},
email:{
  type:String,

}


})

var admins = mongoose.model('admins',adminSchema);
module.exports = admins;
