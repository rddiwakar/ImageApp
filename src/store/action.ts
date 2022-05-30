import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { FetchImage } from "../service/api";
import { DELETE_CHECKED, FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./constants";
import { RootState } from "./store";

export const fetchImages = (query:string):ThunkAction<void,RootState,unknown,AnyAction>=>{

    const success:(data:any)=>any = (data) =>{
        return {
            type: FETCH_SUCCESS, 
            payload:data
        }
    };
    const fail:(error:any)=>any = (error)=>{
        return {
            type:FETCH_ERROR,
            payload:error
        }
    };
    const request:()=>any = ()=>({type: FETCH_REQUEST})

    return (dispatch)=>{
            dispatch(request)
            FetchImage(query)
                .then(res=>{
                    dispatch(success(res.data.results)
                )})
                .catch(error=>dispatch(fail(error)))
        }   
}
export const deleteAction =(data:any)=>{
    return{
        type:DELETE_CHECKED,
        payload:data
    }
}