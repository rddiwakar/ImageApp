import PrimaryButton from "../components/button";
import Heading from "../components/heading";
import ImageWrapper from "../components/imageWrapper";
import SearchInput from "../components/input";
import React, {useState} from "react";
import ModalComponent from "../Modules/selectImage";
import AddImagePage from "./AddImage";
import {useAppDispatch, useAppSelector} from "../hooks/redux-hooks"
import { RootState } from "../Redux/store";
import { selectFetchImages } from "../Redux/Action/selectedAction";
type SelectImagePageProps ={
    onCloseSelect:()=>any
}

function SelectImagePage({onCloseSelect}:SelectImagePageProps) {
    const [addModal,setAddModal] = useState(false)
    const openAddModal =()=>{
        setAddModal(true)
        onCloseSelect()
    }
    const [selectInput,setSelectInput] = useState('');
    const handleSelectChange =  (event: any) => {
        setSelectInput(event.target.value)
    }
    const selectImage = useAppSelector((state:RootState)=>state.SelectedImageReducer.selectData);
    const selectLoading = useAppSelector((state:RootState)=>state.SelectedImageReducer.selectLoading)
    const dispatch = useAppDispatch();

    
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
            <div className="mt-8 flex">
                <SearchInput 
                   Change={handleSelectChange} 
                   Value={selectInput}
                />
                <div className="ml-4">
                    <PrimaryButton
                        btntext="Search"
                        css="text-black border mr-4 text-sm bg-slate-200 py-1 px-2 "
                        onClick={()=>dispatch(selectFetchImages(selectInput))}
                    />
                </div>
            </div>
            <div className="border border-dotted rounded-xl px-2 py-2 mx-2 my-4 h-96 overflow-y-auto">
                {
                    selectLoading ? "...loading":
                    <ImageWrapper
                        imgcss="w-48 h-32"
                        images={selectImage}
                        hiddenDisplay = {true}
                    />
                }
                
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
                width={712}
            >
                <AddImagePage 
                    onClose={() => setAddModal(false)}
                />
            </ModalComponent>
        </div>
    )
}
export default SelectImagePage;