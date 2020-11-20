import { connect } from "react-redux"
import Bascket from "./bascket"
import React from 'react'
import {getBascketThunk,DeletLotBascket} from '../../redux/reducer/pageReducer'
class BascketApi extends React.Component {
  

    componentDidMount(){   
        if(this.props.bascket.length===0){
            this.props.getBascketThunk()
            }
        }
    render(){
        
        return <Bascket {...this.props}/>
        }
}

const mapStateToProps =(state)=>{
        return{
            bascket:state.page.bascket,
            isAuth:state.auth.isAuth,
            user:state.auth.user,
            url:state.lot.url
        }
}

const BascketContainer = connect(mapStateToProps,{getBascketThunk,DeletLotBascket})(BascketApi);

export default BascketContainer