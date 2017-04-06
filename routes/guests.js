const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
var guestsController = require('../controllers/guestsController');

router.get('/',function(req,res){
  res.send('HOMEPAGE');
})

router.get('/ViewBusinesses/:id', guestsController.loadBusiness);
router.get('/Top',guestsController.viewTop);
router.get('/All',guestsController.viewAll);
router.get('/ViewReviews/:id',guestsController.viewReviews);
router.post('/login',guestsController.login);
router.post('/register/:type',guestsController.register);
router.post('/searchBusiness',guestsController.searchBusiness);


module.exports = router;
