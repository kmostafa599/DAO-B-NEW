const asyncHandler = require('express-async-handler')
const MainWallet = require('../model/mainWalletModel')
// const User = require('../model/userModel')


const getWallet = asyncHandler(async (req, res) => {
    const wallet = await MainWallet.find() // find wallets
    console.log(wallet)
    res.status(200).json(wallet)
})


module.exports = {
    getWallet,
}
