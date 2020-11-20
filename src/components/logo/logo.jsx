import React, { createRef } from 'react'
import s from './logo.module.css'
import { NavLink } from 'react-router-dom'
import NavBarContainer from '../navbar/navbar';
import search from '../../img/search.png'
import logo from '../../img/logo.png'

const Logo =(props)=>{
  
    const searchRef=createRef();
    let newTextSearch=()=>{
        props.NewSearchText(searchRef.current.value)
    }
    let SearchLot=()=>{
        props.postSearchThunk(props.searchText)
    }
    
    return <div className={s.logo}>
        <div className={s.img}> <a href="/"> <img src={logo} alt=""/></a></div>
        <div className={s.search}>
            <div className={s.searchElement} >
            <input onChange={newTextSearch} className={s.input} value={props.searchText} ref={searchRef} type="text"/>
            <button className={s.but} ><NavLink  className={s.text} to="/search"> <img className={s.searchImg} onClick={SearchLot} src={search} alt=""/> </NavLink></button>
            </div>
         
            <NavBarContainer/>
        </div>
    </div>  
}
export default Logo