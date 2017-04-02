var mongoose = require('mongoose');

var bproviderSchema = mongoose.Schema({
  username:{
    type:String,
    required:true,

  },
  password:{
    type:String,
  },
  email:{
    type:String,
  }

})



var bprovider = mongoose.model('bprovider',bproviderSchema,'bprovider');
module.exports = bprovider;

module.exports.getBusProvider = function(username,callback){
    var query = {username: username};
    bprovider.findOne(query, callback);
};