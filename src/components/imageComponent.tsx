import { useEffect, useState } from "react";
import {useAppDispatch,useAppSelector} from "../hooks/redux-hooks"
import { selectCheckedAction, selectUncheckedAction } from "../Redux/Action/actionadd";
import { RootState } from "../Redux/store";
type ImageComponentProps={
    imgcss:String,
    hiddenDisplay ?:boolean,
    image :any
}

function ImageComponent({imgcss,hiddenDisplay,image}:ImageComponentProps){
  const allChecked = useAppSelector((state:RootState)=>state.HandleCheck.allChecked)
  const dispatch = useAppDispatch()
    const [checked,setChecked]= useState(false);
    const handleChecked=()=>{
         setChecked(()=>!checked)
    }
    useEffect(()=>{
      setChecked(allChecked)
    },[allChecked])
    useEffect(()=>{
      checked ? dispatch(selectCheckedAction(image)):
                dispatch(selectUncheckedAction(image.id)) 
    },[checked])
    
    const name = image && image.description && image.description.split(" ")[0]
    
    return(
        <div className='relative mt-4 mr-3'>
          <input 
            type="checkbox" 
            className={`absolute ${hiddenDisplay && 'hidden'}`}
            checked={checked} 
            onChange={handleChecked}
          />
          <img alt='photo' src={image && image.urls && image.urls.small} className={`${imgcss}`} />
          <div className={` ${hiddenDisplay && 'hidden'}`}>{name ||""}</div>
        </div>
    )
}
export default ImageComponent;