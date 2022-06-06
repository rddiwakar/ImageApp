import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { SearchImage } from "../../service/api";
import { SEARCH_ERROR, SEARCH_REQUEST, SEARCH_SUCCESS } from "../Constant/constants";
import { RootState } from "../store";

export const selectFetchImages = (query:string):ThunkAction<void,RootState,unknown,AnyAction>=>{

    const success:(data:any)=>any = (data) =>{
        return {
            type: SEARCH_SUCCESS, 
            payload:data
        }
    };
    const fail:(error:any)=>any = (error)=>{
        return {
            type:SEARCH_ERROR,
            payload:error
        }
    };
    const request:()=>any = ()=>({type: SEARCH_REQUEST})

    return (dispatch)=>{
            dispatch(request)
            SearchImage(query)
                .then(res=>{
                    dispatch(success(res.data.results)
                )})
                .catch(error=>dispatch(fail(error)))
        }   
}