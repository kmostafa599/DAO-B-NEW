const express = require('express');
const user = require('./user');
const health = require('./health');
const bonus = require('./bonus');

const router = express.Router();
router.use('/users', user);
router.use('/', health);
router.use('/bonus', bonus);

module.exports = router;
