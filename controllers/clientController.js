var business = require('../models/business');
var bprovider = require('../models/bprovider');
var clients = require('../models/clients');

var clientController = {
  
  	loadBusiness : function(req,res){
  		//get business provider shit from the database 
  		//and use angular to pass it to the view
		console.log('id: '+ req.params.id);
  		business.getBusiness(req.params.id,function(err,Profile){

  			res.json(Profile);	
  			
  		});    	
  	}
}

module.exports = clientController;