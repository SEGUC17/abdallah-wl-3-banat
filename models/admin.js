var mongoose = require('mongoose');

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
applications:[]

})

var admin = mongoose.model('admin',adminSchema);
module.exports = admin;
