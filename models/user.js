var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
  username:{
    type:String,
    required:true,
    unique:true

  },
  password:{
    type:String,
    required:true
  },
  type:Number

})

var user = mongoose.model('users',userSchema);
module.exports = user;
