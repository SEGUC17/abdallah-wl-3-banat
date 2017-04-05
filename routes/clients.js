const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const upload = require('../config/multer');

var clientsController = require('../controllers/clientsController');



module.exports = router;