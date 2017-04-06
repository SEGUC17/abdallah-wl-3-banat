const express = require('express');
const router = express.Router();
var clientsController = require('../controllers/clientsController');

router.get('/ViewBusinesses/:id', clientsController.loadBusiness );

module.exports = router;
