import React, { useState, useEffect } from 'react';
import Lot from '../lot/lot'
import s from './page.module.css'
import izbranoe from '../../img/1.png'
import izbranoe2 from '../../img/2.png'
import { getDeletLots } from '../../api/api'
import MegaSearch from '../megaSearch/megaSearch'
import { NavLink } from 'react-router-dom'  
import MegaSearchContainer from '../megaSearch/megaSearchContainer';

let byField=(field)=>{
    return (a, b) => a[field] > b[field] ? 1 : -1;
    }

const Page =(props)=>{
  
        let [componentSort,redactComponent]=useState([])
        let [prevProps,redactPrevprops]=useState([])
        let [sortData,redactSortData]=useState("")
        let [filter,redactFilter]=useState({})

      
        let deltlots=(action)=>{
            props.DeletLotBascket(action.id);
            getDeletLots(action)
                }
        let bool=(bool)=>{
            if(bool==="true") return {
                textButton:izbranoe2,
                bool:true
            }
            else return {
                textButton:izbranoe,
                bool:false
            }
                }
        
        useEffect(() => {
                    redactComponent(props.component)
                    redactPrevprops(props.component)
                },[props.component,prevProps]);

        useEffect(() => {
            let sortComponent=[...props.component.sort(byField(sortData))]
            redactComp(sortComponent)   
                },[sortData,props.component]); 
       
        let redactComp=(data)=>{
         
            redactComponent(data)
        }
        
        useEffect(()=>{ 
            let filterComponent=props.component.filter(c=>c.price>parseInt(filter.startPrice) && c.price<parseInt(filter.finishPrice) && c.location===filter.city && c.namePodCategory===filter.catalog)
            redactComp(filterComponent)       
        },[filter,props.component])

        let sortLotCB=(data)=>{
                redactSortData(data)
        }   
        
        let filterLot =(data)=>{
           redactFilter(data)
        }

        const ar = [...Array(Math.ceil(componentSort.length/4)+1).keys()].filter(c=> c>0)
        .map(c =><NavLink className={s.navLink} key={c} to={"#"+c}>  <span   className={parseInt(props.location.hash[1])===c ? s.pagination : s.notpagination}>{c}</span> </NavLink>)
        let r=parseInt(props.location.hash.substr(1));
        
        let forward=<NavLink  className={s.navLink}  to={"#"+(r+1)}> <span> {">>"} </span> </NavLink>
        
        let back=<NavLink    className={s.navLink} to={"#"+(r-1)}> <span> {"<<"} </span> </NavLink>
        
        let component=[...componentSort].slice((r*4-4),(r*4))
        .map(c=><Lot key={c.id}  user={props.user} deletBascket={deltlots} isAuth={props.isAuth} deleteLot={props.deleteLotThunk} postDialogsThunk={props.postDialogsThunk} booleanBascketState={props.actionBool} but={true} boolB={bool} boolbascket={c.boolbascket} postPlusLotsBascket={props.postPlusLotsBascketThunk}  id={c.id} name={c.name} datafile={c.datafile} iduser={c.iduser} text={c.text} price={c.price} date={c.date} category={c.category} podcategory={c.podcategory}/>)
       
       return <div  className={s.page}>
        <MegaSearchContainer  filterLot={filterLot} sortLotCB={sortLotCB} />
        {componentSort.length>3 && <div className={s.stege}>{r!==1  && back}{ar.length<=4 ? ar : ar.slice(r-1,r+3)} {r+3<ar.length  && <span>...</span>} {r<ar.length   && <span>{forward}</span>  }</div>}
        <div className={s.component}>
        {component}
        </div>
       
    </div>
} 
export default Page