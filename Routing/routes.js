var express = require('express');
var router = express.Router();
var homepageController = require('../controllers/homepageController');
var upload = require('../config/multer');




router.get('/', homepageController.loadHomepage);


//////////////////////////////////////////////////////////////////////////
///////////////////         Youssef Part                /////////////////////
//////////////////////////////////////////////////////////////////////////
const jwt = require('jsonwebtoken');
const passport = require('passport');

var businessController = require('../controllers/businessController');
var clientController = require('../controllers/clientController');
var guestController = require('../controllers/guestController');

//Guest
router.get('/Businesses/:id', guestController.loadBusiness);

//Client
router.get('/Client/Businesses/:id', clientController.loadBusiness );

//Business provider
router.get('/BusinessProvider/Profile/:username', passport.authenticate('jwt', {session:false}),
businessController.loadProfile);

router.post('/BusinessProvider', function(req,res){
	res.redirect('/BusinessProvider/Profile');
});
///////////////////////////////////////////////////////////////////////////////
/////////////         Amr Part                /////////////////////////////////
//////////////////////////////////////////////////////////////////////////////


router.post('/AddService',upload.single('file'),businessController.AddService);

router.get('/DeleteService/:index',businessController.DeleteService);

module.exports = router;
