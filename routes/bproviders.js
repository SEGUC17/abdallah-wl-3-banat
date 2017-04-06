const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer({dest: './public/uploads'});
var crypto = require('crypto');

var passport = require('passport');
var jwt = require('jsonwebtoken');

var bprovidersController = require('../controllers/bprovidersController');

router.post('/editBprofilePicture',passport.authenticate('jwt',{session:false}),upload.single('file'),bprovidersController.editPP);
router.post('/editBprofile',passport.authenticate('jwt',{session:false}),bprovidersController.editP);




module.exports = router;
