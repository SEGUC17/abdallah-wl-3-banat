const admin = require('../models/admin');
const business = require('../models/business');
const client = require('../models/client');
const bprovier = require('../models/bprovider');
const user = require('../models/user');
var moment = require('moment');
var stripe = require('stripe')('sk_test_J1iqETsdwrs8H9biAUfa4let')


var clientsController = {
  loadBusiness : function(req,res){
      console.log(req.param('id'));
      console.log(BusProfile);
  		clientsController.getBusiness(req.param('id'),function(err,BusProfile){

            if(err)
                return res.json({success:false,msg:'Invalid Parameters'});

                if(!BusProfile)
                    return res.json({success:false,msg:'This profile couldnt be found or may have been deleted'});

                    return res.json({success:true,Profile :  BusProfile});
  		});
  },
  askQuestion: function(req,res){
    if(req.user.type == 0)
    {
      var question = req.body.question;
      var bid = req.param('businessid');
      business.update({_id: bid}, { $push: { questions: {question:question, answer:""} } }, (err, business) => {
        if(err) return res.json({msg: "Invalid parameters"});
        if(!business) return res.json({msg: "Business not found"});
        res.json(business);
      });
    }
  },
  getEditprofile: function(req, res){
	res.json('Edit Profile view');
    },

    editUserPassword : function(req,res){
	var newClient = new user({
		_id :req.user._id,
		username:req.user.username,
		password:req.user.password
	})
	if(req.body.currentPassword == newClient.password){
		if(req.body.newPassword == req.body.newPasswordValidation){
			newClient.password = req.body.newPassword;
			user.findOneAndUpdate({username:req.user.username},{password:req.body.newPassword},function(err,result){
				if(err) return res.json({success:false,msg:"Passwords did not update"});
				return res.json({success:true,msg:"Password updated"});
			})
		}else{
			return res.json({success:false,msg:'The new passwords do not match'});
		}

		}else{
			return res.json({success:false,msg:'The entered password does not match the current password'});
		}
    },

editUser: function(req,res){

client.findOne({uid:req.user._id},(err,newClient)=>{
	if(err) return res.json({msg:'Error'});
	if(!newClient)
	return res.json({msg:'User not found'});

	if(req.body.firstname) {
		newClient.firstname = req.body.firstname;
	}
	if(req.body.lastname) {
		newClient.lastname = req.body.lastname;
	}
	if(req.body.email) {
		newClient.email = req.body.email;
	}
	if(req.body.address) {
		newClient.address = req.body.address;
	}
	if(req.body.creditcardinfo) {
		newClient.creditcardinfo = req.body.creditcardinfo;
	}
	if(req.body.birthdate) {
		newClient.birthdate = req.body.birthdate;
	}
  if(req.body.phone) {
    newClient.phone = req.body.phone;
  }

	newClient.save((err,res)=>{
	});
	return res.send(newClient);
	})
},

/////////////////////// 	 	DataBase Functions		\\\\\\\\\\\\\\\\\\\\\\\\


	getBusiness : function(id,callback){
    	var query = {_id: id};
    	business.findOne(query, callback);
	},
  rate: function(req,res){
    console.log(req.param('id'));
//console.log(req.body.rating);

if(req.user.type == 0){
  var ratings = [];
  var currRate  ;

  business.findOne({_id:req.param('id')},function(err,results){

console.log(results);
   if(results){
  ratings = results.ratingsGiven;
  console.log(ratings);
  currRate = results.rating;

   }else if(results.length == 0){
       console.log('dafd');
       console.log(err);
   }
   var i ;
  var sum = 0 ;
  for( i = 0 ; i<ratings.length;i++){
  sum = sum+ratings[i];
  }
     business.findOneAndUpdate({_id:req.param('id')},{$push:{ratingsGiven:req.body.rating},$set:{rating:(req.body.rating+sum)/(ratings.length+1)}},{upsert:true},function(err,res){
         if(err){
            }
     })

  })

}

},
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
    client.findOne(query, callback);
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

},
viewReviews:  function(req, res){
   clientsController.findBusinessById(req.params.id,function(err,Business){
        if(err)
            res.json({success:false,msg:'invalid parameters'});
        else
            if(!Business)
                res.json({success:false,msg:'business not found'});
            else
                res.json({success:true,Reviews: Business.reviews});
   });
},

