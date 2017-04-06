const business = require('../models/business');
const bprovider = require('../models/bprovider');

var bprovidersController = {
  logout : function(req,res){
  				req.logout();
  				res.redirect('/'); }
}

module.exports = bprovidersController;
