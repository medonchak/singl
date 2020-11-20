import React from'react'
import { connect } from "react-redux"
import UpdateLot from "./updateLot"
import {Catalog,newLotParametr,addLotThunk,dowFile,getUpdateLotThunk} from '../../redux/reducer/lotReducer'
import { withRouter } from "react-router-dom"

class UpdateLotApi extends React.Component {
    componentDidMount(){
        this.props.getUpdateLotThunk(this.props.match.params.id)
      
    }
    render(){
       
        return <UpdateLot {...this.props}/>
    }
}

const mapStateToProps =(state,form)=>{
    return{
        category:state.lot.category,
        updateLot:state.lot.updateLot[0],
        catalog:state.lot.catalog,
        isAuth:state.auth.isAuth
    }
}

const UpdateLotContainer = withRouter(connect(mapStateToProps,{newLotParametr,Catalog,addLotThunk,dowFile,getUpdateLotThunk})(UpdateLotApi));

export default UpdateLotContainer