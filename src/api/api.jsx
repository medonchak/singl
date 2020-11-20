import  * as axios from 'axios'
//let url="http://192.168.0.101:3001"
//Get
export const getLots=(katalog)=>{
    return axios.get("http://localhost:3001/katalog/"+katalog+"",{withCredentials:true})
    .then(response=> {
        return response
})
}
export const getLotsAuk=()=>{
    return axios.get("http://localhost:3001/auk",{withCredentials:true})
    .then(response=> {
        return response
})
}
export const getMyLots=(id)=>{
    return axios.get("http://localhost:3001/mylots/"+id+"",{withCredentials:true})
    .then(response=> {
        return response
})
}
export const getLotId=(id)=>{
    return axios.get("http://localhost:3001/lot/"+id+"",{withCredentials:true})
    .then(response=> {
        return response.data
})
}
export const getBascket=()=>{
   
    return axios.get("http://localhost:3001/bascket",{withCredentials:true})
    .then(response=> {
        return response.data
})
}
export const getDeletLots=(obj)=>{
    return axios.post("http://localhost:3001/bascket",obj,{withCredentials:true})
    .then(response=> {
        return response.data
})
}
export const deleteMessage=(id) => {
    return axios.get("http://localhost:3001/message/"+id+"",{withCredentials:true})
    .then(response=> {
       return response.data
    })
}
export const getMessageLot=(iddialogs) => {
    return axios.get("http://localhost:3001/message/lot/"+iddialogs+"",{withCredentials:true})
    .then(response=> {
       return response.data
    })
}
export const deleteMessageId=(id) => {
    return axios.get("http://localhost:3001/message/"+id+"",{withCredentials:true})
    .then(response=> {
       return response.data
    })
}
export const getOneDialogs=(iddialogs) => {
   
    return axios.get("http://localhost:3001/dialogs/"+iddialogs+"",{withCredentials:true})
    .then(response=> {
       return response.data
    })
}
export const getDataLotDialogs=(idlot) => {
    
    return axios.get("http://localhost:3001/lotDataDialogs/"+idlot+"",{withCredentials:true})
    .then(response=> {return response.data})
}
export const getDialogs=(iduser) => {
    return axios.get("http://localhost:3001/message/users/"+iduser+"",{withCredentials:true})
    .then(response=> {
       return response.data
    })
}
export const getAuth=()=>{
    return axios.get("http://localhost:3001/auth",{withCredentials:true})
    .then(response=>
        {return response.data}
        )
}
export const deleteDialogs=(id) => {
    
    return axios.get("http://localhost:3001/delete-dialogs/"+id+"",{withCredentials:true})
    .then(response=>{
        return response.data}
        )
}
export const getLogout=()=>{
    return axios.get("http://localhost:3001/logout",{withCredentials:true})
    .then(response=>
        {return response.data}
        )
}
export const deleteLot=(idlot)=>{
    
    return axios.get("http://localhost:3001/deletelot/"+idlot+"",{withCredentials:true})
}
export const getupdateLot=(id)=>{
    return axios.get("http://localhost:3001/updateLot/"+id+"",{withCredentials:true})
    .then(response=>
        {return response.data}
        )
}
export const getKilkistSms=(data) => {
    return axios.get("http://localhost:3001/message/kilkistSms",{withCredentials:true})
    .then(response=> {
   
       return response.data
    })
}
//Post
export const LoginUsers=(name,password)=>{
    return axios.post("http://localhost:3001/login",{name,password},{withCredentials:true})
    .then(response=> {
       return response
    })
}
export const SignupUsers=(name,password)=>{
    return axios.post("http://localhost:3001/signup",{name,password},{withCredentials:true})
  .then(response=> {
      return response
   })
}
export const postaddMessage=(message) => {
    return axios.post("http://localhost:3001/message",message,{withCredentials:true})
    .then(response=> {
       return response
    })
}
export const postDialogs=(data)=>{
    return axios.post("http://localhost:3001/dialogs",data,{withCredentials:true})
    .then(response=>
        {
            return response.data}
        )
}
export const uploadFile=(foto)=>{
    let formData = new FormData();
    formData.append('file',foto)

    return axios.post("http://localhost:3001/fileUpload",formData,{
        headers: {
            "Contetnt-Type":"multipart/form-data" 
        }
    }).then(response=>{
        return response.data
    })
}
export const addLot=(lot,catalog,foto)=>{
    let date=new Date();

    let data= {
        name:lot.Name,
        category:lot.Category,
        pidcategory:lot.PidCategory,
        price:lot.Price,
        date:date.toLocaleTimeString().slice(0,-3)+"  "+date.toLocaleDateString(),
        location:lot.location,
        katalog:catalog,
        opis:lot.Opis,
        auk:lot.Torg,
        img:foto

    }
    debugger;
    return axios.post("http://localhost:3001/lot",{data},{withCredentials:true})
}
export const setingsEmail=(email)=>{
    return axios.post("http://localhost:3001/setingsEmail",{email},{withCredentials:true})

}
export const setingsKontakt=(kontakt)=>{
    return axios.post("http://localhost:3001/setingsKontakt",{kontakt},{withCredentials:true})
}
export const updateLot=(lot,catalog)=>{
    let data= {
        id:lot.id,
        type:lot.type,
        text:lot.text

    }
    return axios.post("http://localhost:3001/updateLot",{data},{withCredentials:true})
}
export const postPlusLotsBascket=(obj)=>{
    axios.post("http://localhost:3001/katalog",obj,{withCredentials:true})
    .then(response=> {
        return response.data
    })
}
export const postSearch=(search) => {
    return axios.post("http://localhost:3001/search",search,{withCredentials:true})
    .then(response=> {
       return response.data
    })
}
export const updateMessage=(message) => {
    return axios.post("http://localhost:3001/messagePost",message,{withCredentials:true})
    .then(response=> {
       return response.data
    })
}
export const updateDialogs=(data) => {
    return axios.post("http://localhost:3001/updateKilkistMessage",data,{withCredentials:true})
    .then(response=> {
       return response.data
    })
}
export const updateUserKilkistMessage=(data) => {
    return axios.post("http://localhost:3001/updateUserKilkistMessage",{kilkist:data},{withCredentials:true})
    .then(response=> {
       return response.data
    })
}