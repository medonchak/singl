import React, { createRef } from 'react'
import s from './addlot.module.css'
import { Redirect} from 'react-router-dom';
import {reduxForm,Field } from 'redux-form';
import { useState } from 'react';

const AddLot =(props)=>{
    let optionCategory=props.category.map(c=><option key={c.id} value={c.category}>{c.category}</option>)
  
    let optionPodCategory=props.catalog.map(c=><option key={c.id} value={c.name}> {c.name}</option>)      
    
    const onSubmit =(data)=>{  
       props.addLotThunk(data,props.lot.newKatalog,props.lot.dowFile)

    }
    if(!props.isAuth) return <Redirect to="/login"/>
    return ( 
        <ReduxFormAdd {...props} optionCategory={optionCategory} optionPodCategory={optionPodCategory} onSubmit={onSubmit}/>
    )
}

const AddForm =(props)=>{
    let [img,redactImg]=useState({file: '',imagePreviewUrl: ''})
    let test;
let downloadFoto=(e)=>{
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
        let obj={
            _file:file,
            imagePreviewUrl:reader.result
        }
        redactImg(obj)
    }
    reader.readAsDataURL(file)
    props.uploadFileThunk(e.target.files[0])
}

if(props.lot.dowFile){
    test=props.lot.dowFile
    console.log(test)
}

    return(
<form  onSubmit={props.handleSubmit} className={s.form}>

    {props.lot.dowFile && <div><img src={img.imagePreviewUrl} alt=""/></div> }
    
           <div > <Field   component={file_upload} name={"Foto"} onChange={downloadFoto} type="file"/><br/> </div>
           
           <div className={s.conteiner}>
                    <label className={s.label} >Назва: </label> 
                <div className={s.field}>
                    <Field  className={s.inp}  component={"input"}  name={"Name"}  type="text"/>  <br/>
                </div>
           </div>

            <div className={s.conteiner}>
                    <label htmlFor="">Ціна: </label>
                <div className={s.field}>
                    <Field className={s.inp} component ={"input"}  name={"Price"}  type="text"/>  <br/>
                </div>
            </div>
           
           <div className={s.conteiner}>
                    <label htmlFor="">Місце положення: </label>
                <div className={s.field}>
                    <Field className={s.inp} component ={"input"}  name={"location"}  type="text"/>  <br/>
                </div>
           </div>
           
           <div className={s.conteiner}>
                    <label htmlFor="">Каталог: </label>
                <div className={s.field}>
                    <Field className={s.inp}  component ={select} type="Каталог" name={"Category"}  Catalog={props.Catalog} newLotParametr={props.newLotParametr} option={props.optionCategory} />
                </div>
           </div>
           
           <div className={s.conteiner}> 
                    <label htmlFor="">Під каталог: </label>
                <div className={s.field}>
                    <Field className={s.inp} component ={select} type="Під каталог" name={"PidCategory"}  Catalog={props.Catalog} newLotParametr={props.newLotParametr}  option={props.optionPodCategory}> {props.optionCategory}</Field><br/>
                </div>
           </div>

           <div className={s.conteiner}>
                    <label htmlFor="">Виставити на аукцион:</label>
                <div className={s.field}>
                    <Field className={s.inp} className={s.checkbox} component ={"input"} type="checkbox" name={"Torg"}/>
                </div>
           </div>

           <div className={s.conteiner}>
                    <label htmlFor="">Опис:</label>
                <div className={s.field}>
                    <Field  className={s.textarea} component ={"textarea"} type="Опис" name={"Opis"}> </Field><br/>
                </div>
           </div>

                <button className={s.but}> Добавити</button>
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
    return <select className={s.select} ref={categoryRef} onClick={newLot} {...input}>
             {option}
              </select>       
  }
// const select= (props) => {

 
//     return <select  ref={categoryRef} onChange={newLot}  >
//               {props.option}
//               </select>       
//   }

const file_upload= ({ input, type, meta: { touched, error, warning } }) => {
    delete input.value
    return (
        <div className={s.fileUpload}>
          <div><label htmlFor="">Виберіть фото:  </label></div>
          <div>
          <input {...input} type={type}/>
          </div>
      </div>
    )
  }

const ReduxFormAdd=reduxForm({form:"addLots"})(AddForm)

export default AddLot;