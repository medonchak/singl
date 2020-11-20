import React from'react'
import { connect } from "react-redux"
import {setMyLotsThunkCreate,deleteLotThunk} from '../../redux/reducer/lotReducer'
import { Redirect, withRouter } from "react-router";
import MyLots from './mylots'

class MyLotsApi extends React.Component {
    componentDidMount(){
        if(!this.props.isAuth) return <Redirect to="/login"/>
      
        this.props.setMyLotsThunkCreate(this.props.user.id)
        }
            render(){
                return <MyLots {...this.props}/>
        }
    }
    const mapStateToProps =(state)=>{
            return{
                isAuth:state.auth.isAuth,
                mylots:state.lot.mylots,
                user:state.auth.user
            }
        }


const MyLotsContainer = withRouter(connect(mapStateToProps,{setMyLotsThunkCreate,deleteLotThunk})(MyLotsApi))

export default MyLotsContainer