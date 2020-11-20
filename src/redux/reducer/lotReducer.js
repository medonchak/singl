import { getLots,getMyLots, addLot,uploadFile,getBascket,deleteLot,getupdateLot,updateLot,getLotsAuk} from '../../api/api';


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
            name:"vibor",
            category:"Виберіть",
            podcategory:[{name:"Виберіть",id:1}],
            id:1,
        },
        {
           name:"electro",
           category:"Електроніка",
           podcategory:[{name:"Виберіть",id:1},{name:"Смартфони",id:2},{name:"Аксесуари",id:3},{name:"Гарнітура",id:4}],
           id:2,
        },
        {
            name:"transport",
            category:"Транспорт",
            podcategory:[{name:"Виберіть",id:1},{name:"Авто",id:2},{name:"Важкий транспорт",id:3},{name:"Запчастини",id:4},{name:"Мото",id:4}],
            id:3,
         },
        {
            name:"sport",
            category:"Спорт",
            podcategory:[{name:"Виберіть",id:1},{name:"Спорядження",id:2},{name:"Аксесуари",id:3}],
            id:4,
         },
        {
            name:"shmot",
            category:"Одяг",
            podcategory:[{name:"Виберіть",id:1},{name:"Спортивний",id:2},{name:"Класичний",id:3},{name:"Аксесуари",id:4}],
            id:5,
         },
    ],
    newname:"",
    newprice:"",
    newCategory:"Виберіть",
    newKatalog:"Виберіть",
    newTextOpis:"",
    catalog:[{name:"Виберіть",id:1},{name:"Спортивний",id:2},{name:"Класичний",id:3},{name:"Аксесуари",id:4}],
    lots:{},
    dowFile:null,
    lotBascketUser:[],
    goTrueDataLot:false,
    updateLot:{},
    url:''
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
                  
                    copyState.newKatalog=copyState.category[i].name
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

               if(copyStatee.goTrueDataLot!==true){
                copyStatee.lotBascketUser=[...state.lotBascketUser]
               }
                for (let i=0;i<action.lots.length;i++){
                    for (let indexB = 0; indexB < copyStatee.lotBascketUser.length; indexB++) 
                    { 
                        if(action.lots[i].id===copyStatee.lotBascketUser[indexB].idlot ) 
                            {
                                copyStatee.yesDataLot=true;
                                action.lots[i].boolbascket="true"
                                
                            }  
                    }  
                
                }
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
                for(var a=0;a<copyStatee.component.length;a++)
                {
                    if(copyStatee.component[a].id===action.id)
                        copyStatee.component[a].boolbascket=action.bool
                }

                return copyStatee
            }
            case "File":{
                let copyStatee={...state};
                copyStatee.dowFile=action.file;
                return copyStatee
            }
            case "DataBascket":{
                let copyState={...state}
                copyState.lotBascketUser=[...state.lotBascketUser]
                copyState.lotBascketUser=action.data
                copyState.goTrueDataLot=true
                return copyState
            }
            case "DeleteLot":{
                let copyState={...state}
                copyState.component=[...state.component]
                copyState.mylots=[...state.mylots]
                for(var  e=0;e<copyState.mylots.length;e++)
                {
                    if ( copyState.mylots[e].id===action.idlot)
                    copyState.mylots.splice(e, 1);
                }
                for(var q=0;q<copyState.component.length;q++)
                {
                    if ( copyState.component[q].id===action.idlot)
                    copyState.component.splice(q, 1);
                }
               return copyState
            }
            case "UpdateLot":{
                let copyState={...state}
                copyState.component=[...state.component]
       
                copyState.updateLot=action.lot
               return copyState
            }
            case "test":{
                let copyState={...state}
                copyState.url=action.url
               return copyState
            }
            default: return state
    }

}


 ///Create Action

export const newLotParametr=(action)=>({ 
    type:"newLotParametr" , 
    name:action.name,
    price:action.price,
    category:action.category,
    catalog:action.catalog,
    text:action.text})
export const timeLot=(timeLot)=>({type:"timeLots",lots:timeLot})
export const Catalog=()=>({ type:"Catalog"})
export const setLots=(lotspage)=>({ type:"setLots",lots:lotspage})
export const setMyLots=(mylots)=>({ type:"setMyLots",mylots:mylots})
export const actionBool=(actionBool)=>({type:"boolBascket",id:actionBool.id,bool:actionBool.bool})
export const dowFile=(file)=>({type:"File",file:file})
export const getDataBascket=(dataBascket)=>({type:"DataBascket",data:dataBascket})   
export const deleteLotAction=(id)=>({type:"DeleteLot",idlot:id}) 
export const updateLotAction=(data)=>({type:"UpdateLot",lot:data})
export const imgUrl=(urll)=>({type:"test",url:urll})
   
/// Thunk

export const deleteLotThunk =(id)=>{
    return (dispatch)=>{
        deleteLot(id).then(data=>{
            dispatch(deleteLotAction(id))
        })
    }
}
export const setLotsThunkCreate=(name)=>{
   
    return (dispatch)=>{
      
        getLots(name).then(data=>
            {
                dispatch(setLots(data.data))
            }
            )
    }
} 
export const setLotsThunkAuk=(name)=>{
   
    return (dispatch)=>{
      
        getLotsAuk(name).then(data=>
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
export const addLotThunk=(lot,katalog,foto)=>{
    return (dispatch)=>{
        addLot(lot,katalog,foto).then(data=>{
           
        })  
} }
export const uploadFileThunk=(foto)=>{
    return (dispatch)=>{
        uploadFile(foto).then(data=>{
            dispatch(dowFile(data))
        })  
} }
export const getBascketThunk=()=>{
    return (dispatch)=>{
        getBascket().then(data=>dispatch(getDataBascket(data)))
    }
}
export const getUpdateLotThunk=(id)=>{
    return (dispatch)=>{
       
        getupdateLot(id).then(data=>{ 
            dispatch(updateLotAction(data))
        })
    }
}
export const postUpdateLotThunk=(data)=>{
    return (dispatch)=>{
        updateLot(data)
    }
}
export default LotReducer;