const business = require('../models/business');
const bprovider = require('../models/bprovider');

var bprovidersController = {

  	loadProfile : function(req,res){ 		
  		bprovidersController.getBusProvider(req.user._id,function(err,Provider){
			if(err) 
                res.json("There's an internal mongoose error " + err);
            else 
                if(!Provider)
                    res.json("This profile couldnt be found or may have been deleted ");
                else                   
			        getBusiness(Provider.uid,function(err1, Business){
				        if(err1) 
                            res.send("There's an internal mongoose error " + err1);
                        else 
                            if(!Business)
                                res.send("This profile couldnt be found or may have been deleted ");
                            else 
				                res.json({My_Info : Provider , Business_info : Business});
			        });
  		});    	
  	},

 	///////////////////////////////////        Database Functions 		//////////////////////////////////
	
	getBusProvider : function(id,callback){
    	var query = {uid: id};
   		user.findOne(query, callback);
	},

	getBusiness : function(id,callback){
    	var query = {bproviderid: id};
    	business.findOne(query, callback);
	}
}

module.exports = bprovidersController;
