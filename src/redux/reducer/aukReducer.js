let _state ={
    timeLot:"09:12"
}

const AukReducer =(state=_state,action)=>{
    switch (action.type) {
        
        case "timeLot":{
         let copyState={...state}
         copyState.timeLot={...state.timeLot}
         copyState.timeLot=action.timeLot
         return copyState
     }   

         default:
             return state
}
}
export const setingTimeLot=(dataTime)=>({type:"timeLot",timeLot:dataTime})

export default AukReducer;