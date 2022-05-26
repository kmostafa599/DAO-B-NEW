const asyncHandler = require('express-async-handler')
const Team = require('../model/teamModel')
// const User = require('../model/userModel')


const getTeams = asyncHandler(async (req, res) => {
    const team = await Team.find() // find teams
    console.log(team)
    res.status(200).json(team)
})

const setTeam = asyncHandler(async (req, res) => {
    const findTeam = await Team.find({ team: req.body.team }) // find team
    if (findTeam) {
        return res.status(400).json({ msg: 'Team already existed' })
    }
    const {
        team,
        budget
    } = req.body
    const createTeam = await Team.create({
        team: team,
        fundsAllocation: budget,
    })
    console.log(team)
    res.status(200).json(team)
})

module.exports = {
    getTeams,
    setTeam,
}
