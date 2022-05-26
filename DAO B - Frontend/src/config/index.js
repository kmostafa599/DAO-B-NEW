import axios from 'axios'
import { tokenConfig } from '../store/actions'



export const API = axios.create({ baseURL: 'http://localhost:8080/api/v1/' })
//get all users
export const getAllUsers = () => {
    return API.get('/users')
}
// get user by id
export const getUser = (userId) => {
    return API.get(`/users/${userId}`)
}

export const getAllTeams = () =>{
    return API.get('/teams')
}

//get total bonus
export const getTotalBonus = () => {
    return API.get('/users/totalBonus')
}

//set total bonus
export const setTotalBonus = (newTotal) => {
    return API.post('/users/totalBonus/set',newTotal)
}

//register user req body: user object
export const createUser = (user) =>{
    return API.post('/users/create', user)
} 
export const createTeam = (teamName,budget) =>{
    return API.post('/teams/create', {team:teamName,budget:budget})
} 
//add bonus to suggestedProposal object in user object
export const addBonus = (userId, bonus,usedWallet) => {
    return API.post(`/users/bonus/add/${userId}`, {bonus: bonus,wallet:usedWallet,approved:0}, {headers: {
        'Content-Type': 'application/json'
      }})
} 
// push notificaitons to notidications array in user object
export const addNotifications = (userId) => {
    return API.post(`/users/notification/add/${userId}`, userId)
}

//add status to suggestedProposal object in user object
export const setApproval = (userId, status) => {
    return API.put(`/users/bonus/approve/${userId}`, { status:status })
} 
export const setDeclined = (userId, status) => {
    return API.put(`/users/bonus/decline/${userId}`, { status:status })
} 
// update user data by userId req body: editedUser Object, userId
export const updateUser = (editedUser, id) => {
    console.log(id)
    return API.put(`/users/update/${id}`, { editedUser })
}  
//add vote to votes array in suggestedProposal object in user Object
export const updateVote = (proposalId, vote, userVoted) => {
    return API.put(`/users/vote/${proposalId}`, {vote:vote,user:userVoted})
} 

export const addWallet = (wallet,userId) =>{
    return API.put(`/users/wallet/add/${userId}`,{name:"MyWallet",wallet:wallet})
}
export const getMainWallet = ()=>{
    return API.get('/wallet')
}

export const deleteNotification = (userId,notificationId) => ('/users/notification/delete',{userId,notificationId}) 
export const user = (getState) => API.get('/auth/me', tokenConfig(getState))
export const login = (email,password) => API.post('/auth/login',{email,password})//token
export const register = (name, email, password) => API.post('/auth/register',{name,email,password})//token
export const logout = (id) => API.post('/auth/logout',{id})//token

// export const getUser = (token:string) => API.get('/auth/me',{headers:{authorization:token}})

