import { useEffect, useState } from "react";
import {useAppDispatch} from "../hooks/redux-hooks"
import { selectCheckedAction, selectUncheckedAction } from "../store/SelectforAdd/actionadd";
type ImageComponent={
    imgcss:String,
    hiddenDisplay ?:boolean,
    image ?:any
}

function ImageComponent({imgcss,hiddenDisplay,image}:ImageComponent){
  const dispatch = useAppDispatch()
    const [checked,setChecked]= useState(false);
    const handleChecked=()=>{
         setChecked(()=>!checked)
    }
    useEffect(()=>{
      checked ? dispatch(selectCheckedAction(image)):
                dispatch(selectUncheckedAction(image.id)) 
    },[checked])
    
    
    return(
        <div className='relative mt-4 mr-3'>
          {console.log("hello")}
          <input 
            type="checkbox" 
            className={`absolute ${hiddenDisplay && 'hidden'}`}
            checked={checked} 
            onChange={handleChecked}
          />
          <img alt='photo' src={image.urls.small} className={`${imgcss}`} />
          <div className={` ${hiddenDisplay && 'hidden'}`}>name</div>
        </div>
    )
}
export default ImageComponent;