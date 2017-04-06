const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
var bprovidersController = require('../controllers/bprovidersController');

router.get('/myQuestions', passport.authenticate('jwt', {session: false}), bprovidersController.viewQuestions);

module.exports = router;
