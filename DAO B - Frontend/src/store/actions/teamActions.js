import * as api from '../../config'
import { CREATE_TEAM, GET_ALL_TEAMS } from './actionTypes'

export const getAllTeams = () => async(dispatch) =>{
    try{
        const response = await api.getAllTeams()
        dispatch({ type:GET_ALL_TEAMS, payload:response.data })
    }catch(err){
        console.log(err)
    }
}
export const createTeam = ({teamName,budget}) => async (dispatch) => {
    try {
        const response = await api.createTeam(teamName,budget)
        console.log(response)
        dispatch({ type: CREATE_TEAM, payload: response.data })
        // dispatch({type:USER_CREATED, payload:response.data})
    } catch (error) {
        console.log(error)
    }
}