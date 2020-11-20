import React from 'react'
import Lot from '../lot/lot'
import s from './mylots.module.css'


   
const MyLots =(props)=>{
   
    let bool=(bool)=>{
        if(bool==="true") 
            return {
                textButton:"Вибрано",
                bool:true
        }
        else 
            return {
                textButton:"У вибрані",
                bool:false
        }
            }
    let component=props.mylots.map(c=><Lot user={props.user} datafile={c.datafile}  isAuth={props.isAuth} deleteLot={props.deleteLotThunk} booleanBascketState={props.actionBool}  but={true} boolB={bool} boolbascket={c.boolbascket} postPlusLotsBascket={props.postPlusLotsBascketThunk}  id={c.id} iduser={c.iduser} name={c.name} text={c.text} price={c.price} date={c.date} category={c.category} podcategory={c.podcategory}/>)
    return <div className={s.component}>
          {component}
    </div>
}
export default MyLots