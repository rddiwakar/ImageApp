import { ADD_CHECKED, SELECT_CHECKED, SELECT_UNCHECKED } from "./constant"

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

// export const sAddcheckedAction =(id:number) =>{
//     return {
//         type:ADD_CHECKED,
//         payload: data
//     }
// }