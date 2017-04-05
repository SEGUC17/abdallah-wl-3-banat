var business = require('../models/business');
var bprovider = require('../models/bprovider');
var clients = require('../models/clients');
var user = require('../models/user');

var bprovidersController = {
  
  	loadProfile : function(req,res){ 		
  		getBusProvider(req.user.username,function(err,Provider){
			if(err) throw err;
			getBusiness(Provider._id,function(err1, Business){
				if(err1) throw err1;
				res.json('Business info : '+ Business);
			});
  		});    	
  	},
	
	AddService : function(req,res,next){  
     	 var service = {
	 		serviceName : req.body.serviceName,
	 		description : req.body.description,
			price : req.body.price
     	 };
   
   		 AddServiceToBusiness(req.user._id,service,function(err,UpdatedBusiness){
			 if(err) throw err;
   			 if(!UpdatedBusiness){
      			business.find({},function(err,business){
           			 res.json(business);
        		});
   	 		 }else{
            	res.json(UpdatedBusiness);
    		 }
   		});
    },


	///////////////////////////////////        Database Functions 		//////////////////////////////////
	
	getBusProvider : function(username,callback){
    	var query = {username: username};
   		user.findOne(query, callback);
	},

	getBusiness : function(id,callback){
    	var query = {bproviderid: id};
    	business.findOne(query, callback);
	},

	AddServiceToBusiness : function(id,service, callback){
		var query = {bproviderid: id};
		business.findOneAndUpdate(query,{$push:{services:service}},{upsert:true},callback);
	}
	

}

module.exports = bprovidersController;