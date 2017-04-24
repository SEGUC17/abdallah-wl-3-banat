var mongoose = require('mongoose');
var clientsSchema = mongoose.Schema({
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
email:{
  type:String
},
address:{
  type:String
},
creditcardinfo:{
  type:String
},
birthdate:{
  type:String
},
phone:{
  type:Number
},
isBanned:{
  type:Boolean,
  default:false
}




})

var clients = mongoose.model('clients',clientsSchema);
module.exports = clients;
