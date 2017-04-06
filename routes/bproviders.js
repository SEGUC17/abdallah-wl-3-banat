const express = require('express');
const router = express.Router();
var bprovidersController = require('../controllers/bprovidersController');
var passport = require('passport');
var upload = require('../config/multer');





router.post('/AddService',upload.single('file'),passport.authenticate('jwt',{session:false}),bprovidersController.AddService);
router.get('/DeleteService',passport.authenticate('jwt',{session:false}),bprovidersController.DeleteService);


module.exports = router;
