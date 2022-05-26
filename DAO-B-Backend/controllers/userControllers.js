const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')


const getUsers = asyncHandler(async (req, res) => {
    const users = await User.find() //find all users
    console.log(users)
    res.status(200).json(users)
})

const setUser = asyncHandler(async (req, res) => {
    if (!req.body) { // if no request body sent 
        res.status(400)
        throw new Error('Please add user data')
    }
    const {
        firstName,
        lastName,
        email,
        business,
        image,
        position,
        team,
        phone,
        city,
        address,
        password,
    } = req.body
    const user = await User.create({ //create the user
        name: firstName,
        lastName,
        email,
        business,
        image,
        position,
        team,
        phone,
        city,
        address,
        password
    })

    res.status(201).json(user)
})

const updateUser = async (req, res) => {
    const user = await User.findById(req.params.id)
    if (!user) {// check if the user exists
        res.status(400)
        throw new Error('User not found')
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id,
        req.body,
        {
            new: true
        }
    ,)
    res.status(200).json(updatedUser)
}
const addVote = asyncHandler(async (req, res) => {
    console.log(req.params.id)
    const user = await User.findById(req.params.id)
    if (!user) {
        res.status(400)
        throw new Error('User not found')
    }
    console.log(req.body.vote)
    const updatedUser = await User.findByIdAndUpdate({ _id: req.params.id },
        {
            $push: {
                votes: req.body
            }
        }
    )
    const users = await User.find()
    res.status(200).json(users)
})
const addBonus = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    console.log(req.body)
    if (!user) {
        res.status(400)
        throw new Error('User not found')
    }
    const bonus = await User.find({ bonus: req.body.bonus })
    if (bonus) {
        return res.status(400).json({ msg: "You've already added a bonus" })
    }
    const updateUser = await User.findByIdAndUpdate({ _id: req.params.id },
        {
            userBonus: req.body
        }
    )
    const addToHistory = await User.findByIdAndUpdate({ _id: req.params.id },
        {
            $push: {
                bonusHistory: req.body
            }
        }
    )
    const users = await User.find()
    res.status(200).json(users)
})

const setApproved = asyncHandler(async (req, res) => {
    const user = await User.find({ _id: req.params.id })
    console.log(req.body.status)
    if (!user) {
        return res.status(400).json({ msg: 'User not found' })
    }
    const setApproval = await User.findByIdAndUpdate({ _id: req.params.id }, {
        'userBonus.approved': req.body.status.approved
    })
    const users = await User.find()
    res.status(200).json(users)
})

const setDeclined = asyncHandler(async (req, res) => {
    const user = await User.find({ _id: req.params.id })
    console.log(req.body.status)
    if (!user) {
        return res.status(400).json({ msg: 'User not found' })
    }
    const setApproval = await User.findByIdAndUpdate({ _id: req.params.id }, {
        'userBonus.declined': req.body.status.declined
    })
    const users = await User.find()
    res.status(200).json(users)
})

const addWallet = asyncHandler(async (req, res) => {
    // const {userId} = req.params 
    console.log(req.params.id)
    console.log(req.body)
    const user = await User.findById(req.params.id)
    console.log("here")
    if (!user) {
        res.status(400)
        throw new Error('User not found')
    }
    const wallet = await User.find({ walletNumber: req.body.wallet.walletNumber })
    if (wallet) {
        return res.status(400).json({ msg: "Wallet already exists" })
    }
    const updateWallet = await User.findByIdAndUpdate({ _id: req.params.id },
        {

            wallet: req.body.wallet._id

        })
    const addWallet = await User.findByIdAndUpdate({ _id: req.params.id },
        {

            $push: {
                wallets: { name: req.body.name, walletNumber: req.body.wallet.number, balance: req.body.wallet.balance, _id: req.body.wallet._id }
            },

        }
    )
    const users = await User.find()
    res.status(200).json(users)
})
const setWallet = asyncHandler(async (req, res) => {
    // const {userId} = req.params 
    console.log(req.params.id)
    const user = await User.findById(req.params.id)
    console.log("here")
    if (!user) {
        res.status(400)
        throw new Error('User not found')
    }
    const updateUser = await User.findByIdAndUpdate({ _id: req.params.id },
        req.body,
        {
            new: true
        }

    )
    const users = await User.find()
    res.status(200).json(users)
})

const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.params.id
    const user = await User.findById(id)
    if (!user) {// check if the user exists
        res.status(400)
        throw new Error('User not found')
    }
    await user.remove()
    res.status(200).json(id)
})

module.exports = {
    getUsers,
    setUser,
    updateUser,
    addVote,
    addBonus,
    setApproved,
    setDeclined,
    addWallet,
    setWallet,
    deleteUser,
}
