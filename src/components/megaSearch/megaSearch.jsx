import React,{useState} from 'react'
import {reduxForm,Field} from 'redux-form'
import s from './megasearch.module.css'
  const validate = values => {
      const errors = {}
      if (!values.city) {
        errors.city = 'Пусто'
      } 
      if (!values.startPrice) {
          errors.startPrice = 'Пусто'
        } else if (isNaN(Number(values.startPrice))) {
          errors.startPrice = 'Тільки цифри'
        } else if (Number(values.startPrice)<1) {
          errors.startPrice = 'Только больше чем 0'
        }
      if (!values.finishPrice) {
        errors.finishPrice = 'Пусто'
      } else if (isNaN(Number(values.finishPrice))) {
        errors.finishPrice = 'Тільки цифри'
      } else if (Number(values.finishPrice)<Number(values.startPrice)) {
        errors.finishPrice = 'Только больше чем стартовая цена '
      }
      return errors
    }
  const MegaSearch =(props)=>{  
      //
      const onSubmit=(data)=>{
          redactVisybli()
          props.filterLot(data)
      }
      ///state
      let [visibly, f_visibly] = useState(false)
      let [text, f_text] = useState("Включити фільтр")
      let redactVisybli=()=>{
          if(visibly)
          {
              f_visibly(false)
              f_text("Включити фільтр")
          }
      else  {
              f_visibly(true)
              f_text("Виключити фільтр")
              }
      }
      let sortLot=(e)=>{
        props.sortLotCB(e.currentTarget.value)
      }


      ////
    return <div className={s.styleSearch}>
      <label htmlFor="">Сортировать</label>
      <select name="" className={s.styleSelect}  onChange={sortLot} id="">
          <option value="">вибрать</option>
          <option value="price">Ціна</option>
          <option value="date">Дата створення</option>
      </select>
      <button onClick={redactVisybli} className={s.buttonSearch} >{text} </button>
      {visibly && <ReduxFormMegaSearchAdd onSubmit={onSubmit}  {...props}/>}
      </div>
  }
  const renderField = ({ input, placeholder, type, meta: { touched, error } }) => 
  (   <div>
          <input {...input} placeholder={placeholder} type={type}/>
          {touched && error && <span className={s.styleForm}>{error}</span>}
      </div>
    )

  const MegaSearchForm =(props)=>{
    
      return   <form  onSubmit={props.handleSubmit}>
          <Field component={"select"}  name={"catalog"} id="">
          { props.podcategory.map(c=><option key={c.id}>{c.name}</option>)}
          </Field>
          <Field component={renderField} name={"city"} type="text" placeholder="Город"/>    
          <label htmlFor="">Ціна</label>
          <Field component={renderField}  name={"startPrice"} type="text" placeholder="від"/>
          <Field component={renderField}  name={"finishPrice"} type="text" placeholder="до"/>
          <button >Фільтрувати</button>
      </form> 
      }

const ReduxFormMegaSearchAdd=reduxForm({form:"MegaSearch",validate})(MegaSearchForm)
export default MegaSearch