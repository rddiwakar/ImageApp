import axios from "axios";
const api = "https://api.unsplash.com/"
const Access_Key = "fyTKlaXaEYeGRW9hsblx8219V1s43vWSpEiRub068d0"
const FetchImage = (query:String ='random')=>{
    return axios.get(`${api}search/photos?query=${query}&client_id=${Access_Key}`)    
}
const SearchImage = (query:String)=>{
    return axios.get(`${api}search/photos?query=${query}&client_id=${Access_Key}`)
}

export {FetchImage,SearchImage}
