import {  CREATE_TEAM, GET_ALL_TEAMS } from "../actions/actionTypes";


const TeamReducer = (state = [], action) => { //state is set to an empty array
    switch (action.type) {
        case GET_ALL_TEAMS:  
        case CREATE_TEAM:  
            return action.payload
        default:
            return state
    }
}
export default TeamReducer