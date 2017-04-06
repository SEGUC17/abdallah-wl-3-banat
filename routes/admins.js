const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');

var adminsController = require('../controllers/adminsController');

router.get('/removebprovider',adminsController.removeProvider);


module.exports = router;
