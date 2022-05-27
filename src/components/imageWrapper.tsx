
import ImageComponent from "./imageComponent";
type ImageWrapperProps = {
    imgcss:String
}
function ImageWrapper({imgcss}:ImageWrapperProps){
    return(
        <div className="flex flex-wrap">
        <ImageComponent imgcss={imgcss} />
        <ImageComponent imgcss={imgcss} />
        <ImageComponent imgcss={imgcss} />
        <ImageComponent imgcss={imgcss} />
      </div>
    )
}
export default ImageWrapper;