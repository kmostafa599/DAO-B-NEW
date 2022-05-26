const express = require('express');
const {
  create, getAll, get, addVote, approveBonus,
} = require('../controllers/bonus');

const router = express.Router();

router.post('/', create);
router.get('/', getAll);
router.get('/:id', get);
router.post('/vote', addVote);
router.post('/approve/:id', approveBonus);

module.exports = router;
