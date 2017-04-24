const admin = require('../models/admin');
const business = require('../models/business');
const client = require('../models/client');
const bprovider = require('../models/bprovider');
const user = require('../models/user');

var adminsController = {
  GetViewAdminProfile: function(req, res){
      admin.findOne({uid: req.user._id},(err,admin) => {
      if(err)
       return res.json({success:false,msg:'Invalid parameters.'});
      if(!admin)
        return res.json({success:false,msg:'No Admin Found.'});
      else
      return res.json({success:true,Admin:admin});
    });

  },


showProviders:function(req,res ){
         admin.findOne({uid: req.user._id},(err,admin) => {
          if(err) return res.json({success:false,msg:'invalid parameters'})
      if(!admin)
       return res.json({success:false,msg:'Only the admin is allowed to view the business providers'});
else{
  bprovider.find({},function(err,docs) {
      if(err) throw err;
      return res.json({success:true,providers:docs});
    });
}

    });

  },
  removeProvider: function(req,res ){
      var id = req.param('id');
      admin.findOne({uid:req.user._id},(err,Admin)=>{
        if(err) return res.json({success:false,msg:'invalid parameters1'});
        if(!Admin) return res.json({success:false,msg:'Only the admin is allowed to remove business providers'});
        bprovider.findOneAndRemove({_id:id},(err,provider)=>{
          if(err) return res.json({success:false,msg:'invalid parameters2'});
          if(!provider) return res.json({success:false,msg:'No provider Found'});
          business.findOneAndRemove({bproviderid:provider._id},(err,Business)=>{
            if(err) return res.json({success:false,msg:'invalid parameters3'});
            if(!business) return res.json({success:false,msg:'No Business Found'});
            admin.update({_id:Admin._id},{$pull:{applications:{businessName:Business.businessName}}},(err,result)=>{
              if(err) return res.json({success:false,msg:'invalid parameters4'});
              if(!result) return res.json({success:false,msg:'Admin not found'});
              })

            })
          user.findOneAndRemove({_id:provider.uid},(err,User)=>{
                if(err) return res.json({success:false,msg:'invalid parameters5'});
                if(!User) return res.json({success:false,msg:'User not found'});
                return res.json({success:true,msg:'Busienss Provider removed successfully'});
              })
          })
        })
      },


      /*admin.findOne({uid: req.user._id},(err,Admin) => {
      if(err) return res.json({success:false,msg:'invalid parameters'});
      if(!Admin)
       return res.json({success:false,msg:'Only the admin is allowed to remove a business provider'});
else{
            bprovider.findOneAndRemove({ _id : id },function (err, provider){
    if(err) return res.json({success:false,msg:'invalid parameters'});
    if(!provider){
      return res.json({success:false,msg:'No provider found'});
               }
      else{
        user.findOneAndRemove({_id:provider.uid},function (err){
              if(err) return res.json({success:false,msg:'invalid parameters'});
        })
        business.findOneAndRemove({bproviderid:provider._id},(err,Business)=>{
          if(err) return res.json({success:false,msg:'invalid parameters'});
          if(!Business) return res.json({success:false,msg:'No Business Found'});
          else{
            admin.update({uid:req.user._id},{$pull:{applications:{businessName:Business.businessName}}},function(err,result){
          if(err) return res.json({success:false,msg:'invalid parameters'});
          if(!result) return res.json({success:false,msg:'Admin not found'});
          else return res.json({success:true,msg:'Business Provider Removed successfully'});

        });
      }
        })
      }
      })
}

    });*/

//business.findOneAndUpdate({ bproviderid : id }, { isApproved : false } , {upsert:true},function(err, res){
//});

  banorUnbanClient:function(req,res){
      admin.findOne({uid:req.user._id},(err,admin)=>{
        if(err){
          return res.json({success:false,msg:'invalid parameters'});
        }
        if(!admin){
          return res.json({success:false,msg:'Only the admin is allowed to ban or unban clients'});
        }
        else{
                var id = req.param('clientid');
      var bool = req.param('boolean');
      if(bool == 0){
      client.findOneAndUpdate({_id:id},{$set:{isBanned:true}},{new:true},function(err,Client){
        if(err) {
          return res.json({success:false,msg:'Invalid Parameters'});
        }
        if(!Client){
          return res.json({success:false,msg:'No Client found with that ID'});
        }
        res.json({success:true,msg:'Client banned successfully',Client:Client});
      });
    }
    else if(bool == 1){
      client.findOneAndUpdate({_id:id},{$set:{isBanned:false}},{new:true},function(err,Client){
        if(err) {
          return res.json({success:false,msg:'Invalid Parameters'});
        }
        if(!Client){
          return res.json({success:false,msg:'No Client found with that ID'});
        }
        res.json({success:true,msg:'Client is unbanned successfully',Client:Client});
      });
    }
    else{
      res.json({succes:false,msg:'Invalid URL parameters.Use either 0 to ban or 1 to unban'});
    }
        }
      })

	 	},

  logout : function(req,res){

  	req.logout();
  	res.redirect('/');
},

  getAdminApplications: function(req,res){
     const query={uid: req.user._id}
     var idd = req.user._id;
    admin.findOne(query,function(err,Admin){
          if(err) return res.json({success:false,unauthorized:false,msg:'invalid parameters'});
          if(!Admin) return res.json({success:false,unauthorized:true,msg:'Only the admin is allowed to view applications.'});
          else{
          business.find({},function(err,results){
            results.forEach(function(result){
              if(!result.isDeclined && !result.isApproved && !(adminsController.containsName(''+result.businessName,Admin.applications)))
              Admin.applications.push({businessName:result.businessName});
            })
            Admin.save(function(err,savedAdmin){
              if(err) return res.json({success:false,unauthorized:false,msg:'Something went wrong'})
              if(savedAdmin.applications.length == 0){
              return res.json({success:false,unauthorized:false,msg:'No Available Applications'});

              }
              else
              return res.json({success:true,unauthorized:false,applications:savedAdmin.applications});
            })
          })
        }

   })

   },
   containsName:function(obj, list) {
      var i;
      for (i = 0; i < list.length; i++) {
          if (list[i].businessName === obj) {
              return true;
          }
      }

      return false;
  },

 acceptOrDecline: function(req,res){
   const query={uid: req.user._id}
   var idd = req.user._id;

  admin.findOne(query,function(err,Admin){
        if(err) return res.json({success:false, msg:'Invalid parameters'});
        if(!Admin) return res.json({success:false, msg:'Only the admin is allowed to accept or decline applications'});
        else{
   var businessName = req.param('businessName');
 var approval = false;
   if(req.param('approval')==1){
   approval = true;

 business.findOneAndUpdate({businessName:businessName},{$set:{isApproved:approval,isDeclined:false}},{new:true},function(err,bus){
   if(err) return res.json({success:false, msg:'Invalid parameters'});
   res.json(bus);
   admin.update({_id:Admin._id},{$pull:{applications:{businessName:businessName}}},function(err,result){
   });
 })
 }
 else if(req.param('approval')==0){
   business.findOneAndUpdate({businessName:businessName},{$set:{isApproved:approval,isDeclined:true}},{new:true},function(err,bus){
     if(err) return res.json({success:false, msg:'Invalid parameters'});
     res.json(bus);
     admin.update({_id:Admin._id},{$pull:{applications:{businessName:businessName}}},function(err,result){
     });
 })
 }
 else{
  res.json({success:false,msg:'Invalid URL parameters.Use either 0 to decline or 1 to approve.'});
 }
}

 })
 },

 viewClients: function(req,res){
  admin.findOne({uid:req.user._id},(err,Admin)=>{
    if(err) return res.json({success:false,msg:'invalid parameters'});
    if(!Admin) return res.json({success:false,msg:'Only the admin is allowed to view clients.'});
    else{

    client.find({},(err,result)=>{
      if(err){
        return res.json({success:false,msg:'invalid parameters'});
      }
      if(result.length == 0){
        return res.json({success:false,msg:'No Clients Available!'});
      }
      else{
        return res.json({success:true,result:result});
      }
    });
  }
    });
 }


 }


module.exports = adminsController;
