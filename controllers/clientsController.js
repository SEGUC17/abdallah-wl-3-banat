const client = require('../models/client');
const business = require('../models/business');
const user = require('../models/user')

var clientsController = {
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
 }
,
editUser: function(req,res){

	/*if(req.body.firstname){
	var newClient= new client({
		uid:req.user._id,
		firstname: req.body.firstname,
		lastname: req.user.lastname,
		address: req.user.address,
		creditcardinfo:req.user.creditcardinfo,
		birthdate: req.user.birthdate
	})
}

if(req.body.lastname){
	var newClient= new client({
		uid:req.user._id,
		firstname: firstname,
		lastname: req.body.lastname,
		address: address,
		creditcardinfo: creditcardinfo,
		birthdate: birthdate
	});
}
if(req.body.address){
	var newClient= new client({
		uid:req.user._id,
		firstname: firstname,
		lastname: lastname,
		address: req.body.address,
		creditcardinfo: creditcardinfo,
		birthdate: birthdate
	});
}
if(req.body.creditcardinfo){
	var newClient= new client({
		uid:req.user._id,
		firstname: firstname,
		lastname: lastname,
		address: address,
		creditcardinfo: req.body.creditcardinfo,
		birthdate: birthdate
	});
}
if(req.body.birthdate){
	var newClient= new client({
		uid:req.user._id,
		firstname: firstname,
		lastname: lastname,
		address: address,
		creditcardinfo: creditcardinfo,
		birthdate: req.body.birthdate
	});
}*/
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
register:function(req,res){
  var type = req.param('type');
  if(type == 0){
  var newUser = new user({
    username:req.body.username,
    password:req.body.password,
    type : type
  });
  newUser.save(function(err,result){
    if(err) return res.json({success:false,msg:'Username already in use'});
    var newClient = new client({ uid : result._id,
     firstname : req.body.firstname,
     lastname : req.body.lastname,
     email : req.body.email,
     address : req.body.address,
     creditcardinfo : req.body.creditcardinfo,
     birthdate :req.body.birthdate,
     isBanned : false
   })
   newClient.save(function(err,clientSaved){
     if(err) return res.json({success:false,msg:'Registertion unsuccessful'});
     return res.json({success:true,msg:'Registered successful as a client'});
   })

 })}
  else if(type == 1){
    business.findOne({businessName:req.body.businessName},function(err,duplicate){
      if(err) return res.json({success:false,msg:'Invalid buisnessName'})
      if(duplicate) return res.json({success:false, msg:'Business name already in use'})
    })
    var newUser = new user({
      username:req.body.username,
      password:req.body.password,
      type : type
    });
    newUser.save(function(err,result){
      if(err) return res.json({success:false,msg:'Username already in use'});
      var newbProvider = new bprovider({ uid : result._id,
       firstname : req.body.firstname,
       lastname : req.body.lastname,
       email : req.body.email,
       birthdate:req.body.birthdate
     })
     newbProvider.save(function(err,newbProviderSaved){
       if(err) return res.json({success:false,msg:'Registertion unsuccessful'});
       var newBusiness = new business({
         bproviderid:newbProviderSaved._id,
         businessName:req.body.businessName,
         location:req.body.location,
         phone:req.body.phone,
         ratingsGiven:[],
         rating:0,
         announcements:[],
         reviews:[],
         description:req.body.description,
         profilepicture:'',
         info:req.body.info,
         questions:[],
         isApproved:false,
         services:[]
       })
       newBusiness.save(function(err,newBusinessSaved){
         if(err) return res.json({success:false, msg:'Registeration unsuccessful'})
         return res.json({success:true,msg:'Registered successful as a business provider'});
       })
     })

    })

  }
  else if(type == 2){
    var newUser = new user({
      username:req.body.username,
      password:req.body.password,
      type: type
    });
    newUser.save(function(err,result){
      if(err) return res.json({success:false,msg:'Username already in use'});
      var newAdmin = new admin({ uid : result._id,
       firstname : req.body.firstname,
       lastname : req.body.lastname,
       email : req.body.email,
       applications:[]
     })
     newAdmin.save(function(err,adminSaved){
       if(err) return res.json({success:false,msg:'Registertion unsuccessful'});
       return res.json({success:true,msg:'Registered successful as an Admin'});
     })

   })
  }
  else{
    return res.json({success:false,msg:'Invalid registeration type'});
  }

}


	
}

module.exports = clientsController;
