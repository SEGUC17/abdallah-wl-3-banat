const admin = require('../models/admin');
const business = require('../models/business');

var adminsController = {
  
  logout : function(req,res){

  	req.logout();
  	res.redirect('/');
}

module.exports = adminsController;
