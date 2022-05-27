import axios from "axios";
const api = "https://api.unsplash.com/"
const FetchImage = ()=>{
    return axios.get(`${api}photos/random?count=20`)    
}
const SearchImage = (query:String)=>{
    return axios.get(`${api}photos?query=${query}`)
}

export {FetchImage,SearchImage}
