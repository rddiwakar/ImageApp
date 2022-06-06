
import { ActionType } from "../../react-app-env";
import { SEARCH_ERROR, SEARCH_REQUEST, SEARCH_SUCCESS } from "../Constant/constants";


const initialImageState={
    selectData:[],
    selectLoading:true,
}

const SelectedImageReducer = (state=initialImageState,action:ActionType) =>{
    switch (action.type) {
        case SEARCH_REQUEST :
            return {
                ...state,
                selectLoading:true,
            }
        case SEARCH_SUCCESS :
            return {
                ...state,
                selectLoading:false,
                selectData:action.payload
            }
        case SEARCH_ERROR :
            return {
                ...state,
                selectLoading:false,
                selectData:action.payload
            }        
        default:
            return state
    }
}
export default SelectedImageReducer;