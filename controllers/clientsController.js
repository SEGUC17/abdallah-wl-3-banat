const client = require('../models/client');
const business = require('../models/business');

var clientsController = {

	
viewAll: function(req, res){

		 business.find({},function(err,results){

		if(err){

		 		res.send('No Businesses');
		 	}

		 	res.json(results);
		 });  			
},

viewTop: function(req, res){
	var q = business.find({}).sort({'rating': -1}).limit(Number(10));
	q.exec(function(err, posts) {

		
		if(err){

		 		res.send('No Businesses');
		 	}

		res.json(posts);
     
});

}

}

module.exports = clientsController;
