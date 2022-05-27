import React from 'react';
type ButtonProps ={
    btntext:String,
    css :String
}
function PrimaryButton({btntext,css}:ButtonProps){
    return(
        <>
            <button className={`py-2 px-3 ${css}`}>{btntext}</button>
        </>
    )
}
export default PrimaryButton;