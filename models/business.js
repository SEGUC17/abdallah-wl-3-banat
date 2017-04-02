var mongoose = require('mongoose');
var businessSchema = mongoose.Schema({
bproviderid:{
  type:String,
},
businessName:{
  type:String,
},
location:{
  type:String,
},
phone:{
  type:Number,
},
rating:{
  type:Number,
},
announcements:[],
reviews:[],
description:{
  type:String,
},
profilepicture:{
  type:String,
},
info:{
  type:String,
},
questions:[],
isApproved:{
  type:Boolean,
  default:false,
},
services:[]




})

var business = mongoose.model('business',businessSchema,'business');
module.exports = business;

module.exports.getBusiness = function(id,callback){
    var query = {bproviderid: id};
    business.findOne(query, callback);
};