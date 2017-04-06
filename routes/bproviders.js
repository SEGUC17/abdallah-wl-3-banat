const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
var bprovidersController = require('../controllers/bprovidersController');
var guestsController = require('../controllers/guestsController');

router.post('/searchBusiness',guestsController.searchBusiness);

module.exports = router;
