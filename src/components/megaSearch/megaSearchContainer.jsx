import React from'react'
import { connect } from "react-redux"
import { Redirect, withRouter } from 'react-router-dom';
import MegaSearch from './megaSearch';
import {} from '../../redux/reducer/lotReducer'


class MegaSearchAPI extends React.Component {
  state={
    catalog:[]
  }
  componentDidMount(){
    this.props.lot.forEach(e => {
      
      if(e.name===this.props.match.params.name)
      {
        this.setState({catalog:e.podcategory})
      }
    });
  }
  
    render(){
      console.log(this.props)

        return(
            <div>
              <MegaSearch podcategory={this.state.catalog} {...this.props}/>
            </div>
        )
    }
}
const mapStateToProps =(state)=>{
  return{
      lot:state.lot.category,
      isAuth:state.auth.isAuth,
      user:state.auth.user
  }
}

const MegaSearchContainer =withRouter(connect(mapStateToProps,{})(MegaSearchAPI));


export default MegaSearchContainer;