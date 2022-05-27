import Heading from "../components/heading";
import ImageComponent from "../components/imageComponent";
import PrimaryButton from "../components/button";
function AddImagePage(){
    return(
        <div className="mx-3 mx-3">
            <Heading 
                title="Add Image" 
                description="search and select an image"
                btntext ={{
                    text:"X",
                    css:""
                }}
            />
            <div className="border-dotted rounded-xl px-2 py-2 mx-2 my-4 h-96">
                <ImageComponent
                     imgcss="px-2 py-2 w-96 h-96"
                />
            </div>
            <div className="text-right">
                <PrimaryButton 
                    btntext="Select Image"
                    css="text-xs bg-sky-500/100 text-white"
                />
            </div>

        </div>
    )
}
export default AddImagePage;