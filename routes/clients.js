const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
var clientsController = require('../controllers/clientsController');

router.get('/Profile/:username', passport.authenticate('jwt', {session:false}),
clientsController.loadProfile);


router.get('/logout', passport.authenticate('jwt', {session:false}),
clientsController.logout);

router.get('/Top',clientsController.viewTop);
router.get('/All',clientsController.viewAll);

module.exports = router;
