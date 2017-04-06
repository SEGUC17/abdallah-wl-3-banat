const express = require('express');
const router = express.Router();
var clientsController = require('../controllers/clientsController');


router.get('/Top',clientsController.viewTop);
router.get('/All',clientsController.viewAll);

module.exports = router;
