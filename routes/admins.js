const express = require('express');
const router = express.Router();
const passport=require('passport');
const jwt=require('jsonwebtoken');

var adminsController = require('../controllers/adminsController');

router.get('/getapps',passport.authenticate('jwt',{session:false}),adminsController.getAdminApplications);
router.post('/approve/:id/:approval',adminsController.acceptOrDecline);


module.exports = router;
