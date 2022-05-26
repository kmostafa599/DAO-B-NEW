import {  GET_PROPOSALS} from "../actions/actionTypes";

const Notifications= [
    {
        id:1,
        date:'04-16-2022',
        details: 'congrats! your bonus is Approved.',
        bonusAmmount:'50$',
    },
    {
        id:2,
        date:'04-16-2022',
        details: 'congrats! your bonus is Approved.',
        bonusAmmount:'150$',
    }
]
const proposals =[
    {
        id:1,
        userCreatedBonus:1,//userId
        votes:[1],
        bonus:12,
        bonusAmmount:150,
        approved:true,
    },
    {
        id:2,
        userCreatedBonus:1,//userId
        votes:[1,2], //user Ids
        bonus:12,
        bonusAmmount:119,
        approved:true,
    },
    {
        id:3,
        userCreatedBonus:1,//userId
        votes:[1], //user Ids
        bonus:12,
        bonusAmmount:111,
        approved:true,
    },
    {
        id:4,
        userCreatedBonus:1,//userId
        votes:[1,2], //user Ids
        bonus:15,
        bonusAmmount:130,
        approved:false,
    },
    {
        id:5,
        userCreatedBonus:1,//userId
        votes:[1], //user Ids
        bonus:20,
        bonusAmmount:110,
        approved:true,
    },
    {
        id:6,
        userCreatedBonus:1,//userId
        votes:[1,2], //user Ids
        bonus:10,
        bonusAmmount:180,
        approved:true,
    },
    {
        id:7,
        userCreatedBonus:2,//userId
        votes:[1,2], //user Ids
        bonus:12,
        bonusAmmount:200,
        approved:true,
    },
    {
        id:8,
        userCreatedBonus:2,//userId
        votes:[1], //user Ids
        bonus:18,
        bonusAmmount:30,
        approved:true,
    }
]


const ProposalReducer = (state = proposals, action) => {
    switch (action.type){
        case GET_PROPOSALS:
            return action.payload
        default:
            return state
    }
}

export default ProposalReducer