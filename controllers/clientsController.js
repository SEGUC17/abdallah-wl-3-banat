const client = require('../models/client');
const business = require('../models/business');

var clientsController = {

  loadBusiness : function(req,res){
  		clientsController.getBusiness("123",function(err,BusProfile){
            if(err) 
                res.json("There's an internal mongoose error :" + err);
            else 
                if(!BusProfile)
                    res.json("This profile couldnt be found or may have been deleted ");
                else	
                    res.json({Profile :  BusProfile});
  		});    	
  },

/////////////////////// 	 	DataBase Functions		\\\\\\\\\\\\\\\\\\\\\\\\


	getBusiness : function(id,callback){
    	var query = {bproviderid: id};
    	business.findOne(query, callback);
	}
}

module.exports = clientsController;
