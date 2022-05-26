const mongoose = require('mongoose')

//wallet schema
const walletSchema = mongoose.Schema({
    _id:String,
    name:String,
    walletNumber:String,
    funds:String,
    addEvery:String,
    recurring:Boolean,
    deposits:String,
    payouts:String
})


module.exports = mongoose.model('MainWallet',walletSchema)