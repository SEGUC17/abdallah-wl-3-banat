const business = require('../models/business');
const bprovider = require('../models/bprovider');

var bprovidersController = {
  viewQuestions: function(req, res){
    var bid = req.param('businessid');
 	 business.findOne({_id: bid}, (err, Business) => {
      if(err) return res.json({msg: "Invalid parameter"});
      if(!Business) return res.json({msg: "Business not found"});
      res.send(Business.questions);
    });
  }
}

module.exports = bprovidersController;
