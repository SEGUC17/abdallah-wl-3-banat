var mongoose = require('mongoose');
var bproviderSchema = mongoose.Schema({
  uid:{
  type:String,
  unique:true
},
  email:{
    type:String
  }




})

var bprovider = mongoose.model('bprovider',bproviderSchema);
module.exports = bprovider;
