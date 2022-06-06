
import ImageComponent from "./imageComponent";
type ImageWrapperProps = {
    imgcss:String,
    images ?:any,
    hiddenDisplay ?:boolean,
}
function ImageWrapper({imgcss,images,hiddenDisplay}:ImageWrapperProps){
    return(
        <div className="flex flex-wrap justify-between">
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