import {  getAuth,getLogout } from "../../api/api"

let _state ={
    user:{},
    isAuth:false
    
}
const AuthReducer =(state=_state,action)=>{
  
    switch (action.type) {
        
           case "setAuth":{
            let copyState={...state}
            copyState.auth={...state.auth}
            copyState.user=action.users
            copyState.isAuth=action.isAuth
           
            return copyState
        }   

            default:
                return state
   }
   
}
    export const setAuth=(data)=>({
        type:"setAuth",  
        users:data.user,
        isAuth:data.isAuth})


    export const getAuthThunk=()=>{
        return (dispatch)=>{
             return getAuth().then(data=>{
                dispatch(setAuth(data))
            })
        }
    } 

    export const getLogoutThunk=()=>{
        return (dispatch)=>{
            getLogout().then(data=>{
                console.log(data)
            })
        }
    } 

export default AuthReducer;