const admin = require('../models/admin');
const business = require('../models/business');

var adminsController = {

 
GetViewAdminProfile: function(req, res){
	admin.findOne({uid: req.user._id},(err,admin) => {
		if(err)
		 res.send('No such admin found.');

		 res.json('AdminProfile : ' + admin);
	});
	
},


 /////////////////////// 	vv 	DataBase Functions  vv	\\\\\\\\\\\\\\\\\\\\\\\\   

}

module.exports = adminsController;
