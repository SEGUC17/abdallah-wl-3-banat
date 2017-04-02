var business = require('../models/business');
var bprovider = require('../models/bprovider');
var clients = require('../models/clients');
var admin = require('../models/admin');


var homepageController = {
  loadHomepage : function(req,res){

    res.render('index');
  }
}

module.exports = homepageController;
