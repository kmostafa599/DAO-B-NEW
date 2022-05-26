const express = require('express')
const router = express.Router()

const { getWallet } = require('../controllers/walletControllers')


router.get('/',getWallet) //get wallet



module.exports = router