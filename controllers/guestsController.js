var business = require('../models/business');
var bprovider = require('../models/bprovider');


var guestsController = {
  
  	loadBusiness : function(req,res){
  		business.getBusiness(req.params.id,function(err,Profile){
  			res.json(Profile);	
  		});    	
  	},

/////////////////////// 	 	DataBase Functions		\\\\\\\\\\\\\\\\\\\\\\\\


	getBusiness : function(id,callback){
    	var query = {bproviderid: id};
    	business.findOne(query, callback);
	}

}

module.exports = guestsController;