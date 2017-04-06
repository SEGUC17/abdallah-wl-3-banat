const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
var guestsController = require('../controllers/guestsController');

router.get('/',function(req,res){
  res.send('HOMEPAGE');
})

router.post('/login',guestsController.login);
router.post('/register',guestsController.register);


module.exports = router;
