import { postPlusLotsBascket, getBascket,getLotId } from "../../api/api"

let _state ={
    bascket:[],
}
const PageReducer =(state=_state,action)=>{
    switch (action.type) { 
           case "PlusLotBascket":{
            let copyState={...state}
            copyState.bascket=[...state.bascket]
            copyState.bascket.push(action.bascket)
            return copyState}    
            case "DeletLotBascket":{
            
                let copyState={...state}
                copyState.bascket=[...state.bascket]
               for (var i=0;i<copyState.bascket.length;i++){
                   if ( copyState.bascket[i].id===action.idbascket)
                   copyState.bascket.splice(i, 1);
               }
               
               return copyState
            }
            default:
                return state
   }  
}
    export const DeletLotBascket=(id)=>({type:"DeletLotBascket",idbascket:id})
    export const PlusLotBascket=(data)=>({type:"PlusLotBascket",bascket:data})
    export const addBascket=(lot)=>({
        type:"PlusLotBascket",  
        idbascket:lot.idbascket,
        id:lot.id,
        name:lot.name,
        price:lot.price,
        date:lot.date,
        category:lot.category,
        datafile:lot.datafile,
        podCategory:lot.podCategory,
        text:lot.text})
    export const postPlusLotsBascketThunk=(obj)=>{
        return (dispatch)=>{
            postPlusLotsBascket(obj)
        }
    } 
    export const getBascketThunk=()=>{
        return (dispatch)=>{
         
            getBascket().then(dataBascket=>{
                for(var i=0;i<dataBascket.length;i++)
                {
                    let idbas=dataBascket[i].id;
                    getLotId(dataBascket[i].idlot).then(data=>{
                            if (data.length!==0){
                                let pushlots ={
                                    idbascket:idbas,
                                    id:data[0].id,
                                    iduser:data[0].iduser,
                                    name:data[0].name,
                                    price:data[0].price,
                                    date:data[0].date,
                                    boolbascket:data[0].boolbascket,
                                    nameCategory:data[0].nameCategory,
                                    namePodCategory:data[0].namePodCategory,
                                    opis:data[0].opis,
                                    datafile:data[0].datafile,
                                    auk:data[0].auk
                                }
                            
                                dispatch(PlusLotBascket(pushlots))
                            }
                          
                    })
                 }
                })
                 
            }
        }

               

export default PageReducer;