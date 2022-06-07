import React from 'react';
import {ButtonProps} from "../react-app-env"

function PrimaryButton({btntext,css,onClick}:ButtonProps){
    return(
        <>
            <button className={`rounded-sm ${css}`} onClick={onClick}>{btntext}</button>
        </>
    )
}
export default PrimaryButton;