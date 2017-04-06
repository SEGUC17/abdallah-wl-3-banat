const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
var multer = require('multer');
var upload = multer({dest:'uploads/'});
var bprovidersController = require('../controllers/bprovidersController');

router.post('/editservices/:bid/:serviceid',
passport.authenticate('jwt',{session:false}),
	bprovidersController.editService);

router.post('/editpicture/:bid/:serviceid',upload.single('file'),
passport.authenticate('jwt',{session:false}),
	bprovidersController.editPicture);

module.exports = router;
