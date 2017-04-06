var user = require('../models/user');
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

}
}


module.exports = guestsController;