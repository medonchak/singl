import React from 'react'
import s from './navbar.module.css'
import {NavLink} from 'react-router-dom'
import { connect } from "react-redux"
import sms from "../../img/sms.png"
import add from "../../img/add.jpg"
import bascket from "../../img/bascket.png"
import auk from "../../img/auk.png"
import man from "../../img/man.png"
//import woman from "../../img/woman.png"
const NavBar =(props)=>{
    return <div className={s.navbar}>
      <div  > <NavLink className={s.item} to="/auk">
      <img src={auk} alt=""/>
        </NavLink><br/></div>
      <div  > <NavLink className={s.item} to="/bascket">
      <img src={bascket} alt=""/>
        </NavLink><br/></div>
    <div  ><NavLink className={s.item} to="/message-page"> 
    {props.message.newSms && <div className={s.sms} >{props.message.newSmsNumber}</div>}
    <img src={sms} alt=""/>
    </NavLink><br/></div>
    <div  >   <NavLink className={s.item} to="/addlot">
    <img src={add} alt=""/>
     </NavLink><br/></div>
    <div  ><NavLink className={s.item} to="/profile">
    <img src={man} alt=""/>
    </NavLink><br/></div>
</div>
}

const mapStateToProps =(state)=>{
 
  return{
      isAuth:state.auth.isAuth,
      message:state.message
  }
}
const NavBarContainer = connect(mapStateToProps)(NavBar)

export default NavBarContainer