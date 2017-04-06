const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
var clientsController = require('../controllers/clientsController');

//router.get('/EditProfile',clientsController.getEditprofile);
router.post('/EditProfile',passport.authenticate('jwt',{session:false}),clientsController.editUser);
router.post('/editPassword',passport.authenticate('jwt',{session:false}),clientsController.editUserPassword);


module.exports = router;
