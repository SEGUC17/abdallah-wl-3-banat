var user = require('../models/user');
var client = require('../models/client');
var bprovider = require('../models/bprovider');
var admin = require('../models/admin');
var business = require('../models/business');
const jwt = require('jsonwebtoken');
const config = require('../config/database');



var guestsController = {
  loadBusiness : function(req,res){
      guestsController.getBusiness(req.param('id'),function(err,BusProfile){

            if(err)
                res.json("There's an internal mongoose error :" + err);
            else
                if(!BusProfile)

                    res.json("This profile couldnt be found or may have been deleted " + BusProfile);
                else{
                    res.json({Profile :  BusProfile});
}
      });
   },

/////////////////////// 	 	DataBase Functions		\\\\\\\\\\\\\\\\\\\\\\\\


	getBusiness : function(id,callback){
    	var query = {_id: id};
    	business.findOne(query, callback);
	},
  login : function(req,res){

   var username = req.body.username;
   var password = req.body.password;
   req.checkBody('username','Username is required!').notEmpty();
   req.checkBody('password','Password is required!').notEmpty();

   var err = req.validationErrors();
     if(err){
     return res.json({success:false,msg:'Please enter all fields'});
   }
   user.findOne({username:username},function(err,found){
     if(err) throw err;
     if(!found)
     return res.json({success:false,msg:'Username not found'});
     user.findOne({password:password,username:username},function(err,result){
       if(err) throw err;
       if(!result)
       return res.json({success:false,msg:'Wrong password'});
       const token = jwt.sign(result,config.secret,{
         expiresIn:604800
       });
       if(result.type == 0)
       return res.json({success:true,msg:'Logged in successfully as a client',token:'JWT '+token,user:{id : result._id,username:result.username,type:result.type}});
       else if(result.type == 1)
       return res.json({success:true,msg:'Logged in successfully as a business provider',token:'JWT '+token,user:{id : result._id,username:result.username,type:result.type}});
       return res.json({success:true,msg:'Logged in successfully as a admin',token:'JWT '+token,user:{id : result._id,username:result.username,type:result.type}});
     })
   })

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
    req.checkBody('username','Username is required!').notEmpty();
    req.checkBody('password','Password is required!').notEmpty();
    req.checkBody('firstname','First name is required!').notEmpty();
    req.checkBody('lastname','Last name is required!').notEmpty();
    req.checkBody('email','Email is required!').notEmpty();
    req.checkBody('creditcardinfo','Credit card info is required!')
    req.checkBody('address','Address is required!').notEmpty();
    req.checkBody('phone','Phone is required!').notEmpty();
    req.checkBody('birthdate','Birth date is required!').notEmpty();
    var err = req.validationErrors();
      if(err){
      return res.json({success:false,msg:'Please enter all fields!'});
    }
    if(isNaN(req.body.phone))
    return res.json({success:false,msg:'Phone must be a number'});

    if(!guestsController.validateEmail(req.body.email))
    return res.json({success:false,msg:'Please enter a valid email address!'});

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
     phone:req.body.phone,
     birthdate :req.body.birthdate,
     isBanned : false
   })
   newClient.save(function(err,clientSaved){
     if(err) res.json({success:false,msg:'Registertion unsuccessful'});
     return res.json({success:true,msg:'Registered successful as a client'});
   })

 })}
  else if(type == 1){
    req.checkBody('username','Username is required!').notEmpty();
    req.checkBody('password','Password is required!').notEmpty();
    req.checkBody('firstname','First name is required!').notEmpty();
    req.checkBody('lastname','Last name is required!').notEmpty();
    req.checkBody('email','Email is required!').notEmpty();
    req.checkBody('phone','Phone is required!').notEmpty();
    req.checkBody('birthdate','Birthdate is required!').notEmpty();
    req.checkBody('businessName','Business name is required!').notEmpty();
    req.checkBody('location','Business location is required!').notEmpty();
    req.checkBody('description','Business description is required!').notEmpty();
    req.checkBody('info','Business description is required!').notEmpty();

    var err = req.validationErrors();
      if(err){
      return res.json({success:false,msg:'Please enter all fields'});
    }
    if(isNaN(req.body.phone))
    return res.json({success:false,msg:'Phone must be a number'});

    if(!guestsController.validateEmail(req.body.email))
    return res.json({success:false,msg:'Please enter a valid email address!'});

    business.findOne({businessName:req.body.businessName},function(err,duplicate){
      if(err) return res.json({success:false,msg:'Invalid business name'});
      if(duplicate) return res.json({success:false,msg:'Business name already in use'});
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
       birthdate:req.body.birthdate,
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
      if(err) return res.json({success:false,msg:'Registeration unsuccessful'});
      return res.json({success:true,msg:'Registered successful as an Admin'});
    })

   })
  }
  else{
    return res.json({success:false,msg:'Invalid registeration type'});
  }

},
viewReviews: function(req, res){
    guestsController.findBusinessById(req.params.id,function(err,Business){
        if(err)
            res.send("Database error "+ err);
        else
            if(!Business)
                res.send("Business Not Found");
            else
                res.json({Reviews: Business.reviews});
    });
},

/////////////////////// 	 	DataBase Functions		\\\\\\\\\\\\\\\\\\\\\\\\

findBusinessById: function(id,callback){
    var query = {_id: id};
    business.findOne(query,callback);
},
  validateEmail:function(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


}





module.exports = guestsController;
