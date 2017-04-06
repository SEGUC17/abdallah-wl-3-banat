const admin = require('../models/admin');
const business = require('../models/business');


var adminsController = {
    
    removeProvider: function(req,res ){

        var id = req.param('id');
	business.findOneAndUpdate({ bproviderid : id }, { isApproved : false } , {upsert:true},function(err, res){
	});

	}
}

module.exports = adminsController;
