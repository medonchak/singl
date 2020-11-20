import React, { createRef } from 'react'
import s from './updateLot.module.css'

import {reduxForm,Field } from 'redux-form'

const UpdateLot =(props)=>{

    let optionCategory=props.category.map(c=><option value={c.category}>{c.category}</option>)
    let optionPodCategory=props.catalog.map(c=><option value={c}>{c}</option>) 
    const onSubmit =(data)=>{  
       console.log(data)
    }
   
  
    return (
        <div className={s.index}>
        <ReduxFormUpdate {...props} lot={props.updateLot} optionCategory={optionCategory} optionPodCategory={optionPodCategory} onSubmit={onSubmit}/>
        </div>
       
    )
}

const UpdateForm =(props)=>{  

  //console.log(props.lot.name)

let downloadFoto=(e)=>{
  props.dowFile(e.target.files[0])
}
return(
        <form  onSubmit={props.handleSubmit} >  
            <img alt=""/>
                <Field   component={file_upload} name={"Foto"}   onChange={downloadFoto} type="file"/>
             <label className={s.label} >Назва: </label> 
                <Field    component={"input"}   name={"Name"}  type="text"/> <br/>
             <label htmlFor="">Ціна: </label>
                <Field component ={"input"}  name={"Price"}  type="text"/> <br/>
            <label htmlFor="">Місце положення: </label>
                <Field component ={"input"}  name={"location"}  type="text"/>  <br/>
            <label htmlFor="">Каталог: </label>
                <Field  component ={select} type="Каталог" name={"Category"}  Catalog={props.Catalog} newLotParametr={props.newLotParametr} option={props.optionCategory} /> 
            <label htmlFor="">Під каталог: </label>
                <Field component ={select} type="Під каталог" name={"PidCategory"}  Catalog={props.Catalog} newLotParametr={props.newLotParametr}  option={props.optionPodCategory}> {props.optionCategory}</Field>
            <label htmlFor="">Виставити на аукцион:</label>
                <Field className={s.checkbox} component ={"input"} type="checkbox" name={"Torg"}/> <br/>
            <label htmlFor="">Опис:</label>
                <Field className={s.textarea} component ={"textarea"} type="Опис" name={"Opis"}> </Field> <br/>
            <button > Сохранити</button>
            </form>
    )
}


const select= ({ input,newLotParametr,Catalog, option,type, meta: { touched, error, warning } }) => {
    var categoryRef=createRef();
    const newLot=()=>{
        console.log({...input})
        if(type==="Каталог"){
            let action={
                category:categoryRef.current.value,
            }
            newLotParametr(action)
            Catalog()
            }
        }
    return <select  ref={categoryRef} onClick={newLot} {...input}>
             {option}
              </select>       
  }

    const file_upload= ({ input, type, meta: { touched, error, warning } }) => {
        delete input.value
        return (
            <div>
            <label htmlFor="">Виберіть фото:  </label>
            <input {...input} type={type}/>
        </div>
        )
    }

const ReduxFormUpdate=reduxForm({form:"updateform"})(UpdateForm)

export default UpdateLot;