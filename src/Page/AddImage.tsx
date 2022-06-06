import Heading from "../components/heading";
import ImageComponent from "../components/imageComponent";
import PrimaryButton from "../components/button";
import { useAppSelector } from "../hooks/redux-hooks";
import { RootState } from "../Redux/store";

function AddImagePage(){
    const image = useAppSelector((state: RootState) => state.HandleCheck.checkedData);
    console.log(image)
    const single = image[0]
    const name = single && single.description && single.description.split(" ")[0]
    
    return(
        <div className="mx-3 mx-3">
            <Heading 
                title="Add Image" 
                description="search and select an image"
                btntext ={{
                    text:"X",
                    css:"hidden"
                }}
            />
            <div className="border border-dotted rounded-xl px-2 py-2 m-auto">
                <div className="flex justify-center">
                    <ImageComponent
                        imgcss="px-2 h-92 "
                        hiddenDisplay={true}
                        image={single}
                    />
                </div>
                <div className="flex justify-between ">
                    <div className="w-3/6 pl-2">
                        <div>Title</div>
                        <div className="border pl-5 w-5/6">{name}</div>
                    </div>
                    <div className="w-1/6">
                        <div>file type</div>
                        <div>JPG</div>
                    </div>
                    <div className="w-1/6">
                        <div>file size</div>
                        <div>100kb</div>
                    </div>
                    <div className="w-1/6">
                        <div>Dimention</div>
                        <div>{`${single.width} * ${single.height}`}</div>
                    </div>
                </div>
            </div>
            <div className="text-right">
                <PrimaryButton 
                    btntext="Add Image"
                    css="text-xs bg-sky-500/100 text-white py-2 px-3 "
                />
            </div>
        </div>
    )
}
export default AddImagePage;