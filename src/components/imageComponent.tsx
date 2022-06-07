import { useEffect, useState } from "react";
import {useAppDispatch,useAppSelector} from "../hooks/redux-hooks"
import { selectCheckedAction, selectUncheckedAction } from "../Redux/Action/actionadd";
import { selectImageAction } from "../Redux/Action/selectImageaction";
import { RootState } from "../Redux/store";
import {ImageComponentProps} from "../react-app-env";

function ImageComponent({imgcss,hiddenDisplay,image}:ImageComponentProps){
  const allChecked = useAppSelector((state:RootState) => state.HandleCheck.allChecked);
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
    
    const name = image && !(image.description == null) ?
                image.description && image.description.split(" ")[0]:
                image.alt_description && image.alt_description.split(" ")[0]
    
    return(
        <div className='relative mt-4 mr-3'>
          <input 
            type="checkbox" 
            className={`absolute ${hiddenDisplay && 'hidden'}`}
            checked={checked} 
            onChange={handleChecked}
          />
          <img alt='photo' 
            src={image && image.urls && image.urls.small} 
            className={`${imgcss} `}
            onClick={()=>dispatch(selectImageAction(image))} 
          />
          <div className={` ${hiddenDisplay && 'hidden'}`}>{name ||""}</div>
        </div>
    )
}
export default ImageComponent;