const express = require('express');
const router = express.Router();
var clientsController = require('../controllers/clientsController');

var passport = require('passport');
var jwt = require('jsonwebtoken');


router.post('/rate',passport.authenticate('jwt',{session:false}),clientsController.rate);


module.exports = router;
