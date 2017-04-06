const client = require('../models/client');
const business = require('../models/business');

var clientsController = {
  askQuestion: function(req,res){
    var question = req.body.question;
    var bid = req.param('businessid');
    business.update({_id: bid}, { $push: { questions: {question:question, answer:""} } }, (err, business) => {
      if(err) return res.json({msg: "Invalid parameters"});
      if(!business) return res.json({msg: "Business not found"});
      res.send(business);
    });
  }
}

module.exports = clientsController;
