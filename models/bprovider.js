var mongoose = require('mongoose');
var bproviderSchema = mongoose.Schema({
  uid:{
  type:String,
  unqiue:true
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
  }




})

var bprovider = mongoose.model('bprovider',bproviderSchema);
module.exports = bprovider;
