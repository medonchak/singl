
import {getAuthThunk} from './authReducer'

let _state ={
    init:false,
    menu:false,
    
}
const AppReducer =(state=_state,action)=>{
  
    switch (action.type) {
        
           case "Initializion":{
            let copyState={...state}
            copyState.init=true
            return copyState
        }   

            default:
                return state
   }
   
}
    export const InitAction=()=>({
        type:"Initializion"})


    export const initThunk=()=>{
        return (dispatch)=>{
            const PromiseInit = dispatch(getAuthThunk())
            PromiseInit.then(()=>{
                dispatch(InitAction())
            })
            
        }
    } 


export default AppReducer;