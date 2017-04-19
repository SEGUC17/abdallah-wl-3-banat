const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
var clientsController = require('../controllers/clientsController');

router.get('/Profile/:username', passport.authenticate('jwt', {session:false}),
clientsController.loadProfile);
router.get('/ViewBusinesses/:id', clientsController.loadBusiness );
router.post('/Questions', passport.authenticate('jwt', {session: false}), clientsController.askQuestion);

router.post('/EditProfile',passport.authenticate('jwt',{session:false}),clientsController.editUser);
router.post('/editPassword',passport.authenticate('jwt',{session:false}),clientsController.editUserPassword);

router.get('/logout', passport.authenticate('jwt', {session:false}),
clientsController.logout);
router.post('/rate',passport.authenticate('jwt',{session:false}),clientsController.rate);

router.get('/ViewReviews/:id',clientsController.viewReviews);
router.post('/PostReview/:id',passport.authenticate('jwt',{session:false}),clientsController.postReview);

router.get('/Top',clientsController.viewTop);
router.get('/All',clientsController.viewAll);

module.exports = router;
