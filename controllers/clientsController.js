const client = require('../models/client');
const business = require('../models/business');

var clientsController = {
  askQuestion: function(req,res){
    var question = req.body.question;
    var bid = req.param('businessid');
    business.update({_id: bid}, { $push: { questions: {question:question, answer:""} } }, (err,business) => {
      if(err){
        res.json({success: false, msg: "Business not found or invaild question format entered"});
        throw err;
      }
      res.send(business);
    });
  }
}

module.exports = clientsController;
