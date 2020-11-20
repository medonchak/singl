import React from 'react'
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import Setings from './setings'
import {setingsEmailThunk,setingsKontaktThunk} from '../../redux/reducer/setingsReducer'
 

class SetingsApi extends React.Component {
    
    
  componentDidMount(){

}

  render(){
  
      return(
            <Setings {...this.props}/>
      )
      }
}

const mapStateToProps =(state)=>{
    return{
      
    }
}



const SetingsContainer = withRouter(connect(mapStateToProps,{setingsEmailThunk,setingsKontaktThunk})(SetingsApi));


export default SetingsContainer;