import React from'react'
import { connect } from "react-redux"
import { Redirect } from 'react-router-dom';
import {getSelectDialogsThunk,setDataDialogs,deleteDialogsThunk,deleteDialogsAction,updateUserKilkistMessageThunk} from '../../redux/reducer/messageReducer'
import MessagePage from './messagePage';



class MessageAPI extends React.Component {
    componentDidMount(){  
      if(this.props.isAuth) 
      this.props.getSelectDialogsThunk(this.props.user.id)
      this.props.updateUserKilkistMessageThunk(this.props.newkilkistMesUser)
    }
    render(){
          if(!this.props.isAuth) return <Redirect to="/login"/>
              return(
                  <div>
                    <MessagePage {...this.props}/>
                  </div>
              )
            }
        }
const mapStateToProps =(state)=>{
  return{
      dialogs:state.message.dialogs,
      isAuth:state.auth.isAuth,
      user:state.auth.user,
      newkilkistMesUser:state.message.newkilkistMesUser
  }
}

const MessagePageContainer = connect(mapStateToProps,
  {getSelectDialogsThunk,setDataDialogs,
  deleteDialogsThunk,deleteDialogsAction,updateUserKilkistMessageThunk})(MessageAPI);


export default MessagePageContainer;