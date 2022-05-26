const mongoose = require('mongoose')

//wallet schema
const teamSchema = mongoose.Schema({
    name:String,
    activeProposals:String,
    Employees:Number,
    totalFunds:Number,
    fundsAllocation:Number
})


module.exports = mongoose.model('Team',teamSchema)