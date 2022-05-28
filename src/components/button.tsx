import React from 'react';
type ButtonProps ={
    btntext:String,
    css :String,
    onClick?:()=>any
}
function PrimaryButton({btntext,css,onClick}:ButtonProps){
    return(
        <>
            <button className={`${css}`} onClick={onClick}>{btntext}</button>
        </>
    )
}
export default PrimaryButton;