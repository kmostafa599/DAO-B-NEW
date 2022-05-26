const express = require('express')
const router = express.Router()

const { getUsers, setUser,  updateUser, deleteUser, addVote, addWallet,setWallet, addBonus, setApproved, setDeclined } = require('../controllers/userControllers')


router.get('/',getUsers) //get
router.post('/create',setUser) //set
router.post('/bonus/add/:id', addBonus)
router.put('/bonus/approve/:id', setApproved)
router.put('/bonus/decline/:id', setDeclined)

router.put('/update/:id',updateUser)//update
router.put('/vote/:id',addVote)
router.put('/wallet/add/:id', addWallet) // add wallet
router.put('/wallet/set/:id', setWallet) // set wallet
router.delete('/:id',deleteUser)//delete


module.exports = router