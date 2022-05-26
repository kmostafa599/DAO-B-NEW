import { GET_TOTAL_BONUS, SET_TOTAL_BONUS } from "../actions/actionTypes"

const BonusReducer = (state = [], action) => {
    switch (action.type) {
        case GET_TOTAL_BONUS:  
        case SET_TOTAL_BONUS:   
            return action.payload

        default:
            return state
    }
}
export default BonusReducer