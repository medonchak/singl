import React, { useState } from 'react'
import s from './auk.module.css'
import MegaSearch from '../megaSearch/megaSearch'
import { NavLink } from 'react-router-dom'
import MegaSearchContainer from '../megaSearch/megaSearchContainer'



const AukLot =(props)=>{
    const [torg,setingsTorg] = useState(false)
    let activsetTorg =()=>{
        setingsTorg(true)
    }
    let deactivsetTorg =()=>{
        setingsTorg(false)
    }
    return ( <div className={s.lot}>
         <NavLink   className={s.text} to={"/lot/"+props.id} >
        <span>Назва: {props.name}</span><br/>
        <span>Ціна: {props.price}</span><br/>
        <span>Створений: {props.date}</span><br/>
    <label htmlFor="">До закінчення: {props.timeLot}</label><br/>
    </NavLink>
        {!torg && <input type="button" onClick={activsetTorg} value="Зробити ставку"/>}
        {torg && <SpaceTorg  deactivsetTorg={deactivsetTorg}/>}
     
    </div>
    )
}

const SpaceTorg=(props)=>{
    let test=()=>{
        alert("ss")
    }

    return <form>
        <input type="text"  onBlur={props.deactivsetTorg} placeholder="запропонуйте ціну"/>
        <input type="button" onClick={test}  value="зробити ставку"/>
    </form>
}

const Auk =(props)=>{

        let component=props.component.map(c=><AukLot key={c.id}  name={c.name} id={c.id} price={c.price} timeLot={props.auk.timeLot}  date={c.date} />)
    
    return <div >
       <MegaSearchContainer/>
        <div className={s.top}>
          
             <div className={s.component}>
         
         {component}
        </div>
        </div>
       
       

          
    </div>
}
export default Auk