var mongoose = require('mongoose');
var businessSchema = mongoose.Schema({
bproviderid:{
  type:String,
},
businessName:{
  type:String,
  required:true,
  unique:true
},
location:{
  type:String
},
phone:{
  type:Number
},
ratingsGiven:[{type:Number}],
rating:{
  type:Number
},
announcements:[{type:String}],
reviews:[{type:String}],
description:{
  type:String
},
profilepicture:{
  type:String
},
info:{
  type:String
},
questions:[{question:String, answer:String}],
isApproved:{
  type:Boolean,
  default:false
},
services:[{name:String, description:String, price:Number, picture:String}]
})

var business = mongoose.model('businesses',businessSchema);
module.exports = business;
