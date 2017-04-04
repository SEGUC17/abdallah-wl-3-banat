var business = require('../models/business');
var bprovider = require('../models/bprovider');
var clients = require('../models/clients');
var businessController = {
  
  	loadProfile : function(req,res){

  		
  		getBusProvider(req.user.username,function(err,Provider){

			if(err) throw err;
  			console.log('Provider : ' + Provider);
			getBusiness(Provider._id,function(err, Business){

				if(err) throw err;
				console.log('Business :',Business);
				//Create a custom object to remove _id and bproviderid and add email
				res.json('Business info : '+ Business);
			});

  	});    	
  	},

	AddServiceToBusiness:function(id,service, callback){
		var query = {bproviderid: id};
		business.findOneAndUpdate(query,{$push:{services:service}},{upsert:true},callback);
	},

	RemoveServiceFromBusiness : function(id,service, callback){
		var query = {bproviderid: id};
		business.findOneAndUpdate(query,{$pop:{services:service}},{upsert:true},callback);
	},

	
	AddService:function(req,res,next){
        
       /* if( req.file != undefined){
		var image = req.file.filename;
	    req.user.save(function(err) {
        if (err) {
            next(err);
            res.render('/AddService',{
			errors:errors
		});
            return;
		}
        });
		}*/
     	var service = {
	 	serviceName : req.body.serviceName,
	 	description : req.body.description,
		 price : req.body.price,
	 	//picture : image
     	}

     
     AddServiceToBusiness('1231231231',service,function(err,amr){
	 if(err) throw err;
   	 if(!amr){
        business.find({},function(err,business){
            res.send(business);
        })
        
   	 }else{
            res.send(amr);
    }

    });
    },

	// DELETING SERVICE 


	DeleteService : function(req,res,next){
		var m = req.user._id;
		var x = req.body.serviceName;
		RemoveServiceFromBusiness(m,x,function(err,business){ 
			if(err) throw err;
			if(!business){
    			console.log('error')
		//return done(null, false, {message: 'Unknown Business'});
			}

		//business.services = business.services.filter(function( obj ) {
		//return obj.field !== x;
		//}); 
		});
		}
	

}

module.exports = businessController;