const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const upload = require('../config/multer');
var bprovidersController = require('../controllers/bprovidersController');

router.get('/logout', passport.authenticate('jwt', {session:false}),
 bprovidersController.logout);

module.exports = router;
