import { postaddMessage,getMessageLot,getDialogs,postDialogs,
        deleteDialogs,getOneDialogs,deleteMessageId,
        getDataLotDialogs,updateMessage,updateDialogs,getKilkistSms,updateUserKilkistMessage,uploadFile} from "../../api/api"

let _state ={
    messageLot:[],
    dialogs:[],
    dataDialogs:{},
    newSms:false,
    newSmsNumber:0,
    newkilkistMesUser:0,
    dataimg:[]
}
const PageReducer =(state=_state,action)=>{
    switch (action.type) {
        
           case "addMessage":{
            let copyState={...state}
            copyState.messageLot=[...state.messageLot]
            copyState.messageLot.push(action.mes)
            return copyState}   
            case "setMessageLot":{
                let copyState={...state}
                copyState.messageLot=[...state.messageLot]
                copyState.messageLot=action.messageLot
                return copyState} 
            case "NewSMS":{
                let copyState={...state}
                
                if(action.data.newSmsNumber>0){
                    copyState.newSms=action.data.newSms
                    copyState.newSmsNumber=action.data.newSmsNumber
                }
               
                return copyState}              
            case "NewSmsUser":{
                let copyState={...state}
                copyState.newkilkistMesUser=action.kilkistMesUser
                return copyState}  
            case "setDialogs":{
                    let copyState={...state}
                    copyState.dialogs=[...state.dialogs]
                    copyState.dialogs=action.dialogs
                    return copyState}    
            case "DeleteMessage":{
                let copyState={...state}
                copyState.message=[...state.message]
               return copyState
            }
            case "setDataDialogs":{     
                let copyState={...state}
                copyState.dataDialogs={...state.dataDialogs}
                let data={
                    idRec:action.data.id_users,
                    idSen:action.data.id_sender,
                    idLot:action.data.id_lot,
                    iddialogs:action.data.id,
                    name:action.data.name
                }
                copyState.dataDialogs=data
          
               return copyState
            }
            case "deleteDialogs":{
                let copyState={...state}
                copyState.dialogs=[...state.dialogs]
                for(var i=0;i<copyState.dialogs.length;i++)
                {
                    if ( copyState.dialogs[i].id===action.id)
                    copyState.dialogs.splice(i, 1);
                }
               return copyState
            }
            case "deleteMessage":{
                let copyState={...state}
                copyState.messageLot=[...state.messageLot]
                for(var index2=0;index2<copyState.messageLot.length;index2++)
                {
                    if ( copyState.messageLot[index2].id===action.id)
                    copyState.messageLot.splice(index2, 1);
                }
               return copyState
            }
            case "deleteDialogs":{
                let copyState={...state}
                copyState.dataimg=[...state.dataimg]
                copyState.dataimg.push(action.data)
               return copyState
            }
            default:
                return state
   }
   
}
    export const deleteDialogsAction =(dataDialogs)=>({type:"deleteDialogs",id:dataDialogs})
    export const deleteMessageAction =(idmessage)=>({type:"deleteMessage",id:idmessage})
    export const addMessageAction=(message)=>({type:"addMessage", mes:message})
    export const setDialogs=(dialogUser)=>({type:"setDialogs",dialogs:dialogUser})
    export const setMessageLot=(message)=>({type:"setMessageLot",messageLot:message})
    export const deleteMessageLot=(id)=>({type:"deleteMessage",id:id})
    export const deleteMessageUsers=(id)=>({type:"deleteMessage",id:id})
    export const setDataDialogs=(dataDialogs)=>({type:"setDataDialogs",data:dataDialogs})
    export const actionNewSMS=(dataBool)=>({type:"NewSMS",data:dataBool})
    export const actionNewSmsUser=(kil)=>({type:"NewSmsUser",kilkistMesUser:kil})

    ///Thank функції які dispatch 
    export const postaddMessageThunk=(message,foto)=>{
        return (dispatch)=>{

            postaddMessage(message)
            // uploadFile(foto).then(data=>{
                
            // })
        }
    } 
    export const getSelectMessageLotThunk=(iddialogs)=>{
        return (dispatch)=>{
            getMessageLot(iddialogs).then(data=>dispatch(setMessageLot(data)))
        }
    }
    export const getSelectDialogsThunk=(id)=>{
        return (dispatch)=>{
            
            getDialogs(id).then((data)=>dispatch(setDialogs(data)))
        }
    }
    export const postDialogsThunk=(dialog)=>{
        return (dispatch)=>{
            postDialogs(dialog)
        }
    }
    export const setDataDialogsThunk=(idlot)=>{
        return (dispatch)=>{
            getOneDialogs(idlot).then((data)=>{
                dispatch(setDataDialogs(data[0]))
            })
      
        }
    }
    export const setLotDataDialogsThunk=(idlot)=>{
   
        return (dispatch)=>{
          
            getDataLotDialogs(idlot).then((data)=>{
                dispatch(setDataDialogs(data[0]))})
        }
    }
    export const deleteMessageThunk=(id)=>{
        return (dispatch)=>{
            deleteMessageId(id)
            dispatch(deleteMessageAction(id))
        }
    }
    export const deleteDialogsThunk=(id)=>{
        return (dispatch)=>{
            deleteDialogs(id)
        }
    }
    export const  updateMessageThunk=(message)=>{
        return (dispatch)=>{
            updateMessage(message)
        }
    }
    export const  updateDialogsThunk=(data)=>{
        return (dispatch)=>{
            updateDialogs(data)
        }
    }
    export const  getSmsUserThunk=(data)=>{
        return (dispatch)=>{
            getKilkistSms().then(data=>{
                            dispatch(actionNewSmsUser(data.length))
                    }
                )
           
        }
    }
    export const  updateUserKilkistMessageThunk=(data)=>{
        return (dispatch)=>{
   
            updateUserKilkistMessage(data)
        }
    }
export default PageReducer;