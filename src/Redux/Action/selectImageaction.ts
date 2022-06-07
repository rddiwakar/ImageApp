import { SELECT_IMAGE } from "../Constant/selectpageConstant"

export const selectImageAction =(image:any)=>{
    return {
        type:SELECT_IMAGE,
        payload:image
    }
}