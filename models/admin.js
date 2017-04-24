var mongoose = require('mongoose');
var applicationsSchema = mongoose.Schema({businessName:String});
var adminSchema = mongoose.Schema({
  uid:{
    type:String,
    unique:true
},
firstname:{
  type:String
},
lastname:{
  type:String
},
birthdate:{
  type:String
},
email:{
  type:String
},
applications:[applicationsSchema]

})

var admin = mongoose.model('admin',adminSchema);
module.exports = admin;
