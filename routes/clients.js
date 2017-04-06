const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
var clientsController = require('../controllers/clientsController');


router.get('/Top',clientsController.viewTop);
router.get('/All',clientsController.viewAll);

module.exports = router;
