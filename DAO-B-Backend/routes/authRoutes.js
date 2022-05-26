const express = require('express')

const router = express.Router()
const { registerUser, loginUser, logoutUser, getMe } = require('../controllers/authControllers')
const { protect } = require('../middleware/authMiddleware')


// router.get('/',getUsers)

router.post('/register',registerUser)
router.post('/login',loginUser)
router.post('/logout', logoutUser)
router.get('/me',protect,getMe)


// router.put('/:id',updateUser)


// router.delete('/:id',deleteUser)


module.exports = router