import { connect } from "react-redux"
import React from 'react'
import { withRouter } from "react-router-dom"
import LotPage from "./lotpage"
import { getLotId } from "../../api/api"
import {postUpdateLotThunk} from "../../redux/reducer/lotReducer"
import {setLotDataDialogsThunk,postaddMessageThunk,getSelectMessageLotThunk} from "../../redux/reducer/messageReducer"
import {timeLot} from "../../redux/reducer/lotReducer"
import { PureComponent } from "react"


class LotPageApi extends PureComponent {
    componentDidMount(){
            let timeLots=(timeLot)=>{
                this.props.timeLot(timeLot);
            } 
            getLotId(this.props.match.params.id).then(data=>timeLots(data[0]))  
    }
    componentDidUpdate(prevProps, prevState){
        if (this.props.lot !== prevProps.lot)
        if(this.props.lot.iduser!==this.props.user.id && this.props.user.id!==0 )
        this.props.setLotDataDialogsThunk(this.props.match.params.id)
    }    
    render(){
        console.log("sdsd")
        return <LotPage {...this.props}/>
        }
}

const mapStateToProps =(state)=>{
    return{
        dataDialogs:state.message.dataDialogs,
        user:state.auth.user,
        lot:state.lot.lots
    }
}
const LotPageContainer = withRouter(connect(mapStateToProps,{setLotDataDialogsThunk,timeLot,postaddMessageThunk,getSelectMessageLotThunk,postUpdateLotThunk})(LotPageApi));

export default LotPageContainer;