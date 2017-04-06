const business = require('../models/business');
const bprovider = require('../models/bprovider');

var bprovidersController = {


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

module.exports = bprovidersController;
