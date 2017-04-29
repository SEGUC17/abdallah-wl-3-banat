const admin = require('../models/admin');
const business = require('../models/business');
const client = require('../models/client');
const bprovider = require('../models/bprovider');
const user = require('../models/user');
var multer = require('multer');
var crypto = require('crypto');
var expressValidator = require('express-validator');


var bprovidersController = {
  loadProfile : function(req,res){
    bprovidersController.getBusProvider(req.user._id,function(err,Provider){
    if(err)
              return res.json({success:false,unauthorized:false,msg:'Invalid Parameters'});
              if(!Provider)
                  return res.json({success:false,unauthorized:true,msg:'Only the provider of this business can view it'});
            bprovidersController.getBusiness(Provider._id,function(err1, Business){
              if(err1)
                        return res.json({success:false,unauthorized:false,msg:'Invalid parameters'});
                      else
                          if(!Business)
                            return res.json({success:false,unauthorized:false,msg:'Business not found'});
                          else
                      return res.json({success:true,unauthorized:false,Provider:Provider , Business:Business});
            });
    });
  },
   viewQuestions: function(req, res){
  var bid = req.param('businessid');
 business.findOne({_id: bid}, (err, Business) => {
    if(err) return res.json({msg: 'Invalid parameter'});
    if(!Business) return res.json({msg: 'Business not found'});
    res.send(Business.questions);
  });
},
editbproviderpicture: function(req,res){
  var bid = req.param('businessid');
  console.log(bid);
  business.findOne({_id:bid},(err,Business)=>{
    if(err) return res.json({success:false,msg:'Invalid Parameters'});
    if(!Business) return res.json({success:false,msg:'Business not found'});
    else{
      if(req.body.picture)
        Business.profilepicture = req.body.picture;
      Business.save((err,newBusiness)=>{
      if(err) return res.json({success:false,msg:'Invalid Parameters'});
      
      return res.json({success:true,Business:newBusiness});
      })
    }
  })
},

///////////////////////////////////        Database Functions 		//////////////////////////////////

getBusProvider : function(id,callback){
    var query = {uid: id};
    bprovider.findOne(query, callback);
},

getBusiness : function(id,callback){
    var query = {bproviderid: id};
    business.findOne(query, callback);
},
  editP:function(req,res){

    if(req.user.type==1){
      if(req.body.password){

   user.findOneAndUpdate({_id:req.user._id},{$set:{password:req.body.password}},{new:true},function(err,res){
    if(err){

  return res.json({susccess:false,msg:'Invalid paramaters'});
    }else{

    }
      })

      }
         if(req.body.email){
             bprovider.findOneAndUpdate({uid:req.user._id},{$set:{email:req.body.email}},{new:true},function(err,res){
    if(err){
      return res.json({susccess:false,msg:'Invalid paramaters'});
    }else{

    }
      })

         }
             if(req.body.bName){
                      var x = res;

      var n = req.body.bName;

  bprovider.findOne({uid:req.user._id},function(req,res){

    if(res){

   business.findOneAndUpdate({bproviderid:res._id},{$set:{businessName:n}},{new:true},function(err,res){
    if(err){

  return x.json({susccess:false,msg:'Invalid paramaters'});
    }else{

    }

      })
    }
    })

            }

                 if(req.body.location){
                       var x = res;

                   var n1 = req.body.location;
                 bprovider.findOne({uid:req.user._id},function(req,res){
                   if(res){
                 business.findOneAndUpdate({bproviderid:res._id},{$set:{location:n1}},{new:true},function(err,res){
    if(err){
  return x.json({susccess:false,msg:'Invalid paramaters'});
    }else{

    }

      })
                   }
                 })
                 }
                     if(req.body.phone) {
                        var x = res;

                       var n2 = req.body.phone;
                       bprovider.findOne({uid:req.user._id},function(req,res){
                         if(res){
                         business.findOneAndUpdate({bproviderid:res._id},{$set:{phone:n2}},{new:true},function(err,res){
    if(err){
      return  x.json({susccess:false,msg:'Invalid paramaters'});
    }else{

    }

      })
                         }
                       })
                     }
                       if(req.body.info){
         var x = res;
                   var n3 = req.body.info;
                   bprovider.findOne({uid:req.user._id},function(req,res){
                    if(res){
   business.findOneAndUpdate({bproviderid:res._id},{$set:{info:n3}},{new:true},function(err,res){
    if(err){
  return x.json({susccess:false,msg:'Invalid paramaters'});
    }else{

    }

      })
                    }
                   })
                       }
                     }


  },
      editPP:function(req,res){
            if(req.file){
  var x = res;
                               var img = req.file.filename;
            bprovider.findOne({uid:req.user._id},function(req,res){
  if(res){
        business.findOneAndUpdate({bproviderid:req.user._id},{$set:{profilepicture:img}},{new:true},function(err,res){

    if(err){

  return x.json({susccess:false,msg:'Invalid paramaters'});
    }else{


    }

      })
  }
            })
                          }else
                          res.json({success:false,msg:'Only the provider of this business can edit this profile.'});
      },
      postAnnouncement: function(req,res){


        bprovidersController.getBusProvider(req.user._id,function(err,Provider){
              if(err)
                  res.json({success:false,msg:'Invalid parameters'});
              else
                if(!Provider)
                  res.json({success:false,msg:'Business provider is not found'});
              else
              {
                var description = req.body.description;
                business.update({bproviderid: Provider._id },{$push:{announcements: description}},function(err1,Business){

                  if(err1)
                          res.json({success:false,msg:'Invalid parameters'});
                      else
                          if(!Business)
                              res.json({success:false,msg:'Business is not found'});
                          else
                              res.json({Success : true});
             });
              }
        });



    },
     createBusinessIfDeclined:function(req,res){
  const query={uid: req.user._id}
  bprovider.findOne(query,function(err,Bprovider){
        if(err) return res.json({success:false, msg:'Invalid parameters'});
  business.findOne({bproviderid:Bprovider._id},function (err,Business) {
    if(err) return res.json({success:false, msg:'Something Went Wrong'});
    Business.remove({bproviderid:Bprovider.bproviderid},function(err,r){
      if(err) return res.json({success:false,msg:'Business Was not added'})
      req.checkBody('businessName','Business Name is required').notEmpty();
      req.checkBody('location','location is required').notEmpty();
      req.checkBody('phone', 'phone is required').notEmpty();
      req.checkBody('info', 'info is required').notEmpty();
      req.checkBody('description', 'description is required').notEmpty();

      var errors = req.validationErrors();

if(errors){
res.json({success:false,msg:'You must enter all fields.'})
  }
  else{
      var newBusiness = new business({
        bproviderid:Bprovider._id,
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
        if(err) res.json({success:false,msg:'Invalid parameters'});
        return res.json({success:true,msg:'Business added'});
      })

    }
    })

  })


})



},

getBpandB: function(req,res){

bprovider.findOne({uid:req.user._id},function(err,result){
if(result){
business.findOne({bproviderid:result._id},function(eror,result1){
if(result1){

  return res.json({provider:result , business:result1});
}


})

  }
})

},
deleteAnnouncement: function(req, res){
    if(req.user.type == 1)
    {
      var uid = req.user._id;
      var index = req.param('index');
      bprovider.findOne({uid: uid}, (err, bpro) => {
        if(err) return res.json({msg: "Invalid parameter"});
        var bproviderid = bpro._id;

        business.findOne({bproviderid: bproviderid}, (err, result) => {
          if(err) return res.json('Invalid Parameter');
          if(!result) return res.json('No business found');

          var newAnns = [];
          var announcements = result.announcements;
          var annLength = announcements.length;

          console.log(result);

          if(index == annLength)
           return res.json('Invalid Index');

          for (var i = 0; i < annLength; i++){
          if (i != index)
            newAnns.push(announcements[i]);
          }

          business.findOneAndUpdate({bproviderid: bproviderid}, {announcements: newAnns}, {upsert: true}, (err, result) => {
            if(err) return res.json('Invalid Parameter');
            if(!result) return res.json('No business found');
            return res.json('Announcement deleted');
          });
        });
      });
    }
  },
  answerQuestion: function(req,res){

      var id = req.user._id;
      var newAnswer = req.body.answer;
      var questionid = req.param('id');
   bprovider.findOne({uid:id},function(err,provider){
           if(err) throw err;
          if(!provider)
          return res.json({msg:'provider not found'});
       business.findOne({bproviderid:provider._id},function(err,result){
           if(err) throw err;
           if(!result) return res.json({msg:'business not found'});
           result.questions.forEach(function(question){
               if(question._id == questionid){
      question['answer'] = newAnswer;
            }
           })
           result.save(function(err,result){
           })

       })
      })

  },

  logout : function(req,res){
  				req.logout();
  				res.redirect('/');
  },

AddService:function(req,res,next){
  if (req.user.type==1){
      if(req.file){
    var image = req.file.filename;
      }
req.checkBody('name','serviceName is required').notEmpty();
req.checkBody('description','description is required').notEmpty();
req.checkBody('price', 'price is required').notEmpty();
req.checkBody('maxSlotClients','maxSlotClients is required').notEmpty();
req.checkBody('slotDuration','slotDuration is required').notEmpty();


  var errors = req.validationErrors();

if(errors){
res.json(errors)
  }
  else{
  var service = {
    name : req.body.name,
    description : req.body.description,
    price : req.body.price,
     picture : image,
     events : [],
     slotDuration:req.body.slotDuration,
     maxSlotClients:req.body.maxSlotClients
     }
  var uid=req.user._id;
  bprovider.findOne({uid:uid},function(err,result){

  var bproviderid=result._id;

  bprovidersController.AddServiceToBusiness(bproviderid,service,function(err,Business){
if(err) res.send('You do not have business');
  else{Business.save(function(err){});
                        res.json({Success : true});



      }

   });
  });
}
  }
},
    // DELETING SERVICE

    DeleteService : function(req,res,next){
      if (req.user.type==1){
    var uid = req.user._id;
    var serviceid = req.params.serviceid;

    bprovider.findOne({uid:uid},function(err,response){
    var bprovider= response._id;
    bprovidersController.FindBusinessById(bprovider,function(err,result){
    if(err) print.json('you do not have business');
    if(!result){
    res.send('error');

    } else
    var services = result.services;
    var newservices = [];
    var i;
    var servicesLen = services.length;

    for (i=0;i<servicesLen;i++){
    if (services[i]._id==serviceid){}
    else
    newservices.push(services[i]);
    }
    bprovidersController.RemoveServiceFromBusiness(bprovider,newservices,function(err,business){
    if(err) res.json('you do not have business');
    if(!business){
    res.send('error')
    }
    else
                           res.json({Success : true});

                 })
             });
        });
      }
    },

    searchBusiness: function(req, res, next) {
  var search = req.body.businessName
    business.find({ businessName: new RegExp(req.query.q, "i") })
        .exec((err, buisnessName) => {
           if(err) return res.json({success:false, msg:'Invalid parameters'});
           if(!res) return res.json({success:false, msg:'No business found'});
             return res.json( {
                businessName: buisnessName,
                query: req.query.q
            });

        });
},



    FindBusinessById : function(id,callback){
    var query = {bproviderid : id };
    business.findOne(query,callback);

    },

    /*FindBusiness: function(req,res){
      var id = req.user._id;
      bprovider.findOne({uid:id},(err,Bprovider)=>{
        if(err){
          return res.json({success:false,unauthorized:false,msg:'invalid parameter'});
        }
        if(!Bprovider){
          return res.json({success:false,unauthorized:true,msg:'Only Business Providers are allowed to visit this page.'});
        }
        else{
          business.findOne({bproviderid:Bprovider._id},(err,business)=>{
            if(err){
              return res.json({success:false,unauthorized:false,msg:'invalid parameters'});
            }
            if(!business){
              return res.json({success:false,unauthorized:false,msg:'Business not found'});
            }
            else{
              return res.json({success:true,unauthorized:false,result:business});
            }
          })
        }
      })

    },*/



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

},
editService: function(req,res){
  bprovider.findOne({uid:req.user._id},(err,Bprovider)=>{
    console.log(Bprovider);
  if(err) return res.json({success:false,msg:'Invalid Parameters'});
  if(!Bprovider) return res.json({success:false,msg:'Only the provider of this business can edit its services.'});
  var id = req.param('bid');
  var serid = req.param('serviceid');
  business.findOne({_id:id},(err,business)=>{
  if(err)
    return res.json({success:false,msg:'Invalid Parameters'});
  if(!business)
    return res.json({success:false,msg:'No Business found with that ID'});
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
  })
  business.save((err,result)=>{
  return res.json({success:true,msg:'Service edited successfully.',result:result});
  })


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
},
viewReviews:  function(req, res){
    bprovidersController.findBusinessById(req.params.id,function(err,Business){
  if(err)
            res.send("Database error " + err);
        else
            if(!Business)
                res.send("Business Not Found");
            else
                res.json({Reviews: Business.reviews});
    });
},
 viewServices: function(req,res){
  var bpid = req.user._id;
  bprovider.findOne({uid:bpid},(err,bprovider)=>{
    if(err) return res.json({success:false,msg:'invalid parameters'});
    if(!bprovider){
      return res.json({success:false,msg:'Only the provider of this business is allowed to view its services'});
    }
    else{
      var id = req.param('bid');
   business.findOne({_id:id},(err,business)=>{
    if(err){
      return res.json({success:false,msg:'Invalid Parameters'});
    }
    if(!business){
      return res.json({success:false,msg:'No Business Found'});
    }
    else{
      if(business.services.length == 0){
        return res.json({success:false,msg:'Business has no services'});
      }
      else{
        return res.json({success:true,services:business.services});
      }
    }
   });
    }
  })

 },
/////////////////////// 	vv 	DataBase Functions  vv	\\\\\\\\\\\\\\\\\\\\\\\\


}



module.exports = bprovidersController;
