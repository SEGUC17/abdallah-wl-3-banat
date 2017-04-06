const business = require('../models/business');
const bprovider = require('../models/bprovider');

var bprovidersController = {
  viewQuestions: function(req, res){
    var bid = req.param('businessid');
 	 business.findOne({_id: bid}, (err, Business) => {
      if(err) {
        res.json({success: false, msg: "Business not found"});
        throw err;
      }
      res.send(Business.questions);
    });
  }
}

module.exports = bprovidersController;
