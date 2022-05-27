import img from '../Assets/rename.png'
type ImageComponent={
    imgcss:String
}
function ImageComponent({imgcss}:ImageComponent){
    return(
        <div className='relative mt-4 mr-3'>
          <input type="checkbox" className='absolute ' />
          <img alt='photo' src={img} className={`${imgcss}`} />
          <div>name</div>
        </div>
    )
}
export default ImageComponent