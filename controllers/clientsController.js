var business = require('../models/business');
var bprovider = require('../models/bprovider');
var clients = require('../models/clients');
var user = require('../models/user');

var clientsController = {
  
  	loadBusiness : function(req,res){
  		//get business provider shit from the database 
  		//and use angular to pass it to the view
		console.log('id: '+ req.params.id);
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

module.exports = clientsController;