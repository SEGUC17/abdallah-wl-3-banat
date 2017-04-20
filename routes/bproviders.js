const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
var bprovidersController = require('../controllers/bprovidersController');
var upload = require('../config/multer');
var multer = require('multer');
var guestsController = require('../controllers/guestsController');


router.get('/MyProfile',passport.authenticate('jwt',{session:false}),bprovidersController.loadProfile);


router.get('/myQuestions', passport.authenticate('jwt', {session: false}), bprovidersController.viewQuestions);

router.post('/PostAnnouncement', passport.authenticate('jwt', {session: false}), bprovidersController.postAnnouncement);
router.post('/DeleteAnnouncement/:index',passport.authenticate('jwt', {session: false}),bprovidersController.deleteAnnouncement);

router.get('/ViewReviews/:id',bprovidersController.viewReviews);
router.post('/AddService',upload.single('file'),passport.authenticate('jwt',{session:false}),bprovidersController.AddService);
router.get('/DeleteService',passport.authenticate('jwt',{session:false}),bprovidersController.DeleteService);

router.get('/Top',bprovidersController.viewTop);
router.get('/All',bprovidersController.viewAll);
router.post('/searchBusiness',guestsController.searchBusiness);
router.post('/editservices/:bid/:serviceid',
passport.authenticate('jwt',{session:false}),
	bprovidersController.editService);
router.post('/answerQuestion',passport.authenticate('jwt',{session:false}),bprovidersController.answerQuestion);
router.post('/editpicture/:bid/:serviceid',upload.single('file'),
passport.authenticate('jwt',{session:false}),
	bprovidersController.editPicture);
router.get('/logout', passport.authenticate('jwt', {session:false}),
 bprovidersController.logout);
 router.post('/editBprofilePicture',passport.authenticate('jwt',{session:false}),upload.single('file'),bprovidersController.editPP);
 router.post('/editBprofile',passport.authenticate('jwt',{session:false}),bprovidersController.editP);

module.exports = router;
