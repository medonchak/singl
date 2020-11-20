import { getLots,getMyLots,setingsEmail, setingsKontakt } from '../../api/api';

let _state={
    component:[
        // {id:1,name:"Iphone X",price:5000,text:"Iphone memory 16g",date:"25.09.2020",category:"Електроніка",podCategory:"Смартфони"},
        // {id:2,name:"Iphone 8",price:2000,text:"Iphone memory 16g",date:"21.09.2020",category:"Електроніка",podCategory:"Смартфони"},
        // {id:3,name:"Iphone XR",price:15000,text:"Iphone memory 16g",date:"05.09.2020",category:"Електроніка",podCategory:"Смартфони"},
        // {id:4,name:"Iphone XS",price:45000,text:"Iphone memory 16g",date:"15.09.2020",category:"Електроніка",podCategory:"Смартфони"}
    ],
    mylots:[],
    category:
    [
        {
           name:"electro",
           category:"Електроніка",
           podcategory:["Виберіть","Смартфони","Аксесуари","Гарнітура"]
        },
        {
            name:"transport",
            category:"Транспорт",
            podcategory:["Виберіть","Авто","Важкий транспорт","Запчастини","Мото"]
         },
        {
            name:"sport",
            category:"Спорт",
            podcategory:["Виберіть","Спорядження","Аксесуари"]
         },
        {
            name:"shmot",
            category:"Одяг",
            podcategory:["Виберіть","Спортивний","Класичний","Аксесуари"]
         },
    ],
    newname:"",
    newprice:"",
    newCategory:"Виберіть",
    newKatalog:"Виберіть",
    newTextOpis:"",
    catalog:["Виберіть","Спортивний","Класичний","Аксесуари"],
    lots:{}
}


const LotReducer =(state=_state,action)=>{
     switch (action.type) {

            case "newLotParametr":{
             
                let copyState={...state}
                copyState.newname=action.name;
                copyState.newprice=action.price;
                copyState.newCategory=action.category;
                copyState.newKatalog=action.catalog;
                copyState.newTextOpis=action.text;
                
            return copyState}
            case "Catalog":{

                let copyState={...state}
                copyState.catalog=[...state.catalog];
                for(var i=0;i<copyState.category.length;i++)
                {
                if(copyState.category[i].category===copyState.newCategory)
                {
                    copyState.catalog=copyState.category[i].podcategory
                }
                }

            return copyState}
            case "AddLot":{
                let copyStatee={...state}
                copyStatee.component=[...state.component]
                var newid =state.component.length+1;
                let d=new Date();
                let newdate=d.getHours()+":"+d.getMinutes()
                let newComp={
                    id:newid,
                    name:action.name,
                    price:action.price,
                    date:newdate,
                    category:action.category,
                    catalog:action.catalog,
                    text:action.text
                }
                copyStatee.newname="";
                copyStatee.newprice="";
                copyStatee.newCategory="";
                copyStatee.newKatalog="";
                copyStatee.newTextOpis="";
                copyStatee.component.push(newComp)

            return copyStatee}
            case "setLots":{
                
                let copyStatee={...state};
                copyStatee.component=[...state.component];
                copyStatee.component=action.lots;
                return copyStatee
            }
            case "setMyLots":{
                
                let copyStatee={...state};
                copyStatee.mylots=[...state.mylots];
                copyStatee.mylots=action.mylots;
                return copyStatee
            }
            case "timeLots":{
                let copyStatee={...state};
                copyStatee.lots=action.lots;
                return copyStatee
            }
            case "boolBascket":{
                let copyStatee={...state};
                copyStatee.component=[...state.component];  
                for(var index1=0; index1<copyStatee.component.length;index1++)
                {
                    if(copyStatee.component[index1].id===action.id)
                        copyStatee.component[index1].boolbascket=action.bool
                }

                return copyStatee
            }
            default: return state
    }

}



export const newLotParametr=(action)=>({ 
    type:"newLotParametr" , 
    name:action.name,
    price:action.price,
    category:action.category,
    catalog:action.catalog,
    text:action.text})

export const Catalog=()=>({ type:"Catalog"})

export const setLots=(lotspage)=>({ type:"setLots",lots:lotspage})

export const setMyLots=(mylots)=>({ type:"setMyLots",mylots:mylots})

export const actionBool=(actionBool)=>({type:"boolBascket",id:actionBool.id,bool:actionBool.bool})

export const setLotsThunkCreate=(name)=>{
   
    return (dispatch)=>{
      
        getLots(name).then(data=>
            {
                dispatch(setLots(data.data))
            }
            )
    }
} 

export const setMyLotsThunkCreate=(id)=>{
   
    return (dispatch)=>{
      
        getMyLots(id).then(data=>
            {
                dispatch(setMyLots(data.data))
            }
            )
    }
} 

export const setingsEmailThunk=(email)=>{
    return (dispatch)=>{
        setingsEmail(email)
    }
} 
export const setingsKontaktThunk=(kontakt)=>{
    return (dispatch)=>{
        setingsKontakt(kontakt)
    }
} 

export default LotReducer;