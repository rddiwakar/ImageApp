import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { ActionType } from "../react-app-env";
import { FetchImage } from "../service/api";
import { FETCH_ERROR, FETCH_REQUEST, FETCH_SUCCESS } from "./constants";
import { RootState } from "./store";

export const fetchImages = ():ThunkAction<void,RootState,unknown,AnyAction>=>{
    const success:(data:any)=>any = (data) =>{
        return {
            type: FETCH_SUCCESS, 
            payload:data
        }
    };
    const fail = (error:String)=>{
        return {
            type:FETCH_ERROR,
            payload:error
        }
    };
    const request = ()=>{type: FETCH_REQUEST}
    return (dispatch)=>{
            dispatch(request);
            FetchImage()
                .then(res=>dispatch(success(res)))
                .catch(error=>dispatch(fail(error)))
        }
}