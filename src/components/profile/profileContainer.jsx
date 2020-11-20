import React from'react'
import Profile from './profile'
import { connect } from 'react-redux'
import {getLogoutThunk} from '../../redux/reducer/authReducer'
import { Redirect } from 'react-router-dom';
import {getAuthThunk} from '../../redux/reducer/authReducer'


class RedirectProfile extends React.Component{
  componentWillMount(){


  }

  render(){
    if(!this.props.isAuth) return <Redirect to="/login"/>
      
    return <Profile {...this.props} />

  }
}




const mapStateToProps =(state)=>{
  return{
    isAuth:state.auth.isAuth,
    user:{...state.auth.user}
     
  }
}


const ProfileContainer = connect(mapStateToProps,{getLogoutThunk,getAuthThunk})(RedirectProfile);
export default ProfileContainer