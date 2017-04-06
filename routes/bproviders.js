const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
var bprovidersController = require('../controllers/bprovidersController');
var upload = require('../config/multer');
var guestsController = require('../controllers/guestsController');




router.post('/AddService',upload.single('file'),passport.authenticate('jwt',{session:false}),bprovidersController.AddService);
router.get('/DeleteService',passport.authenticate('jwt',{session:false}),bprovidersController.DeleteService);

router.get('/Top',bprovidersController.viewTop);
router.get('/All',bprovidersController.viewAll);
router.post('/searchBusiness',guestsController.searchBusiness);

router.get('/logout', passport.authenticate('jwt', {session:false}),
 bprovidersController.logout);

module.exports = router;
