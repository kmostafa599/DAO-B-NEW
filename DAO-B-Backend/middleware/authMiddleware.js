const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const User = require('../model/userModel')

const protect = asyncHandler(async (req, res, next) => {
  const token = req.header('x-auth-token')
  if (!token) {
    return res.status(401)
  }
    try {
      // Get token from header
        console.log(token)
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // Get user from the token
      req.user = await User.findById(decoded.id).select('-password')

      next()
    } catch (error) {
      console.log(error)
      res.status(401)
      throw new Error('Not authorized')
    }
  

  
})

module.exports = { protect }