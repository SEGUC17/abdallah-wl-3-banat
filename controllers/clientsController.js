const clients = require('../models/clients');
const business = require('../models/business');


var clientsController = {
  loadProfile : function(req,res){

  		clients.getProfile(req.user._id,function(err,Profile){
 if (err) {
  		return	res.json("database error");
    }
      res.json(Profile);

  		});
  	},
    logout : function(req,res){
     req.logout();
     res.redirect('/');
   },

 /////////////////////// 	vv 	DataBase Functions  vv	\\\\\\\\\\\\\\\\\\\\\\\\


    getProfile : function(uid,callback){
        var query = {uid: uid};
    clients.findOne(query, callback);
    }

}

module.exports = clientsController;
