const business = require('../models/business');
const bprovider = require('../models/bprovider');


var bprovidersController = {
  loadProfile : function(req,res){
    bprovidersController.getBusProvider(req.user._id,function(err,Provider){
    if(err)
              res.json("There's an internal mongoose error " + err);
          else
              if(!Provider)
                  res.json("This profile couldnt be found or may have been deleted ");
              else
            getBusiness(Provider.uid,function(err1, Business){
              if(err1)
                          res.send("There's an internal mongoose error " + err1);
                      else
                          if(!Business)
                              res.send("This profile couldnt be found or may have been deleted ");
                          else
                      res.json({My_Info : Provider , Business_info : Business});
            });
    });
  },
   viewQuestions: function(req, res){
  var bid = req.param('businessid');
 business.findOne({_id: bid}, (err, Business) => {
    if(err) return res.json({msg: "Invalid parameter"});
    if(!Business) return res.json({msg: "Business not found"});
    res.send(Business.questions);
  });
},

///////////////////////////////////        Database Functions 		//////////////////////////////////

getBusProvider : function(id,callback){
    var query = {uid: id};
    user.findOne(query, callback);
},

getBusiness : function(id,callback){
    var query = {bproviderid: id};
    business.findOne(query, callback);
},
  editP:function(req,res){

  if (req.body.username){
      user.findOneAndUpdate({_id:req.user._id},{$set:{username:req.body.username}},{new:true},function(err,res){
    if(err){
  return res.json({susccess:false,msg:'Invalid paramaters'});
    }else{
          }
      })

  }
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

                   var n = req.body.location;
                 bprovider.findOne({uid:req.user._id},function(req,res){
                   if(res){
                 business.findOneAndUpdate({bproviderid:res._id},{$set:{location:n}},{new:true},function(err,res){
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

                       var n = req.body.phone;
                       bprovider.findOne({uid:req.user._id},function(req,res){
                         if(res){
                         business.findOneAndUpdate({bproviderid:res._id},{$set:{phone:n}},{new:true},function(err,res){
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
                   var n = req.body.info;
                   bprovider.findOne({uid:req.user._id},function(req,res){
                    if(res){
   business.findOneAndUpdate({bproviderid:res._id},{$set:{info:n}},{new:true},function(err,res){
    if(err){
  return x.json({susccess:false,msg:'Invalid paramaters'});
    }else{

    }

      })
                    }
                   })
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
  var print = res;
  var uid=req.user._id;
  bprovider.findOne({uid:uid},function(err,result){

  bproviderid=result._id;

  business.AddServiceToBusiness(bproviderid,service,function(err,Business){
if(err) res.send('You do not have business');
  else{Business.save(function(err){});
      }
  print.json(Business);

   });
  });
}
},

    // DELETING SERVICE

    DeleteService : function(req,res,next){
    var uid = req.user._id;
    var index=req.param('index');

    bprovider.findOne({uid:uid},function(err,response){
    var bprovider= response._id;
    FindBusinessById(bproviderid,function(err,res){
    if(err) print.json('you do not have business');
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
             });
        });
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

},
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

/////////////////////// 	vv 	DataBase Functions  vv	\\\\\\\\\\\\\\\\\\\\\\\\

findBusinessById: function(id,callback){
    var query = {bproviderid: id};
    business.findOne(query,callback);
}
}



module.exports = bprovidersController;
