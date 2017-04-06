const business = require('../models/business');
const bprovider = require('../models/bprovider');



var bprovidersController = {
		editService: function(req,res){
		var id = req.param('bid');
		var serid = req.param('serviceid');
		business.findOne({_id:id},(err,business)=>{
			if(err)
				return res.json({msg:'Invalid Parameters'});
			if(!business)
				return res.json({msg:'No Business found with that ID'});
			var servicess = business.services;
			servicess.forEach(function(service){
				if(service._id==serid){
					if(req.body.name)
						service.name=req.body.name;
					if(req.body.description)
						service.description=req.body.description;
					if(req.body.price)
						service.price=req.body.price;
				}
			business.save((err,res)=>{
			})
			return res.send(business);
			})
			
		})
	},
	editPicture: function(req,res){
		var id = req.param('bid');
		var serid = req.param('serviceid');
		business.findOne({_id:id},(err,business)=>{
			if(err)
				return res.json({msg:'Invalid Parameters'});
			if(!business)
				return res.json({msg:'No Business found with that ID'});
			var servicess = business.services;
			servicess.forEach(function(service){
				if(service._id==serid){
					if(req.file)
						service.picture = req.file.filename;
				}
				business.save((err,res)=>{

				})
				return res.send(business);
			})
		})
	}
}

module.exports = bprovidersController;
