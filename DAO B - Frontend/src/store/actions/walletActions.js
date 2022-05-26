import * as api from '../../config'
import { GET_MAIN_WALLET } from './actionTypes'

export const getMainWallet = () => async(dispatch) =>{
    try{
        const response = await api.getMainWallet()
        dispatch({ type:GET_MAIN_WALLET, payload:response.data })
    }catch(err){
        console.log(err)
    }
}