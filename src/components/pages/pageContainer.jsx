import React from'react'
import { connect } from "react-redux"
import Page from "./page"
import {setLotsThunkCreate,actionBool,getBascketThunk,deleteLotThunk} from '../../redux/reducer/lotReducer'
import {postPlusLotsBascketThunk,DeletLotBascket} from '../../redux/reducer/pageReducer'
import {getAuthThunk} from '../../redux/reducer/authReducer'
import {postDialogsThunk} from '../../redux/reducer/messageReducer'
import { withRouter } from "react-router";


class PageApiContainer extends React.Component {
    componentDidMount(){
        this.props.setLotsThunkCreate(this.props.match.params.name)
        
    }
        render(){
                    return <PageApi {...this.props}/>
        }
    }

    class PageApi extends React.Component {
        componentDidMount(){
            this.props.getAuthThunk()
    
        }
            render(){
           
                
                        return <Page {...this.props}/>
            }
        }
    const mapStateToProps =(state)=>{
        return{
            dataBascket:state.lot.lotBascketUser,
            component:state.lot.component,
            category:state.lot.category,
            isAuth:state.auth.isAuth,
            user:state.auth.user
        }
    }
   

const PageContainer = withRouter(connect(mapStateToProps,{getBascketThunk,
    postPlusLotsBascketThunk,actionBool,deleteLotThunk,
    setLotsThunkCreate,getAuthThunk,postDialogsThunk,DeletLotBascket})(PageApiContainer))

export default PageContainer