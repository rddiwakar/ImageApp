import img from '../Assets/rename.png'
type ImageComponent={
    imgcss:String,
    hiddenDisplay ?:boolean,
    image ?:any
}
function ImageComponent({imgcss,hiddenDisplay,image}:ImageComponent){
    return(
        <div className='relative mt-4 mr-3'>
          <input type="checkbox" className={`absolute ${hiddenDisplay && 'hidden'}`}  />
          <img alt='photo' src={image.urls.small} className={`${imgcss}`} />
          <div className={` ${hiddenDisplay && 'hidden'}`}>name</div>
        </div>
    )
}
export default ImageComponent;