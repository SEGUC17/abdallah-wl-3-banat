var mongoose = require('mongoose');
var adminSchema = mongoose.Schema({
  uid:{
    type:String
},
email:{
  type:String
}

})

var admins = mongoose.model('admins',adminSchema);
module.exports = admins;
