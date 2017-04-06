var user = require('../models/user');
var client = require('../models/client');
var bprovider = require('../models/bprovider');
var admin = require('../models/admin');
var business = require('../models/business');
const jwt = require('jsonwebtoken');
const config = require('../config/database');



var guestsController = {
  login : function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    user.findOne({username:username},function(err,found){
      if(err) throw err;
      if(!found)
      return res.json({success:false,msg:'Username not found'});
      user.findOne({password:password},function(err,result){
        if(err) throw err;
        if(!result)
        return res.json({success:false,msg:'Wrong password'});
        const token = jwt.sign(result,config.secret,{
          expiresIn:604800
        });
        if(result.type == 0)
        return res.json({success:true,msg:'successful logged in as a client',token:'JWT '+token,user:{id : result._id,username:result.username,type:user.type}});
        else if(result.type == 1)
        return res.json({success:true,msg:'successful logged in as a business provider',token:'JWT '+token,user:{id : result._id,username:result.username,type:user.type}});
        return res.json({success:true,msg:'successful logged in as a admin',token:'JWT '+token,user:{id : result._id,username:result.username,type:user.type}});
      })
    })

},
searchBusiness:function(req,res){
  var businessName = req.body.businessName;
  business.findOne({businessName:businessName},function(err,result){
    if(err) return res.json({success:false, msg:'Invalid parameters'});
    if(!result) return res.json({success:false, msg:'No business found'});
    return res.json({success:true,business:result});
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
       email : req.body.email
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





module.exports = guestsController;
