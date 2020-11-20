import { connect } from "react-redux"
import {Catalog,newLotParametr,addLotThunk,dowFile,uploadFileThunk} from '../../redux/reducer/lotReducer'


import AddLot from "./addlot"

const mapStateToProps =(state,form)=>{
    return{
        category:state.lot.category,
        lot:state.lot,
        catalog:state.lot.catalog,
        isAuth:state.auth.isAuth
    }
}


const AddLotContainer = connect(mapStateToProps,{newLotParametr,Catalog,addLotThunk,dowFile,uploadFileThunk})(AddLot);

export default AddLotContainer