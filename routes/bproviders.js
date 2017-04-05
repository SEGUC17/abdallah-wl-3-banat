const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const jwt = require('jsonwebtoken');
const passport = require('passport');


var bprovidersController = require('../controllers/bprovidersController');


router.get('/BusinessProvider/Profile/:username', passport.authenticate('jwt', {session:false}),
bprovidersController.loadProfile);

router.post('/BusinessProvider', function(req,res){
	res.redirect('/BusinessProvider/Profile');
});


router.post('/AddService',upload.single('file'),bprovidersController.AddService);

router.get('/DeleteService/:index',bprovidersController.DeleteService);


module.exports = router;