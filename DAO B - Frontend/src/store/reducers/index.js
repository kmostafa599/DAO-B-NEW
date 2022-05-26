import {combineReducers} from 'redux'
import BonusReducer from './totalBonus';
import UserReducer from "./users";
import AuthReducer from './auth'
import errorReducer from './errorReducer';
import WalletReducer from './wallet';
import TeamReducer from './team';
export const reducers =  combineReducers({
    users: UserReducer,
    totalBonus:BonusReducer,
    auth:AuthReducer,
    wallet:WalletReducer,
    teams:TeamReducer,
    error: errorReducer,
    // proposals: BonusesReducer,

})