import { connect } from "react-redux"
import SearchPage from "./searchPage"
import { withRouter } from "react-router-dom"
import {setLotsThunkCreate,actionBool} from '../../redux/reducer/lotReducer'
import {postPlusLotsBascketThunk} from '../../redux/reducer/pageReducer'

const mapStateToProps =(state)=>{
    return{
        lote:state.search.searchLot
    }
}

const SearchContainer=  withRouter(connect(mapStateToProps,{postPlusLotsBascketThunk,actionBool,setLotsThunkCreate})(SearchPage));
export default SearchContainer;