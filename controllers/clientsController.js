const business = require('../models/business');
const client = require('../models/client');


var clientsController = {
  loadBusiness : function(req,res){
  		clientsController.getBusiness(req.params.id,function(err,BusProfile){
            if(err)
                res.json("There's an internal mongoose error :" + err);
            else
                if(!BusProfile)
                    res.json("This profile couldnt be found or may have been deleted ");
                else
                    res.json({Profile :  BusProfile});
  		});
  },
  askQuestion: function(req,res){
    var question = req.body.question;
    var bid = req.param('businessid');
    business.update({_id: bid}, { $push: { questions: {question:question, answer:""} } }, (err, business) => {
      if(err) return res.json({msg: "Invalid parameters"});
      if(!business) return res.json({msg: "Business not found"});
      res.send(business);
    });
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

	newClient.save((err,res)=>{
	});
	return res.send(newClient);
	})
},

/////////////////////// 	 	DataBase Functions		\\\\\\\\\\\\\\\\\\\\\\\\


	getBusiness : function(id,callback){
    	var query = {bproviderid: id};
    	business.findOne(query, callback);
	},
  rate: function(req,res){
  var ratings = [];
  var currRate  ;

  business.findOne({_id:req.param('id')},function(err,results){

   if(!err){
  ratings = results.ratingsGiven;
  currRate = results.rating;

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
    clients.findOne(query, callback);
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
            res.send("Database error");
        else
            if(!Business)
                res.send("Business Not Found");
            else
                res.json({Reviews: Business.reviews});
   });
},

postReview : function (req,res) {
    var review =  {  description : req.body.description,
                     uid : "69123"
                  };
    clientsController.findAndUpdateBusinessReview(req.params.id,review,function(err,Business){
        if(err)
            res.send("Database error "+ err);
        else
            if(!Business)
                res.send("Business Not Found ");
            else
                res.json({Reviews: Business.reviews});
    });
},

/////////////////////// 	vv 	DataBase Functions  vv	\\\\\\\\\\\\\\\\\\\\\\\\

findBusinessById: function(id,callback){
     var query = {bproviderid: id};
     business.findOne(query,callback);
},

findAndUpdateBusinessReview: function(id,review,callback){
    business.findOneAndUpdate({bproviderid: id},{$push:{reviews:review}},{new:true},callback);
}

}

module.exports = clientsController;
