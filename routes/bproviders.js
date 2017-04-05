const express = require('express');
const router = express.Router();
const upload = require('../config/multer');
const jwt = require('jsonwebtoken');
const passport = require('passport');


var bprovidersController = require('../controllers/bprovidersController');




module.exports = router;