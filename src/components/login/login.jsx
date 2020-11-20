import React from 'react'
import {reduxForm,Field } from 'redux-form'
import { LoginUsers } from '../../api/api';
import {NavLink,Redirect} from 'react-router-dom'
const Form =(props)=>{

    return (
        <form onSubmit={props.handleSubmit}  action="">
        <label htmlFor="">Доброго дня введідь будь ласка:</label>
      <br/>
        <label htmlFor=""> Логін    </label> 
         <Field name={"name"} component={"input"} type="text"/><br/>
        <label htmlFor=""> Пароль  </label>
        <Field name={"password"} component={"input"} type="password"/><br/>
        <button>Увійти</button>
    </form>
    )
}

const ReduxFromLogin=reduxForm({
    form:"login"
})(Form);

const Login =(props)=>{
    let onSubmit=(data)=>{
        LoginUsers(data.name,data.password).then(data=>{
            props.getAuthThunk()
            console.log(data)})
           
         
    }

    if(props.isAuth) return <Redirect to="/profile"/>
    return <div>
        <ReduxFromLogin onSubmit={onSubmit} {...props}/>
        <NavLink to="/signup">Зареєструватися</NavLink> 
    </div>
}
export default Login