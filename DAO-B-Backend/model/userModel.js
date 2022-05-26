const mongoose = require('mongoose')

//wallet schema
const walletSchema = mongoose.Schema({
    _id:String,
    name:String,
    walletNumber:String,
})
//UserBonus schema
const voteSchema = mongoose.Schema({
    vote:Number, //1 | 0
    user:String,
})
const userBonusSchema = mongoose.Schema({
    bonus:String,
    wallet:walletSchema,
    approved:Boolean,
    declined:Boolean,

})

const userSchema = mongoose.Schema({
    name: {
        type:String,
        required:[true,'Please add a name'],
    },
    email: {
        type: String,
        required:[true,'Please add an email'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Please add a password'],
    },
    business: String,
    image: String,
    position: String,
    team: String,
    phone: String,
    city: String,
    address: String,
    userBonus:{
        type:userBonusSchema
    },
    bonusHistory:[userBonusSchema],
    votes:[voteSchema],
    wallet:String,
    wallets:[walletSchema]
},
{
    timestamps: true,
}
)

module.exports = mongoose.model('User',userSchema)