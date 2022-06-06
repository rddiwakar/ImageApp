import { ADD_CHECKED, ALL_CHECKED, REMOVE_CHECKED, SELECT_CHECKED, SELECT_UNCHECKED } from "../Constant/renameconstant"

export const selectCheckedAction =(data:any)=>{
    return {
        type: SELECT_CHECKED,
        payload:data
    }
}
export const selectUncheckedAction =(id:string) =>{
    return {
        type:SELECT_UNCHECKED,
        payload: id
    }
}
export const AllCheckedAction = (data:any)=>{
    return{
        type:ALL_CHECKED,
        payload:data
    }
}
export const removeCheckedAction =() =>{
    return{
        type:REMOVE_CHECKED
    }
}

// export const sAddcheckedAction =(id:number) =>{
//     return {
//         type:ADD_CHECKED,
//         payload: data
//     }
// }