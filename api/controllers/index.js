const express = require('express');
const router = express.Router();


// Load each controller

const appConfigController = require('./appConfig.js');
const authController = require('./auth');
const userController = require('./user');
const itemController = require('./item');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller

router.use('/application-configuration', appConfigController);
router.use('/auth', authController);
router.use('/user', userController);
router.use('/item', itemController);


module.exports = router;