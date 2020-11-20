import React from'react'
import { connect } from "react-redux"
import {setLotsThunkAuk,actionBool,getBascketThunk,deleteLotThunk} from '../../redux/reducer/lotReducer'
import {postPlusLotsBascketThunk,DeletLotBascket} from '../../redux/reducer/pageReducer'
import {setingTimeLot} from '../../redux/reducer/aukReducer'
import {getAuthThunk} from '../../redux/reducer/authReducer'
import {postDialogsThunk} from '../../redux/reducer/messageReducer'
import { withRouter } from "react-router";
import Auk from './auk'


class AukApiContainer extends React.Component {
    componentDidMount(){
        this.props.setLotsThunkAuk()
    }
        render(){
                    return <AukApi {...this.props}/>
        }
    }

    class AukApi extends React.Component {
        componentDidMount(){
            this.props.getAuthThunk()
        }
            render(){
           
                
                        return <Auk {...this.props}/>
            }
        }
    const mapStateToProps =(state)=>{
        return{
            dataBascket:state.lot.lotBascketUser,
            component:state.lot.component,
            auk:state.auk,
            category:state.lot.category,
            isAuth:state.auth.isAuth,
            user:state.auth.user
        }
    }
   

const AukContainer = withRouter(connect(mapStateToProps,{getBascketThunk,
    postPlusLotsBascketThunk,actionBool,deleteLotThunk,
    setLotsThunkAuk,getAuthThunk,postDialogsThunk,DeletLotBascket,setingTimeLot})(AukApiContainer))

export default AukContainer