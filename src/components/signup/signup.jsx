
import React from 'react'
import {reduxForm,Field } from 'redux-form'
import { SignupUsers } from '../../api/api';


const Form =(props)=>{
    return (
        <form onSubmit={props.handleSubmit}  action="/signup">
        <label htmlFor="">Доброго дня введідь будь ласка:</label>
      <br/>
        <label htmlFor=""> Логін    </label> 
         <Field name={"name"} component={"input"} type="text"/><br/>
        <label htmlFor=""> Пароль  </label>
        <Field name={"password"} component={"input"} type="password"/><br/>
        <label htmlFor=""> Email </label>
        <Field name={"email"} component={"input"} type="text"/><br/>
        <label htmlFor=""> Номер телефону </label>
        <Field name={"number"} component={"input"} type="text"/><br/>
        <button>Увійти</button>
    </form>
    )
}

const ReduxFromLogin=reduxForm({
    form:"login"
})(Form);

const Signup =(props)=>{
    let onSubmit=(data)=>{
        console.log(data)
        SignupUsers(data.name,data.password).then(data=>console.log(data))
        
    }
    return <ReduxFromLogin onSubmit={onSubmit} {...props}/>
}
export default Signup