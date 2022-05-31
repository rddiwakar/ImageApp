
import { SELECT_CHECKED, SELECT_UNCHECKED,ALL_CHECKED, REMOVE_CHECKED}  from "./constant";

type ActionProps ={
    type: String,
    payload:any
}


function ReducerAdd (state=[],action:ActionProps){
    switch(action.type) {
        case SELECT_CHECKED:
            return [...state,action.payload] 
        case SELECT_UNCHECKED:
            const checkedState = state.filter((item:any)=>item.id !== action.payload)
            return checkedState
        case REMOVE_CHECKED:   
            return []
        case ALL_CHECKED:
            return [...state,...action.payload]        
        default:
            return state        
    }
}
export default ReducerAdd;