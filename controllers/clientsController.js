const client = require('../models/client');
const business = require('../models/business');

var clientsController = {
rate: function(req,res){
var ratings = [];
var currRate  ;

business.findOne({_id:req.param('id')},function(err,results){
 
 if(!err){
ratings = results.ratingsGiven;
currRate = results.rating;

 }
 var i ;
var sum = 0 ;
for( i = 0 ; i<ratings.length;i++){
sum = sum+ratings[i];
}
   business.findOneAndUpdate({_id:req.param('id')},{$push:{ratingsGiven:req.body.rating},$set:{rating:(req.body.rating+sum)/(ratings.length+1)}},{upsert:true},function(err,res){
       if(err){
          }
   })

})  



}

}

module.exports = clientsController;
