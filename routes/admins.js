const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
var adminsController = require('../controllers/adminsController');

router.get('/logout', passport.authenticate('jwt', {session:false}),
 adminsController.logout );

module.exports = router;
