import { ADD_BONUS, AUTH_ERROR, CLEAR_ERROR, CREATE_USER, DELETE_NOTIFICATION, GET_ALL_USERS, GET_ERROR, GET_INITIAL_DATA, GET_TOTAL_BONUS, GET_USER, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, LOGOUT_SUCCESS, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS, SET_APPROVAL, SET_DECLINED, SET_TOTAL_BONUS, SET_WALLET, UPDATE_USER, UPDATE_VOTE, USER_CREATED, USER_LOADED, USER_LOADING } from "./actionTypes"
import * as api from '../../config/'


// export const getInitialData = () => async (dispatch) => {
//     try {
//         const response = await api.getData()
//         // console.log(response)
//         dispatch({ type: GET_INITIAL_DATA , payload: response.data })
//     }
//     catch (error) {
//         console.log(error)
//     }
// }
export const getAllUsers = () => async (dispatch) => {
    try {
        const response = await api.getAllUsers()
        // console.log(response)
        dispatch({ type: GET_ALL_USERS, payload: response.data })
    }
    catch (error) {
        console.log(error)
    }
}
export const getUser = (userId) => async (dispatch) => {
    try {
        const response = await api.getUser(userId)
        // console.log(response)
        dispatch({ type: GET_USER, payload: response.data })
    }
    catch (error) {
        console.log(error)
    }
}
export const getTotalBonus = () => async (dispatch) => {
    try {
        const response = await api.getTotalBonus()
        // console.log(response)
        dispatch({ type: GET_TOTAL_BONUS, payload: response.data })
    }
    catch (error) {
        console.log(error)
    }
}

export const setTotalBonus = (newTotal) => async (dispatch) => {
    try {
        const response = await api.setTotalBonus(newTotal)
        // console.log(response)
        dispatch({ type: SET_TOTAL_BONUS, payload: response.data })
    }
    catch (error) {
        console.log(error)
    }
}

export const updateUser = (editedUser, id) => async (dispatch) => {
    try {
        console.log({ editedUser, id })
        const response = await api.updateUser(editedUser, id)
        console.log(response)
        dispatch({ type: UPDATE_USER, payload: response.data })
    } catch (error) {
        console.log(error)
    }
}
export const createUser = (user) => async (dispatch) => {
    try {
        const response = await api.createUser(user)
        console.log(response)
        dispatch({ type: CREATE_USER, payload: response.data })
        // dispatch({type:USER_CREATED, payload:response.data})
    } catch (error) {
        console.log(error)
    }
}
export const updateVote = (proposalId, vote, userVoted) => async (dispatch) => {
    try {
        const response = await api.updateVote(proposalId, vote, userVoted)
        dispatch({ type: UPDATE_VOTE, payload: response.data })
    } catch (err) {
        console.log(err)
    }

}

export const addWallet = (wallet, userId) => async (dispatch) => {
    try {
        const response = await api.addWallet(wallet, userId)
        dispatch({ type: SET_WALLET, payload: response.data })
    } catch (err) {
        console.log(err)
    }
}

export const addBonus = (userId, value,usedWallet) => async (dispatch) => {
    console.log({userId, value,usedWallet})
    try {
        const response = await api.addBonus(userId, value,usedWallet)
        console.log(response.data)
        dispatch({ type: ADD_BONUS, payload: response.data })

    } catch (err) {
        console.log(err.response.data.msg)
    }

}

export const setApproval = (userId, status) => async (dispatch) => {
    console.log(status)
    try {
        const response = await api.setApproval(userId, status)
        dispatch({ type: SET_APPROVAL, payload: response.data })

    } catch (err) {
        console.log(err)
    }

}

export const setDeclined = (userId,status) => async (dispatch) => {
    console.log(status)
    try {
        const response = await api.setDeclined(userId, status)
        console.log(response.data)
        dispatch({ type: SET_DECLINED, payload: response.data })

    } catch (err) {
        console.log(err)
    }

}

export const deleteNotification = (userId, notificationId) => async (dispatch) => {
    console.log({ userId, notificationId })
    try {
        const response = await api.deleteNotification(userId, notificationId)
        dispatch({ type: DELETE_NOTIFICATION, payload: response.data })

    } catch (err) {
        console.log(err)
    }

}



export const returnErrors = (msg, status, id = null) => (dispatch, getState) => {
    return {
        type: GET_ERROR,
        payload: { msg, status, id }
    }
}
export const clearErrors = () => {
    return {
        type: CLEAR_ERROR,

    }
}
export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING })
    api.user(getState)
        .then(res => dispatch({
            type: USER_LOADED,
            payload: res.data
        })
        ).catch(err => {
            console.log(err)
            dispatch(returnErrors(err.response.data.msg, err.response.status))
            dispatch({
                type: AUTH_ERROR
            })
        })
}
export const registerUser = ({fullname, email, password}) => async (dispatch) => {
        api.register(fullname, email, password)
        .then(res=>{
            console.log(res.data)
            dispatch({type:REGISTER_SUCCESS,
            payload:res.data
            })
        })
        .catch(err=>{
            console.log(err.data)
            dispatch(returnErrors(err.response.data.msg, err.response.status, 'REGISTER_ERROR'))
            dispatch({
                type:REGISTER_FAIL
            })
        })
       
   
}
export const loginUser = ({email, password}) => async (dispatch) => {
    api.login(email, password)
        .then(res=>{
            console.log(res.data)
            dispatch({type:LOGIN_SUCCESS,
            payload:res.data
            })
        })
        .catch(err=>{
            console.log(err.data)
            dispatch(returnErrors(err.response.data.msg, err.response.status, 'LOGIN_FAIL'))
            dispatch({
                type:LOGIN_FAIL
            })
        })
}
export const logoutUser = (user) => async (dispatch) => {
    return dispatch({
        type:LOGOUT_SUCCESS,
    })
}

export const tokenConfig = (getState) => {
    //get token from localStorage
    const token = getState().auth.token

    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    };
    if (token) {
        config.headers['x-auth-token'] = token
    }
    return config
} 