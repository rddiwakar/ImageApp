
import ImageComponent from "./imageComponent";
type ImageWrapperProps = {
    imgcss:String,
    images ?:any
}
function ImageWrapper({imgcss,images}:ImageWrapperProps){
    console.log("img",images)
    return(
        <div className="flex flex-wrap justify-between">
            {images.map((item :any)=>{
                return(
                    <ImageComponent imgcss={imgcss} image={item} />
                )
            })}
        {/* <ImageComponent imgcss={imgcss} />
        <ImageComponent imgcss={imgcss} />
        <ImageComponent imgcss={imgcss} />
        <ImageComponent imgcss={imgcss} /> */}
      </div>
    )
}
export default ImageWrapper;