const business = require('../models/business');
const client = require('../models/client');


var clientsController = {
  loadProfile : function(req,res){

  		clientsController.getProfile(req.user._id,function(err,Profile){
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

	
viewAll: function(req, res){

		 business.find({},function(err,results){

		if(err){

		 		res.send('No Businesses');
		 	}

		 	res.json(results);
		 });  			
},

viewTop: function(req, res){
	var command = business.find({}).sort({'rating': -1}).limit(Number(10));
	command.exec(function(err, posts) {

		
		if(err){

		 		res.send('No Businesses');
		 	}

		res.json(posts);
     
});

}

}

module.exports = clientsController;
