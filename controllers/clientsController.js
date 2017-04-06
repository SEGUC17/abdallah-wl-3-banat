const client = require('../models/client');
const business = require('../models/business');

var clientsController = {
  
   
    viewReviews:  function(req, res){
       clientsController.findBusinessById(req.params.id,function(err,Business){
            if(err) 
                res.send("Database error");
            else 
                if(!Business)
                    res.send("Business Not Found");
                else 
                    res.json({Reviews: Business.reviews});
       });
    },

    postReview : function (req,res) {
        var review =  {  description : req.body.description,
                         uid : "69123"  
                      };
        clientsController.findAndUpdateBusinessReview(req.params.id,review,function(err,Business){
            if(err) 
                res.send("Database error "+ err);
            else 
                if(!Business)
                    res.send("Business Not Found ");
                else 
                    res.json({Reviews: Business.reviews});
        });
    },
  
 /////////////////////// 	vv 	DataBase Functions  vv	\\\\\\\\\\\\\\\\\\\\\\\\

    findBusinessById: function(id,callback){
         var query = {bproviderid: id};
         business.findOne(query,callback);
    },

    findAndUpdateBusinessReview: function(id,review,callback){
        business.findOneAndUpdate({bproviderid: id},{$push:{reviews:review}},{new:true},callback);
    }

}

module.exports = clientsController;
