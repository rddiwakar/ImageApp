
import { SELECT_CHECKED, SELECT_UNCHECKED,ALL_CHECKED, REMOVE_CHECKED}  from "../Constant/renameconstant";

type ActionProps ={
    type: String,
    payload:any
}
type StateProps = {
    allChecked:boolean,
    checkedData:any
}
let initialState:StateProps = {
    allChecked:false,
    checkedData:[]
}

function HandleCheck(state=initialState,action:ActionProps){
    switch(action.type) {
        case SELECT_CHECKED:
            const arr = Array.from(new Set([...state.checkedData,action.payload]))
            return {
                ...state,
                checkedData:arr 
            }
        case SELECT_UNCHECKED:
            const checkedState = state.checkedData.filter((item:any)=>item.id !== action.payload)
            return {
                ...state,
                checkedData:checkedState,
            }
        case REMOVE_CHECKED:   
            return {
                allChecked:false,
                checkedData:[]
            }
        case ALL_CHECKED:
            const myarr = Array.from(new Set([...state.checkedData,...action.payload]))
            return {
                allChecked:true,
                checkedData:myarr
            }        
        default:
            return state        
    }
}
export default HandleCheck;