const express = require('express');
const { ping } = require('../controllers/health');

const router = express.Router();
router.get('/ping', ping);

module.exports = router;
