import PrimaryButton from "./button";
import {HeadingProps} from "../react-app-env"

function Heading({title,description,btntext}:HeadingProps) {
    return (
        <div>
            <div className='flex justify-between'>
                <h2 className="md:text-xl font-semibold sm:text-xs">{title}</h2>
                <PrimaryButton 
                    btntext={btntext.text} 
                    css={btntext.css}
                    onClick={btntext.onClick}
                />
            </div>
            <p className='text-slate-400 md:text-sm sm:text-xs'>{description}</p>
        </div>
    )
}
export default Heading;