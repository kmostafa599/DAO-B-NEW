import {  GET_MAIN_WALLET } from "../actions/actionTypes";


const WalletReducer = (state = [], action) => { //state is set to an empty array
    switch (action.type) {
        case GET_MAIN_WALLET:    
            return action.payload
        default:
            return state
    }
}
export default WalletReducer