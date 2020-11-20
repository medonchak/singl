import React from 'react'
import Lot from '../lot/lot'
import s from './search.module.css'

const SearchPage =(props)=>{
    let bool=(bool)=>{
        if(bool==="true") return {
            textButton:"Вибрано",
            bool:true
        }
        else return {
            textButton:"У вибрані",
            bool:false
        }
            }
    
    let component=props.lote.map(c=><Lot textBut="У вибрані" booleanBascketState={props.actionBool} but={true} boolB={bool} boolbascket={c.boolbascket} postPlusLotsBascket={props.postPlusLotsBascketThunk}  id={c.id} name={c.name} text={c.text} price={c.price} date={c.date} datafile={c.datafile} category={c.category} podcategory={c.podcategory}/>)
    return <div className={s.search}>
        {component}
    </div>
}
export default SearchPage