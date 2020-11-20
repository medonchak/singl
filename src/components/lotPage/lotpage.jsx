import React from 'react'
import s from './lotpage.module.css'
import {reduxForm,Field } from 'redux-form'
import redact from '../../img/redact.png'



const MessageForm=(props)=>{ 
    return  <form onSubmit={props.handleSubmit}  className={s.form}>
                <Field className={s.textarea} name={"text"}  component={"textarea"} /><br/>
                <button className={s.button}>Відправити повідомлення</button>
            </form>
        }
const ReduxAddPostForm=reduxForm({form:"AddPostForm"})(MessageForm)

class Lot extends React.Component {
    state={
        name:"",
        price:"",
        number:"",
        opis:"",
        nameBoolean:true,
        priceBoolean:true,
        numberBoolean:true,
        opisBoolean:true,
        redact:false,
        class:"",
        datafile:''
    }
    componentDidUpdate(prevProps, prevState){
        if (this.props.lot !== prevProps.lot)
        if(this.state.name==="")
        this.setState({
            name:this.props.lot.name,
            price:this.props.lot.price,
            number:this.props.lot.number,
            opis:this.props.lot.opis,
            datafile:this.props.lot.datafile
        })
    }
    onRedact(){
        
        if(!this.state.redact)
        {
            alert("Для редагування нажміть два рази на виділені елементи")
            this.setState({
                redact:true,
                class:s.span
            })
        }
        else{
            this.setState({
                redact:false,
                class:s.s
            })
        }
       
    }
    onChangeName(e){
        this.setState({
            name:e.currentTarget.value
        })
    }
    onChangePrice(e){
        this.setState({
            price:e.currentTarget.value
        })
    }
    onChangeOpis(e){
        this.setState({
            opis:e.currentTarget.value
        })
    }
    onChangeNumber(e){
        this.setState({
            number:e.currentTarget.value
        })
    }
    RN(){
        if(this.state.redact)
        this.setState({
            nameBoolean:false
        })
    }
    DRN(){
        this.setState({
            nameBoolean:true,

        })
        let lot ={
            id:this.props.lot.id,
            type:"name",
            text:this.state.name
        }
       this.props.postUpdateLotThunk(lot)
    }
    RP(){
        if(this.state.redact)
        this.setState({
            priceBoolean:false,
        })
    }
    DRP(){
        this.setState({
            priceBoolean:true,
        })
        let lot ={
            id:this.props.lot.id,
            type:"price",
            text:this.state.price
        }
       this.props.postUpdateLotThunk(lot)
    }
    RNUM(){
        if(this.state.redact)
        this.setState({
            numberBoolean:false,
        })
    }
    DRNUM(){
        this.setState({
            numberBoolean:true,
        })
   
    }
    RO(){
        if(this.state.redact)
        this.setState({
            opisBoolean:false,
        })
    }
    DRO(){
        this.setState({
            opisBoolean:true,
        })
        let lot ={
            id:this.props.lot.id,
            type:"opis",
            text:this.state.opis
        }
       this.props.postUpdateLotThunk(lot)
    }
    render(){
       
        const onSubmit =(data)=>{ 
            let message={
                idrec:this.props.dataDialogs.idRec,
                idsen:this.props.user.id,
                idlot:this.props.dataDialogs.idLot,
                text:data.text,
                iddialogs:this.props.dataDialogs.iddialogs,
            }   
            this.props.postaddMessageThunk(message)
            this.props.getSelectMessageLotThunk(this.props.dataDialogs.iddialogs)
         }
        return <div className={s.page}>
            <div className={s.imgLot} ><img className={s.img} src={this.state.datafile} alt=""/>
          
            </div>
        
            <div  className={s.item} > 
                {this.state.nameBoolean && <div>Назва:
                    <span className={this.state.class} onClick={this.RN.bind(this)} > {this.state.name}</span>
                </div> }
                
                {!this.state.nameBoolean && <div>Назва:
                    <input onChange={this.onChangeName.bind(this)} autoFocus={true} value={this.state.name} onBlur={this.DRN.bind(this)} />
                </div> }
                <span>Дата створення:  {this.props.lot.date}</span>  
            </div>
            <div className={s.item}>
                {this.state.priceBoolean && <div>  Ціна:
                    <span className={this.state.class} onClick={this.RP.bind(this)} >  {this.state.price} </span>  
                </div>}
                
                {!this.state.priceBoolean && <div> Ціна:
                    <input onChange={this.onChangePrice.bind(this)} autoFocus={true} value={this.state.price} onBlur={this.DRP.bind(this)} />
                </div> } 
            <div>  
                    <span>Категорія:  {this.props.lot.nameCategory}</span><br/>
                    <span>Каталог:   {this.props.lot.namePodCategory}</span>
            </div>
            </div>
            <div className={s.item}>
                {this.state.numberBoolean && <div> Номер телефону:
                    <span className={this.state.class} onClick={this.RNUM.bind(this)} > 0685476461  {this.state.number} </span>  
                </div>}
                
                {!this.state.numberBoolean && <div> Номер телефону:
                    <input onChange={this.onChangeNumber.bind(this)} autoFocus={true} value={this.state.number} onBlur={this.DRNUM.bind(this)} />
                </div> } 
               
                <div> 
                    <span  > Город:  {this.props.lot.location} </span>  
                </div>
               
            </div>
            <div className={s.item}>
                    <span>Опис:</span>
                    {this.state.opisBoolean && <div > 
                    <span className={this.state.class} onClick={this.RO.bind(this)} >  {this.state.opis} </span>  
                    </div>}
                
                    {!this.state.opisBoolean && <div>
                    <textarea autoFocus={true} onChange={this.onChangeOpis.bind(this)} value={this.state.opis} onBlur={this.DRO.bind(this)} />
                    </div> } 
            </div>
        
            <div className={s.textOpis}> {this.props.text}</div>
            <div>               
                </div>
                <div className={s.ButtonPage}>
                <ReduxAddPostForm onSubmit={onSubmit} /> 
                {this.props.lot.iduser===this.props.user.id &&
                <div className={s.redactImg}>
                <img  onClick={this.onRedact.bind(this)} src={redact} alt=""/>
                </div>}
                </div>
            </div>
    
            
        }
    }
const LotPage =(props)=>{
  
        return <Lot {...props}/>
}

export default LotPage