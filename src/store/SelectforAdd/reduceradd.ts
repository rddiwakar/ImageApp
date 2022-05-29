import {SELECT_CHECKED, SELECT_UNCHECKED}  from "./constant";

type ActionProps ={
    type: String,
    payload:Number
}
const initailAdd ={
    data:[]
}

function ReducerAdd (state=initailAdd,action:ActionProps){
    switch(action.type) {
        case SELECT_CHECKED:
            return {...state,data:action.payload}
        case SELECT_UNCHECKED:
            const newState = state.data.filter((item:any)=>item.id !== action.payload)
            return {data:newState}
        default:
            return state        
    }
}
export default ReducerAdd;