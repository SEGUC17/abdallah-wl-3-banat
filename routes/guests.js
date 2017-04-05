const express = require('express');
const router = express.Router();
var guestsController = require('../controllers/guestsController');

router.get('/',function(req,res){
  res.send('HOMEPAGE');
})


module.exports = router;