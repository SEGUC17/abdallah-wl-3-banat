var business = require('../models/business');
var bprovider = require('../models/bprovider');
var clients = require('../models/clients');

var businessController = {
  
  	loadProfile : function(req,res){

  		
  		bprovider.getBusProvider(req.user.username,function(err,Provider){

			if(err) throw err;
  			console.log('Provider : ' + Provider);
			business.getBusiness(Provider._id,function(err, Business){

				if(err) throw err;
				console.log('Business :',Business);
				//Create a custom object to remove _id and bproviderid and add email
				res.json('Business info : '+ Business);
			});

  		});    	
  	}
}

module.exports = businessController;