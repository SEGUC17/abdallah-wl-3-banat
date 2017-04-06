const business = require('../models/business');
const bprovider = require('../models/bprovider');
const client = require('../models/client');
const user = require('../models/user');


var bprovidersController = {


answerQuestion: function(req,res){
	var id = req.body.uid;
    var newAnswer = req.body.answer;
    var questionid = req.param('id');
    bprovider.findOne({uid:id},function(err,provider){
        if(err) throw err;
        if(!provider)
        return res.json({msg:'provider not found'});
     var idd = provider._id;
     business.findOne({bproviderid:idd},function(err,result){
         if(err) throw err;
         if(!result) return res.json({msg:'business not found'});
         result.questions.forEach(function(question){
             if(question._id == questionid)
             question['answer'] = newAnswer;
         })
         result.save(function(err,result){
         })
         
     })
    })

}
	

}
	





module.exports = bprovidersController;
