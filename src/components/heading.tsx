import PrimaryButton from "./button";
type HeadingProps={
    title:String,
    description:String,
    btntext:{
        text:String,
        css:String
    }
}
function Heading({title,description,btntext}:HeadingProps) {
    return (
        <div>
            <div className='flex justify-between'>
                <h2 className="text-xl font-semibold">{title}</h2>
                <PrimaryButton btntext={btntext.text} css={btntext.css}/>
            </div>
            <p className='text-slate-400'>{description}</p>
        </div>
    )
}
export default Heading;