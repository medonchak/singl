import React from'react'
import s from './profile.module.css'
import MenuProfile from './menuProfile';;
 




class Profile extends React.Component {



    render(){
       
        return(<div className={s.index}>
            <div className={s.div}>
            <div className={s.menu} ><MenuProfile getLogoutThunk={this.props.getLogoutThunk}/></div>
                <div className={s.name}>    <img src="" alt=""/>
                   <div className={s.textSpan}>Логін: {this.props.user.login}</div> 
                   <div className={s.textSpan}>Email: {this.props.user.email}</div>
                   <div className={s.textSpan}>Дата реєстрації:</div>
                </div>
            </div>
              
                  
  
    

            </div>
        )
        }
}
export default Profile;