import { useState } from "react";
import {useAppDispatch} from '../hooks/redux-hooks';
import { selectCheckedAction, selectUncheckedAction } from "../store/SelectforAdd/actionadd"
type ImageComponent={
    imgcss:String,
    hiddenDisplay ?:boolean,
    image ?:any
}

function ImageComponent({imgcss,hiddenDisplay,image}:ImageComponent){
    const dispatch = useAppDispatch()
    const [checked,setChecked]= useState<boolean>(false);
    const handleChecked=async()=>{
        await setChecked(!checked)
        if(checked){
            dispatch(selectCheckedAction(image))
        }else{
            dispatch(selectUncheckedAction(image.id))
        }
    }
    return(
        <div className='relative mt-4 mr-3'>
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