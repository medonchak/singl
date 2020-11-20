import React from'react'
import { connect } from "react-redux"
import Message from './message'
import { Redirect, withRouter } from 'react-router-dom';
import {updateDialogsThunk,addMessageAction,updateMessageThunk,
  setMessageLot,deleteMessageLot,deleteMessageUsers,postaddMessageThunk,
  setDataDialogsThunk,deleteMessageThunk,getSelectMessageLotThunk,getSmsUserThunk} from '../../redux/reducer/messageReducer'




class MessageAPI extends React.Component {
    
    componentDidMount(){
      if(this.props.isAuth) {
        this.props.setDataDialogsThunk(this.props.match.params.iddialogs)
        this.props.getSelectMessageLotThunk(this.props.match.params.iddialogs)
        
      }
    }
  
    render(){

      if(!this.props.isAuth) return <Redirect to="/login"/>
        return(
   
              <Message {...this.props}/>
      
        )
        }
}

const mapStateToProps =(state)=>{
  return{
      message:state.message,
      lot:state.lot,
      isAuth:state.auth.isAuth,
      user:state.auth.user
  }
}

const MessageContainer =withRouter(connect(mapStateToProps,
  {addMessageAction,setMessageLot,deleteMessageLot,
  deleteMessageUsers,postaddMessageThunk,
  setDataDialogsThunk,deleteMessageThunk,getSelectMessageLotThunk,
  updateMessageThunk,updateDialogsThunk,getSmsUserThunk})(MessageAPI));


export default MessageContainer;