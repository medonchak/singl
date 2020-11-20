import { postSearch } from "../../api/api"


let _state={
    searchLot:[],
    searchText:""
}

const SearchReducer =(state=_state,action)=>{
    switch (action.type) {
           case "SearchLot":{
            let copyState={...state}
            copyState.searchLot=[state.searchLot]
            copyState.searchLot=action.lots;
            copyState.searchText="";
            return copyState
            }
           case "NewSearchText":{
            let copyState={...state}
            copyState.searchText=action.searchText
            return copyState
            }
            default:
                return state
        }
    }

    export const NewSearchText=(textsearch)=>({ type:"NewSearchText",searchText:textsearch})
    export const SearchLot=(lotspage)=>({ type:"SearchLot",lots:lotspage})

    export const postSearchThunk=(text)=>{
      
        return (dispatch)=>{
            let search={
                text:text
            }
          
            postSearch(search).then(data=>{dispatch(SearchLot(data))})
        }
    } 
export default SearchReducer;