const express = require('express');
const router = express.Router();
var bprovidersController = require('../controllers/bprovidersController');


router.get('/ViewReviews/:id',bprovidersController.viewReviews);

module.exports = router;



