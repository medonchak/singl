import React from 'react'
import s from './bascket.module.css' 
import Lot from '../lot/lot'
import { getDeletLots } from '../../api/api'
import { Redirect } from 'react-router-dom';
import izbranoe2 from '../../img/2.png'


const Bascket =(props)=>{
    let deltlots=(action)=>{
        props.DeletLotBascket(action.id);
        getDeletLots(action)
    }

    let bool=(boole)=>{
            return {
                textButton:izbranoe2,
                bool:false
            }
            }
 
    let component=props.bascket.map(c=><Lot but={false} user={props.user} boolB={bool} isAuth={props.isAuth} 
        boolbascket={c.boolbascket} deletBascket={deltlots} idbascket={c.idbascket}  id={c.id} name={c.name} 
        text={c.text} price={c.price} date={c.date} datafile={c.datafile} category={c.category} podcategory={c.podcategory}/>)
   
    if(!props.isAuth) return <Redirect to="/login"/>
        
    return <div className={s.bascket}>
        <img src={props.url} alt=""/>
          {component}
    </div>
}
export default Bascket