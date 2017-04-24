var mongoose = require('mongoose');
var questionSchema = mongoose.Schema({question:String,answer:String});
var serviceSchema = mongoose.Schema({name:String, description:String, price:Number, picture:String,maxSlotClients:Number,slotDuration:Number,events:[{title:String,start:String}]});
var reviewsSchema = mongoose.Schema({description:String,name:String});
var businessSchema = mongoose.Schema({
bproviderid:{
  type:String,
  unique:true
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
  type:Number,
  default:0
},
announcements:[{type:String}],
reviews:[reviewsSchema],
description:{
  type:String
},
profilepicture:{
  type:String
},
info:{
  type:String
},
questions:[questionSchema],
isApproved:{
  type:Boolean,
  default:false
},
isDeclined:{
  type:Boolean,
  default:false
},
services:[serviceSchema]
})

var business = mongoose.model('business',businessSchema);
module.exports = business;
