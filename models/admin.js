var mongoose = require('mongoose');
var applicationsSchema = mongoose.Schema({bid:String});
var adminSchema = mongoose.Schema({
  uid:{
    type:String,
    unique:true
},
email:{
  type:String
},
applications:[applicationsSchema]

})

var admins = mongoose.model('admins',adminSchema);
module.exports = admins;
