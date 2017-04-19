const admin = require('../models/admin');
const business = require('../models/business');
const client = require('../models/client');
const bprovier = require('../models/bprovider');

var adminsController = {
  GetViewAdminProfile: function(req, res){
      admin.findOne({uid: req.user._id},(err,admin) => {
      if(err)
       res.send('No such admin found.');

      res.json('AdminProfile : ' + admin);
    });

  },
  removeProvider: function(req,res ){

      var id = req.param('id');
business.findOneAndUpdate({ bproviderid : id }, { isApproved : false } , {upsert:true},function(err, res){
});

},
  banClient:function(req,res){
	 		var id = req.param('clientid');
	 		client.findOneAndUpdate({_id:id},{$set:{isBanned:true}},{new:true},function(err,Client){
	 			if(err) {
					return res.json({msg:'Invalid Parameters'});
	 			}
	 			if(!Client){
	 				return res.json({msg:'No Client found with that ID'});
	 			}
	 			res.send(Client);
	 		})
	 	},

  logout : function(req,res){

  	req.logout();
  	res.redirect('/');
},
  getAdminApplications: function(req,res){
   const query={uid: req.user._id}
   var idd = req.user._id;

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
 });
 }


 }


module.exports = adminsController;
