const admin = require('../models/admin');
const business = require('../models/business');
const client = require('../models/client');

var adminsController = {
	banClient:function(req,res){
	 		var id = req.param('clientid');
	 		client.findOneAndUpdate({_id:id},{$set:{isBanned:true}},{new:true},function(err,Client){
	 			if(err) {
					return res.json({msg:'Invalid Parameters'});	
	 			}
	 			if(!Client){
	 				return res.json({msg:'No Client found with that ID'});
	 			}
	 			res.send(Client);
	 		})
	 	}
}

module.exports = adminsController;
