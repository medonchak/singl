import React, {Component} from 'react';
import './App.css';
import SearchContainer from './components/search-page/searchContainer';
import Signup from './components/signup/signup';
import {BrowserRouter,Route} from 'react-router-dom';
import Menu from './components/menu/menu';
import PageContainer from './components/pages/pageContainer';
import s from './app.module.css'
import BascketContainer from './components/bascket/bascketContiner';
import LotPageContainer from './components/lotPage/lotpageContiner';
import AddLotContainer from './components/addlot/addlotContainer';
import LogoContainer from './components/logo/logoContainer';
import MessageContainer from './components/message/messageContainer';
import MyLotsContainer from './components/mylots/mylotsContainer';
import SetingsContainer from './components/setings/setingsContainer';
import ProfileContainer from './components/profile/profileContainer';
import LoginContainer from './components/login/loginContainer';
import { connect } from 'react-redux';
import {initThunk} from './redux/reducer/appReducer'
import {getBascketThunk} from './redux/reducer/lotReducer'
import {getSmsUserThunk,updateUserKilkistMessageThunk,actionNewSMS} from './redux/reducer/messageReducer'
import MessagePageContainer from './components/dialogsPage/messagePageContainer';
import UpdateLotContainer from './components/updateLot/updateLotContainer';
import AukContainer from './components/auk/aukContainer';

class App extends Component {
    state={
      menu:false
    }

    componentDidMount(){
      this.props.initThunk()
      if(!this.props.isAuth){
        this.props.getBascketThunk()
        this.props.getSmsUserThunk()
      }
      

    }
    componentDidUpdate(prevProps,prevState){
    if(this.props.isAuth) 
     if(prevProps.newkilkistMesUser!==this.props.newkilkistMesUser){
      if(this.props.user.kilkist_message!==this.props.newkilkistMesUser){
        let tt=parseInt(this.props.newkilkistMesUser)-parseInt(this.props.user.kilkist_message)
        let t={
          newSms:true,
          newSmsNumber:parseInt(tt)
        }
        this.props.actionNewSMS(t)
      }
        
    }
  }
    onMenu(){
      if(this.state.menu)
      this.setState({ menu:false})
      else  this.setState({ menu:true})
    }
 render(){
  
   if(!this.props.initData) return <div>Загрузка</div>
   
  return (
    <div className="App">
        <BrowserRouter>
        <LogoContainer/>
        {!this.state.menu  ? <div className={s.div} onClick={this.onMenu.bind(this)}>Відкрити меню</div> : <div className={s.div} onClick={this.onMenu.bind(this)}>Закрити меню</div>}
        {this.state.menu && <Menu/>   }
        <div  className={s.app}>    
            <Route path="/addlot" render={()=><AddLotContainer/>}/>
            <Route path="/search" render={() => <SearchContainer/>}/>
            <Route path="/signup" render={() => <Signup/>}/>
            <Route path="/katalog/:name" render={() => <PageContainer/>}/>
            <Route path="/auk" render={() => <AukContainer/>}/>
            <Route path="/lot/:id" render={() => <LotPageContainer/>}/>
            <Route path="/login" render={ () => <LoginContainer/>}/>
            <Route path="/bascket" render={() => <BascketContainer/>}/>
            <Route path="/message-page" render={() => <MessagePageContainer/>}/>
            <Route path="/setings" render={ ()=><SetingsContainer/>}/>
            <Route path="/profile" render={ ()=><ProfileContainer/>}/>
            <Route path="/mylots" render={ ()=><MyLotsContainer/>}/>
            <Route path="/message/:iddialogs" render={ ()=><MessageContainer/>}/>
            <Route path="/updateLot/:id" render={ ()=><UpdateLotContainer/>}/>
        </div>

        </BrowserRouter>  
    </div>
    );
    }   
  }
  
    const mapStateToProps =(state)=>{
      return{
          isAuth:state.auth.isAuth,
          user:state.auth.user,
          initData:state.initData.init,
          initMenu:state.initData.menu,
          newkilkistMesUser:state.message.newkilkistMesUser
      }
  }



export default connect(mapStateToProps,{initThunk,getBascketThunk,getSmsUserThunk,updateUserKilkistMessageThunk,actionNewSMS})(App);
