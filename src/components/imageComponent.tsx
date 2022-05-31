import { useEffect, useState } from "react";
import {useAppDispatch} from "../hooks/redux-hooks"
import { selectCheckedAction, selectUncheckedAction } from "../store/SelectforAdd/actionadd";
type ImageComponentProps={
    imgcss:String,
    hiddenDisplay ?:boolean,
    image ?:any
}

function ImageComponent({imgcss,hiddenDisplay,image}:ImageComponentProps){
  const dispatch = useAppDispatch()
    const [checked,setChecked]= useState(true);
    const handleChecked=()=>{
         setChecked(()=>!checked)
    }
    useEffect(()=>{
      checked ? dispatch(selectCheckedAction(image)):
                dispatch(selectUncheckedAction(image.id)) 
    },[checked])
    const name = image.description && image.description.split(" ")[0]
    
    return(
        <div className='relative mt-4 mr-3'>
          <input 
            type="checkbox" 
            className={`absolute ${hiddenDisplay && 'hidden'}`}
            checked={checked} 
            onChange={handleChecked}
          />
          <img alt='photo' src={image.urls.small} className={`${imgcss}`} />
          <div className={` ${hiddenDisplay && 'hidden'}`}>{name}</div>
        </div>
    )
}
export default ImageComponent;