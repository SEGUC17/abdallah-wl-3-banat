const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
var bprovidersController = require('../controllers/bprovidersController');
var guestsController = require('../controllers/guestsController');



router.get('/Top',bprovidersController.viewTop);
router.get('/All',bprovidersController.viewAll);
router.post('/searchBusiness',guestsController.searchBusiness);


module.exports = router;
