import React from'react'
import s from './messagePage.module.css'
import { NavLink } from 'react-router-dom'

const MessageLot=(props)=>{

let SetMessageDialogsData=()=>{
        let data={
            id_rec:props.idRec,
            id_users:props.idSen,
            id_lot:props.idLot,
            id:props.id,
            namedialogs:props.name
        }
  
        props.setDataDialogs(data);
}
let deleteDialogs=()=>{

    props.deleteDialogsThunk(props.id)
    props.deleteDialogsAction(props.id)
}
return  (
            <div className={s.messageLot}> 
                <div className={s.sms}>
                <NavLink className={s.text} onClick={SetMessageDialogsData} to={"/message/"+props.id}>
                <span className={s.messageOne}> {props.name}</span>
                </NavLink>
                </div>
                <div>
                <input type="button" className={s.but} onClick={deleteDialogs} value="видалити"/>
                </div>
              
            </div>
        )
}
class MessagePage extends React.Component {
    
    render(){
         let message=this.props.dialogs.map(c=><MessageLot key={c.id}  deleteDialogsAction={this.props.deleteDialogsAction} deleteDialogsThunk={this.props.deleteDialogsThunk} setDataDialogs={this.props.setDataDialogs} id={c.id} idLot={c.id_lot} idRec={c.id_users} idSen={c.id_sender} name={c.name}/>)
                return(<div className={s.index}>
                            <div className={s.message} > 
                                {message}
                            </div>
                        </div>
                    )
            }
}

export default MessagePage;