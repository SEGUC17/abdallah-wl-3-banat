const business = require('../models/business');
const bprovider = require('../models/bprovider');
const user = require('../models/user');





var bprovidersController = {

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
    }

}

module.exports = bprovidersController;
