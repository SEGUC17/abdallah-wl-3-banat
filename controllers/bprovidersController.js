const business = require('../models/business');
const bprovider = require('../models/bprovider');
const user = require('../models/user');

var crypto = require('crypto');




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
           bproviders.findOneAndUpdate({uid:req.user._id},{$set:{email:req.body.email}},{new:true},function(err,res){
  if(err){
    return res.json({susccess:false,msg:'Invalid paramaters'});
  }else{
      
  }      
    })
    
       }
           if(req.body.bName){
             business.findOneAndUpdate({bproviderid:req.user._id},{$set:{businessName:req.body.bName}},{new:true},function(err,res){
  if(err){
    
return res.json({susccess:false,msg:'Invalid paramaters'});
  }else{
     
  }
        
    })
   
           }
               if(req.body.location){
                    business.findOneAndUpdate({bproviderid:req.user._id},{$set:{location:req.body.location}},{new:true},function(err,res){
  if(err){
return res.json({susccess:false,msg:'Invalid paramaters'});
  }else{
     
  }
        
    })

               }
                   if(req.body.phone){
                       
                       business.findOneAndUpdate({bproviderid:req.user._id},{$set:{phone:req.body.phone}},{new:true},function(err,res){
  if(err){
    return  res.json({success:false,msg:'Invalid parameters'})
  }else{
     
  }
        
    })
 
                   }
                     if(req.body.info){
 business.findOneAndUpdate({bproviderid:req.user._id},{$set:{info:req.body.info}},{new:true},function(err,res){
  if(err){
return res.json({susccess:false,msg:'Invalid paramaters'});
  }else{
     
  }
        
    })
                         
                     }
               
                  
},
    editPP:function(req,res){
          if(req.file){
                             var img = req.file.filename;
                             
      business.findOneAndUpdate({bproviderid:req.user._id},{$set:{profilepicture:img}},{new:true},function(err,res){

  if(err){
     
return res.json({susccess:false,msg:'Invalid paramaters'});
  }else{
 
     
  }
        
    })                   
                        }
    }

}

module.exports = bprovidersController;
