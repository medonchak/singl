import { connect } from "react-redux"
import Logo from "./logo"
import { postSearchThunk, NewSearchText} from "../../redux/reducer/searchReducer"
import {getAuthThunk} from "../../redux/reducer/authReducer"
import React from'react'

class ApiLogo extends React.Component {
    componentDidMount(){
       
    }
    render(){
        return <Logo {...this.props}/>
    }
}


const mapStateToProps =(state)=>{
    return{
        searchText:state.search.searchText,
        isAuth:state.auth.result
    }
}


const LogoContainer = connect(mapStateToProps,{postSearchThunk,NewSearchText,getAuthThunk})(ApiLogo);
export default LogoContainer