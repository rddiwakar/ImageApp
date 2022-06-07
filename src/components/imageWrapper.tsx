
import ImageComponent from "./imageComponent";
import {ImageWrapperProps} from "../react-app-env";

function ImageWrapper({imgcss,images,hiddenDisplay}:ImageWrapperProps){
    return(
        <div className="flex flex-wrap">
            {images.map((item :any)=>{
                return(
                    <ImageComponent 
                        imgcss={imgcss} 
                        image={item} 
                        key={item.id} 
                        hiddenDisplay={hiddenDisplay}
                    />
                )
            })}
      </div>
    )
}
export default ImageWrapper;