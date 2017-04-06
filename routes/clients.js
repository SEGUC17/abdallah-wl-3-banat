const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
var clientsController = require('../controllers/clientsController');

router.post('/Questions', passport.authenticate('jwt', {session: false}), clientsController.askQuestion);

module.exports = router;
