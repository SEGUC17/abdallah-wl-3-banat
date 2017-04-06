const business = require('../models/business');
const bprovider = require('../models/bprovider');

var bprovidersController = {

    viewReviews:  function(req, res){
        bprovidersController.findBusinessById(req.params.id,function(err,Business){
			if(err) 
                res.send("Database error " + err);
            else 
                if(!Business)
                    res.send("Business Not Found");
                else 
                    res.json({Reviews: Business.reviews});
        });
    },

 /////////////////////// 	vv 	DataBase Functions  vv	\\\\\\\\\\\\\\\\\\\\\\\\
	
    findBusinessById: function(id,callback){
        var query = {bproviderid: id};
        business.findOne(query,callback);
    }	


}

module.exports = bprovidersController;