postReview : function (req,res) {
    var review =  {  description : req.body.description,
                     name : req.body.name
                  };
    clientsController.findAndUpdateBusinessReview(req.param('id'),review,function(err,Business){
        if(err)
            res.json({success:false,msg:'invalid parameters'});
        else
            if(!Business)
                res.json({success:false,msg:'Business not found'});
            else{
              var reviews = Business.reviews;
              reviews.push(review);
              Business.save(function(err,result){
                if(err) return res.json({success:false,msg:'invalid parameters'});
                else if(result) return res.json({success:true,msg:'Review was submitted successfully'});
              })
            }

    });
},

/////////////////////// 	vv 	DataBase Functions  vv	\\\\\\\\\\\\\\\\\\\\\\\\

findBusinessById: function(id,callback){
     var query = {_id: id};
     business.findOne(query,callback);
},

findAndUpdateBusinessReview: function(id,review,callback){
    business.findOne({_id: id},callback);
},
checkEventValidity:function(req,res){
  var isValid = false;
  var date = moment();
  var chosenDate = moment(req.body.start);
  if(chosenDate.diff(date,'minutes')< 0)
  return res.json({success:false,isValid:false,msg:'The chosen date has already passed!'});
  client.findOne({uid:req.user._id},function(err,Client){
  if(err) return res.json({success:false,msg:'Invalid parameters'});
  if(!Client) return res.json({success:false,msg:'You must be logged in as a client to check the validity of an event',isValid:false});
  var businessId = req.param('bId');
  var serviceId = req.param('serviceId');
  business.findOne({_id:businessId},function(err,Business){
    if(err) return res.json({success:false,msg:'Invalid parameters'});
    if(!Business) return res.json({success:false,msg:'No business found matching the supplied business Id',isValid:false});
    var services = Business.services;
    var chosenEvent = moment(req.body.start);
    var availableClients;
    services.forEach(function(service){
      if(service._id == serviceId){
        availableClients = service.maxSlotClients;
      service.events.forEach(function(event){
        var end = moment(event.start);
          if((chosenEvent.diff(end,'minutes') < service.slotDuration)&&(chosenEvent.diff(end,'days') == 0))
          availableClients--;
      })

    }
    })
    if(availableClients > 0){
      isValid = true;
    }

    if(isValid) return res.json({isValid:true});
    return res.json({isValid:false,msg:'Maximum number of clients for this slot has been reached!'});
  })
})
},

addEvent:function(title,start,businessId,serviceId){
    var updatedService;
    business.findOne({_id:businessId},function(err,Business){
      if(err) return false;
      if(!Business) return false;
      var services = Business.services;
      services.forEach(function(service){
        if(service._id == serviceId){
          updatedService = service;
          service.events.push({title:title,start:start});
        }
      })
      if(updatedService){
        Business.save(function(err,result){
          if(err) return false;
          if(result) return true;
          return false;
        })
      }else
    return false;
    })

},
getEvents:function(req,res){
      if(req.user.type != 0)
        return res.json({success:false,msg:'Only clients are allowed to see this page'});
  var businessId = req.param('bId');
  var serviceId = req.param('serviceId');
  var result;
  business.findOne({_id:businessId},function(err,Business){
    if(err) return res.json({success:false,msg:'Invalid parameters'});
    if(!Business) return res.json({success:false,msg:'No business found matching the supplied business Id'});
    var services = Business.services;
    services.forEach(function(service){
      if(service._id == serviceId){
        result = {success:true,events:service.events,service:service};
        }
      })
      if(result)
      return res.json(result);
      return res.json({success:false,msg:'No service found matching the supplied service Id'});

    } )
  },

clientsReserve:function(req,res){
  var title = req.body.title;
  var start = req.body.start;
  var businessId = req.body.businessId;
  var serviceId = req.body.serviceId;
  var charge = stripe.charges.create({
  amount: req.body.price,
  currency: "eur",
  description: req.body.description,
  source: req.body.token,
}, function(err, charge) {
  if(err)
  return res.json({success:false,msg:'There was an error completing the desired payment'}); 
  var updatedService;
  business.findOne({_id:businessId},function(err,Business){
    if(err) return res.json({success:false,msg:'There was an error completing the desired payment'});
    if(!Business) return res.json({success:false,msg:'There was an error completing the desired payment'});;
    var services = Business.services;
    services.forEach(function(service){
      if(service._id == serviceId){
        updatedService = service;
        service.events.push({title:title,start:start});
      }
    })
    if(updatedService){
      Business.save(function(err,result){
        if(err) return res.json({success:false,msg:'There was an error completing the desired payment'});
        if(result) return res.json({success:true,msg:'Payment completed and slot has been successfully reserved'});
        return res.json({success:false,msg:'There was an error completing the desired payment'});
      })
    }else
  return res.json({success:false,msg:'There was an error completing the desired payment'});
  }
)
})
}
}



module.exports = clientsController;
