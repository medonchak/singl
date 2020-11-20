import React from'react'
import s from './menu.module.css'
import {NavLink} from 'react-router-dom'

 




class MenuProfile extends React.Component {

    render(){
        let logout=()=>{
        this.props.getLogoutThunk()
        }
        return( 
            <div className={s.menu}>
                <NavLink className={s.item} to="/message-page"> < div className={s.item} >Повідомлення</div> </NavLink><br/>
                <NavLink className={s.item} to="/mylots"> < div className={s.item} >Мої Оголошення</div> </NavLink><br/>
                <NavLink className={s.item} to="/setings"> < div className={s.item} >Налаштування</div> </NavLink><br/>
                <a className={s.item} onClick={logout} href="/katalog"> < div className={s.item} >Вийти з акаунта</div></a>
 
            </div>
        )
        }
}
export default MenuProfile;