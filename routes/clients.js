const express = require('express');
const router = express.Router();
var clientsController = require('../controllers/clientsController');

router.get('/ViewReviews/:id', clientsController.viewReviews);
router.post('/PostReview/:id', passport.authenticate('jwt',{session:false}),
clientsController.postReview);

module.exports = router;
