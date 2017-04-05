var mongoose = require('mongoose');

var bproviderSchema = mongoose.Schema({
  uid:{
    type:String,
    unique: true
  },
  email:{
    type:String,
    unique: true
  }

})



var bprovider = mongoose.model('bproviders',bproviderSchema);
module.exports = bprovider;
