
import { ActionType } from "../react-app-env";
import { DELETE_CHECKED, FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./constants";

type InitialImageStatetype ={
    data:any ,
    loading:boolean
}
const initialImageState:InitialImageStatetype={
    data:[],
    loading:true,
}

const ImageReducer = (state=initialImageState,action:ActionType) =>{
    switch (action.type) {
        case FETCH_REQUEST :
            return {
                ...state,
                loading:true,
            }
        case FETCH_SUCCESS :
            return {
                ...state,
                loading:false,
                data:action.payload
            }
        case FETCH_ERROR :
            return {
                ...state,
                loading:false,
                data:action.payload
            }
        case DELETE_CHECKED :
            let actionArr = action.payload
            const results = state.data.filter(({ id: id1 }:any) => !action.payload.some(({ id: id2 }:any) => id2 === id1));
            
            return {
                data:results,
                loading:false
            }           
        default:
            return state
    }
}
export default ImageReducer;