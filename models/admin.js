var mongoose = require('mongoose');
var applicationsSchema = mongoose.Schema({bid:String});
var adminSchema = mongoose.Schema({
  uid:{
    type:String
},
email:{
  type:String
},
applications:[applicationsSchema]

})

var admin = mongoose.model('admin',adminSchema);
module.exports = admin;
