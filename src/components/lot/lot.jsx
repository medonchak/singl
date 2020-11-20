import React from 'react'
import s from './lot.module.css'
import { NavLink } from 'react-router-dom'
import deleteImg from '../../img/delete.png'

const But =(props)=>{
    
    let bool=()=>{
        return props.boolB(props.boolbascket)
    }
    let plusLotBascket=()=>{
            if (props.but===true && bool().bool===false) {
               
                    let lotAction ={
                        iduser:props.user.id,
                        idbascket:props.idbascket,
                        id:props.id,
                        name:props.name,
                        price:props.price,
                        date:props.date,
                        category:props.category,
                        podCategory:props.podCategory,
                        text:props.text
                }
                let actionBool ={
                    id:props.id,
                    bool:"true"
                    }
                props.booleanBascketState(actionBool)
                props.postPlusLotsBascket(lotAction)
                }
            else if (props.but===true && bool().bool===true){
            
                let lotAction ={
                    idbascket:props.idbascket,
                    id:props.id,
                    name:props.name,
                    price:props.price,
                    date:props.date,
                    category:props.category,
                    podCategory:props.podCategory,
                    text:props.text,
                    type:"DeletLotBascket"
                }
                let actionBool ={
                    id:props.id,
                    bool:"false"
                    }
                props.booleanBascketState(actionBool)
                props.deletBascket(lotAction)
            }
            else if (bool().bool===false){
              
                let lotAction ={
                    idbascket:props.idbascket,
                    id:props.id,
                    name:props.name,
                    price:props.price,
                    date:props.date,
                    category:props.category,
                    podCategory:props.podCategory,
                    text:props.text,
                    type:"DeletLotBascket"
                }
          
                props.deletBascket(lotAction)
                }
        }
 

    if(!props.isAuth || props.user.id===props.iduser) return <div></div>   
        return( <div  className={s.but}> 

            <img className={s.imgBut}  onClick={plusLotBascket}  src={bool().textButton} alt=""/>
            </div>)
}
const DeleteBut=(props)=>{
    let deleteLot=()=>{
        props.deleteLot(props.id)
    }
    if(!props.isAuth || props.user.id!==props.iduser) return <div></div>
    return ( <div className={s.but}>
                <img className={s.imgBut} onClick={deleteLot} src={deleteImg} alt=""/>
            </div>)
}
const Lot =(props)=>{
    let DialogsThunk=()=>{
        if (props.isAuth){
            let dialogs={
                name:props.name,
                id_user:props.iduser,
                id_lot:props.id,
                id_sender:props.user.id
            }
            if(props.iduser!==props.user.id )
            props.postDialogsThunk(dialogs)
        }
        else {
        }
    }
    return <div className={s.lot}>
        <NavLink onClick={DialogsThunk}  className={s.text} to={"/lot/"+props.id} >
            <div>
            <img className={s.img} src={props.datafile} alt=""/><br/>
            <span>{props.name}</span><br/>
            <span>Ціна: {props.price}</span><br/>
            <span>Добалено: {props.date}</span><br/>
            </div>
            </NavLink>
            <But {...props}/>
            <DeleteBut {...props}/>
    </div>
}
export default Lot