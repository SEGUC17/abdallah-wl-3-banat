const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const upload = require('../config/multer');

var clientsController = require('../controllers/clientsController');

router.get('/Client/Businesses/:id',passport.authenticate('jwt', {session:false}),
clientsController.loadBusiness );

module.exports = router;