const express = require('express');
const router = express.Router();
const passport=require('passport');
const jwt=require('jsonwebtoken');

var adminsController = require('../controllers/adminsController');

router.get('/ban/:clientid',passport.authenticate('jwt',{session:false}),
	adminsController.banClient);
router.get('/logout', passport.authenticate('jwt', {session:false}),
 adminsController.logout );
router.get('/getapps',passport.authenticate('jwt',{session:false}),adminsController.getAdminApplications);
router.post('/approve/:id/:approval',passport.authenticate('jwt',{session:false}),adminsController.acceptOrDecline);
router.get('/removebprovider',passport.authenticate('jwt',{session:false}),adminsController.removeProvider);

module.exports = router;
