const express = require('express');
const router = express.Router();
var bprovidersController = require('../controllers/bprovidersController');
const passport = require('passport');
//passport.authenticate('jwt', {session:false}),
router.get('/MyProfile', 
bprovidersController.loadProfile);

router.post('/Profile', function(req,res){
	res.redirect('/MyProfile');
});


module.exports = router;
