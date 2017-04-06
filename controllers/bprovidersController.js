const business = require('../models/business');
const bprovider = require('../models/bprovider');


var bprovidersController = {


     AddService:function(req,res,next){
         if( req.file != undefined){
	     var image = req.file.filename;
         }
   req.checkBody('serviceName','serviceName is required').notEmpty();
	 req.checkBody('description','description is required').notEmpty();
	 req.checkBody('price', 'price is required').notEmpty();
     var errors = req.validationErrors();

	 if(errors){
	 res.json(errors)
     }
     else{
     var service = {
	     serviceName : req.body.serviceName,
	     description : req.body.description,
	     price : req.body.price,
         picture : image
         }
     var bproviderid=req.user._id;
     business.AddServiceToBusiness(bproviderid,service,function(err,Business){
	 if(err) res.send('You do not have business');
   	 else{Business.save(function(err){});
         }
     res.json(Business);

      });
   }
},   

    // DELETING SERVICE 

    DeleteService : function(req,res,next){
    var bproviderid = req.user._id;
    var index=req.param('index');
    console.log(index);
    FindBusinessById(bproviderid,function(err,res){
    if(err) res.json('you do not have business');
    if(!res){
    res.send('error');

    } else
    var services = res.services;
    var newservices = [];
    var i;
    var servicesLen = services.length;

    for (i=0;i<servicesLen;i++){
    if (i!=index)
    newservices.push(services[i]);
    }



    RemoveServiceFromBusiness(bproviderid,newservices,function(err,business){ 
    if(err) res.json('you do not have business');
    if(!business){
    res.send('error')
    }
    else res.send('Service Deleted')

    })
    })
    },


    FindBusinessById : function(id,callback){
    var query = {bproviderid : id };
    business.findOne(query,callback);

    },


    AddServiceToBusiness :function(id,service, callback){
	var query = {bproviderid: id};
	business.findOneAndUpdate(query,{$push:{services:service}},{upsert:true},callback);
    },

    RemoveServiceFromBusiness : function(id,newservices, callback){
	var query = {bproviderid: id};
	business.findOneAndUpdate(query,{services:newservices},{upsert:true},callback);
    },
  
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

};


module.exports = bprovidersController;
