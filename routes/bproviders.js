const express = require('express');
const router = express.Router();
var bprovidersController = require('../controllers/bprovidersController');


router.get('/Top',bprovidersController.viewTop);
router.get('/All',bprovidersController.viewAll);



module.exports = router;
