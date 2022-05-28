import PrimaryButton from "../components/button";
import Heading from "../components/heading";
import ImageWrapper from "../components/imageWrapper";
import SearchInput from "../components/input";
import React, {useState} from "react";
import ModalComponent from "../Modules/selectImage";
import AddImagePage from "./AddImage";

type SelectImagePageProps ={
    onCloseSelect:()=>any
}

function SelectImagePage({onCloseSelect}:SelectImagePageProps) {
    const [addModal,setAddModal] = useState(false)
    const openAddModal =()=>{
        setAddModal(true)
        onCloseSelect()
    }
    return (
        <div className="m-3 ">
            <Heading
                title="Select Image"
                description="search and select an image"
                btntext={{
                    text: "X",
                    css: "hidden"
                }}
            />
            <div className="mt-8">
                <SearchInput />
                <PrimaryButton
                    btntext="Search"
                    css="text-black border mr-4 text-sm bg-white py-1 px-4 "
                />
            </div>
            <div className="border-dotted rounded-xl px-2 py-2 mx-2 my-4 h-96">
                <ImageWrapper
                    imgcss="w-50 h-32"
                />
            </div>
            <div className="text-right">
                <PrimaryButton
                    btntext="Select Image"
                    css="text-xs bg-sky-500/100 text-white py-2 px-3 "
                    onClick={openAddModal}
                />
            </div>
            <ModalComponent
                onClose={() => setAddModal(false)}
                visible={addModal}
                width={600}
            >
                <AddImagePage />
            </ModalComponent>
        </div>
    )
}
export default SelectImagePage;