const admin = require('../models/admin');

var adminsController = {

  getAdminApplications: function(req,res){  
   const query={uid: req.user._id}
   admin.findOne(query,function(err,admin){
  			if(err) return res.json({success:false, msg:'Invalid parameters'});
 res.json(admin.applications)
 })

 },

 acceptOrDecline: function(req,res){
   var id = req.param('id');
 var approval = false;
   if(req.param('approval')==1){
   approval = true;
   }
 business.findOneAndUpdate({_id:id},{$set:{isApproved:approval}},{new:true},function(err,bus){
   if(err) return res.json({success:false, msg:'Invalid parameters'});
   res.json(bus);
 })
 }


 }





module.exports = adminsController;
