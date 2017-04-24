const express = require('express');
const router = express.Router();
const passport=require('passport');
const jwt=require('jsonwebtoken');

var adminsController = require('../controllers/adminsController');

router.get('/ban/:clientid/:boolean',passport.authenticate('jwt',{session:false}),
	adminsController.banorUnbanClient);
router.get('/logout', passport.authenticate('jwt', {session:false}),
 adminsController.logout );
router.get('/getapps',passport.authenticate('jwt',{session:false}),adminsController.getAdminApplications);
router.get('/approve/:businessName/:approval',passport.authenticate('jwt',{session:false}),adminsController.acceptOrDecline);
router.get('/removebprovider/:id',passport.authenticate('jwt',{session:false}),adminsController.removeProvider);
router.get('/viewclients',passport.authenticate('jwt',{session:false}),adminsController.viewClients);
router.get('/showbp',passport.authenticate('jwt',{session:false}) ,adminsController.showProviders);

module.exports = router;
