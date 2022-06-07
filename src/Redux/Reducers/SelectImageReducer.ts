
import { ActionType } from "../../react-app-env";
import { SELECT_IMAGE } from "../Constant/selectpageConstant";

let initialImageState = {
    image:{},
    hover:false
}
export const SelectPageImageReducer = (state=initialImageState,action:ActionType)=>{
    switch(action.type){
        case SELECT_IMAGE:
            return {
                image:action.payload,
                hover:true
            }
        default :
            return state    
    }
}