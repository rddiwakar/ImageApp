
import { ActionType } from "../react-app-env";
import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./constants";


const initialImageState={
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
        default:
            return state
    }
}
export default ImageReducer;