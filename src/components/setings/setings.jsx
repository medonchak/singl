import React from'react'
import s from './setings.module.css'
import { NavLink } from 'react-router-dom';
import {reduxForm,Field } from 'redux-form'

 

const Password=()=>{
return <div>
        <label htmlFor=""> Введіть старий пароль</label>
        <input type="text"/><br/>
        <label htmlFor=""> Введіть новий пароль</label>
        <input type="text"/>
</div>
}

const Kontakt=(props)=>{
    return <form onSubmit={props.handleSubmit}>
         <label htmlFor=""> Ваше Ім'я</label>
        <Field component={"input"} type="text" name="name" /><br/>
        <label htmlFor=""> Ваш номер телефона</label>
        <Field component={"input"} type="text" name="number"/><br/>
        <button>Змінити</button>
    </form>
    }
const Email=(props)=>{
    return <form onSubmit={props.handleSubmit}>
         <label htmlFor=""> Введіть старий email</label>
        <Field component={"input"} type="email" name="email" /><br/>
        <label htmlFor=""> Введіть новий email</label>
        <Field component={"input"} type="email" name="newemail"/><br/>
        <button>Змінити</button>
    </form>
    }

const Delete=()=>{
    return <div>
            <label htmlFor=""> Успішно видалено</label>
    </div>
    }

class Setings extends React.Component {
  

  
    render(){
        let onSubmit=(data)=>{
            console.log(data)
            if (this.props.location.hash==="#email") 
            this.props.setingsEmailThunk(data)
            else if (this.props.location.hash==="#kontakt")
            this.props.setingsKontaktThunk(data)
        }
    
        let SetingsState=()=>{
            if (this.props.location.hash==="#password") {
                return <Password/>
            }
            else if (this.props.location.hash==="#kontakt")
            {
                return <ReduxFormKontakt {...this.props} onSubmit={onSubmit}/>
            }
            else if (this.props.location.hash==="#email")
            {
                return <ReduxFormEmail {...this.props} onSubmit={onSubmit}/>
            }
            else if (this.props.location.hash==="#delete")
            {
                return <Delete/>
            }
          
        }
  
        return(<div className={s.setingsOne}> 
        <div className={s.setingsTwo}>
        <div className={s.menu}>
        <NavLink  className={s.item} to="#password"><div className={s.div}>Змінити пароль</div></NavLink> 
        <NavLink className={s.item} to="#kontakt"><div className={s.div}>Змінити контактні дані</div></NavLink>
        <NavLink className={s.item} to="#email"><div className={s.div}>Змінити e-mail</div></NavLink>
        <NavLink className={s.item} to="#delete"><div className={s.div}>Видалити акаунт</div></NavLink>
      
        </div>
           <div className={s.set}>  {SetingsState()} </div>
        </div>
     
        </div>

        )
        }
}

const ReduxFormEmail=reduxForm({form:"Email"})(Email)

const ReduxFormKontakt=reduxForm({form:"Kontakt"})(Kontakt)

//const ReduxFormPassword=reduxForm({form:"Password"})(Email)

export default Setings;