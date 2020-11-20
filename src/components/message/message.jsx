import React from'react'
import s from './message.module.css'
import {reduxForm,Field } from 'redux-form'
import deleteImg from '../../img/delete.png'
import redactImg from '../../img/redact.png'
import openSocket from 'socket.io-client'
import bulavka from '../../img/bulavka.png'
import { useState } from 'react'
const socket = openSocket.connect('http://localhost:3001')



const MessageLot=(props)=>{
   
        let deleteMes=()=>{
            socket.emit('delete_lot',{bool:"yes"})
            props.deleteMessageThunk(props.id)
        }
       let redactMessage=()=>{
       
           let message=props.message;
           for (let index = 0; index < message.length; index++) {
               if(message[index].id===props.id){
                message[index].text=props.textmessage
               }   
           }
           let obj={
               id:props.id,
               text:props.textmessage
           }
              
        props.deredactMes(message,obj)
       }
       let redactMes=()=>{
           let obj={
               text:props.text,
               id:props.id
           }
        props.redactMes(obj)
       }

        if(props.idsen!==props.iduser)
        
        return  (   <div className={s.styleMessageOne}>
                    <div  className={s.messageOne}> 
                         {props.text[0]==="h" ? <img src={props.text} alt="" /> : <span  >  {props.text} </span> }  
                    </div>
                    <label htmlFor="">09:52/11.20</label>
                     </div>
                  
                )
        return  ( <div  className={s.styleMessageTwo} > 
                    {props.redactId!==props.id && <div className={s.messageTwo}>
                        {props.text[0]==="h" ? <img src={props.text} alt="" /> : <span  >  {props.text} </span> }  
                    </div>}
                    {props.redactId===props.id && <div className={s.messageTwo}>
                        <input autoFocus={true} onChange={props.onChangeRedactMessage} onBlur={redactMessage}  value={props.textmessage} /> 
                     
                    </div>}
                    <div>
                    <label htmlFor="">{props.date}</label>
                    <div >  
                    <img className={s.imgBut} onClick={deleteMes} src={deleteImg} alt=""/>
                    <img className={s.imgBut} onClick={redactMes} src={redactImg} alt=""/>
                    </div>
                   
                    </div>
                 
                    </div>
                )
}
class Message extends React.Component {
    state={
        id:0,
        test:true,
        message:[],
        textmessage:"",
    }
    componentDidMount(){
        
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.message.messageLot!==this.props.message.messageLot){
            
        this.setState({
            message:this.props.message.messageLot,
        })
        socket.off('delete')
        socket.on('delete',(data)=>{
            this.props.getSelectMessageLotThunk(this.props.match.params.iddialogs)
        })
        socket.off('test')
        socket.on('test',(data)=>{
            this.props.getSelectMessageLotThunk(this.props.match.params.iddialogs)
        })
    
        }
       
    }
    redactMes(data){
        this.setState({
            id:data.id,
            test:true,
            textmessage:data.text
        })
    }
    deredactMes(obj,message){
        this.setState({
            id:0,
            message:obj
        })
        this.props.updateMessageThunk(message)
    }
    onChangeRedactMessage(e){
        this.setState({
            textmessage:e.currentTarget.value
        })
    }
    render(){ 
        const onSubmit =(data)=>{ 
            let date = new Date();
            if(this.props.message.dataDialogs.idRec===this.props.user.id)
            {   let message={
                idrec:this.props.message.dataDialogs.idSen,
                idsen:this.props.user.id,
                idlot:this.props.message.dataDialogs.idLot,
                text:data.text,
                date:date.toLocaleTimeString().slice(0,-3)+"  "+date.toLocaleDateString(),
                iddialogs:this.props.message.dataDialogs.iddialogs,
            }   
                socket.emit('send message',message)
                this.props.postaddMessageThunk(message,data.Foto)
                this.props.getSelectMessageLotThunk(this.props.match.params.iddialogs)}
            else    {
                let message={
                idrec:this.props.message.dataDialogs.idRec,
                idsen:this.props.user.id,
                idlot:this.props.message.dataDialogs.idLot,
                text:data.text,
                date:date.toLocaleTimeString().slice(0,-3)+"  "+date.toLocaleDateString(),
                iddialogs:this.props.message.dataDialogs.iddialogs,
                    }  
                socket.emit('send message',message)
                this.props.postaddMessageThunk(message,data.Foto)
                this.props.getSelectMessageLotThunk(this.props.match.params.iddialogs)
        }
            
            
            let dataDialogs={
                kilkist:this.props.message.messageLot.filter(c=>c.idrec===this.props.user.id).length,
                id:this.props.message.dataDialogs.iddialogs,
            }            
          
          
         }
         //console.log(this.props.message.dataDialogs.name)
         let message=this.state.message.map(c=><MessageLot key={c.id} date={c.date} getSelectMessageLotThunk={this.props.getSelectMessageLotThunk} iddialogs={this.props.message.dataDialogs.iddialogs}  redactId={this.state.id} message={this.state.message} textmessage={this.state.textmessage} onChangeRedactMessage={this.onChangeRedactMessage.bind(this)}  redactMes={this.redactMes.bind(this)} deredactMes={this.deredactMes.bind(this)} 
         test={this.state.test} id={c.id} deleteMessageThunk={this.props.deleteMessageThunk} iduser={this.props.user.id} idsen={c.idsen} text={c.text}/>)
        return(<div className={s.index}>
                <div className={s.indexChild}>
                <div className={s.nameDialogs}><label  htmlFor="">Діалог {this.props.message.dataDialogs.name} </label></div>
                <div className={s.message} > 
                    {message}
                </div>
                <ReduxMessageForm onSubmit={onSubmit} />
                </div>
                </div>
        )
        }
}

const MessageForm=(props)=>{
    let [text,readtext]=useState("0")
    let file =()=>{
        readtext("1")
    }
    return  <form onSubmit={props.handleSubmit}  className={s.form}>
                <Field className={s.textarea} name={"text"}  component={"textarea"} /><br/>
                <div className={s.field}> <Field   component={file_upload} onChange={file} name={"Foto"}  type="file"/><br/> </div>
                <button className={s.button}> {text==="0" ? "Відправити текст" : "Текст + файлов "+text }</button>
            </form>
        }

const file_upload= ({ input, type,name, meta: { touched, error, warning } }) => {
            delete input.value
            return (
                <div className={s.div}>
                    <img className={s.img} src={bulavka} alt=""/>
                  <input className={s.file} name={name} {...input} type={type}/>
              </div>
            )
          }
const ReduxMessageForm=reduxForm({form:"messageForm"})(MessageForm)



export default Message;