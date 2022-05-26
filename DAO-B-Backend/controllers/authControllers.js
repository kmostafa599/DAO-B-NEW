const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')






const registerUser = asyncHandler(async (req, res) => {
    const {
        name,
        email,
        password,
    } = req.body
    console.log(req.body)
    if (!name || !email || !password) {
         return res.status(400).json({msg:'Please add all fields'})
        // throw new Error('Please add all fields')
    }
    //check if user existss
    const userExists = await User.findOne({ email })
    if (userExists) {
        return res.status(400).json({msg:'User already exists'})
        // throw new Error()
    }
    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    })
    if (user) {
        return res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        return res.status(400).json({msg:'Invalid user data'})
        // throw new Error("Invalid user data")
    }

})

const loginUser = asyncHandler(async (req, res) => {
    const {
        email,
        password
    } = req.body
    //check user with email
    const user = await User.findOne({ email })
    //check user with email and password
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json(
            {
                _id: user.id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id)

            }
        )


    } else {
        res.status(400)
        throw new Error("Invalid credentials")
    }
    // res.json({ message: "Login" })
})

const logoutUser = asyncHandler(async (req, res) => {
    try{
        res.status(200).json(req.user)
    } catch(error){
        console.log(error)
    }
})
const getMe = asyncHandler(async (req, res) => {
    try {
        res.status(200).json(req.user)
    } catch (error) {
        console.log(error)
    }

    // res.json({ message: "me" })
})

const generateToken = (id) => {
    return jwt.sign({ id },
        process.env.JWT_SECRET,
        {
            expiresIn: '30d'
        },
    )
}
module.exports = {
    registerUser,
    loginUser,
    logoutUser,
    getMe,
}
