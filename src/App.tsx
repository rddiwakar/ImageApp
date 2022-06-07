import React, { useEffect, useState } from 'react';
import PrimaryButton from './components/button';
import SearchInput from './components/input';
import ImageWrapper from './components/imageWrapper';
import Heading from './components/heading';
import ModalComponent from './Modules/selectImage';
import "antd/dist/antd.css";
import SelectImagePage from './Page/selectPage';
import { RiDeleteBin6Line as DeleteIcon } from 'react-icons/ri'
import { useAppDispatch, useAppSelector } from './hooks/redux-hooks'
import { RootState } from './Redux/store'
import { deleteCheckedAction, fetchImages } from './Redux/Action/action';
import { sortBy} from 'lodash';
import { AllCheckedAction, removeCheckedAction } from './Redux/Action/actionadd';

type SortType ={
  NONE:(list:any)=>any,
  TITLE:(list:any)=>any,
  DATE:(list:any)=>any,
  SIZE:(list:any)=>any,
}
function App() {
  const [selectModulevisible, setSelectModuleVisible] = useState(false);
  const openSelectModuleVisible = () => setSelectModuleVisible(true)
  const closeSelectModuleVisible = () => setSelectModuleVisible(false);
  const dispatch = useAppDispatch()
  let Images = useAppSelector((state: RootState) => state.ImageReducer.data);
  const loading = useAppSelector((state: RootState) => state.ImageReducer.loading);
  const checkedItems = useAppSelector((state:RootState)=>state.HandleCheck.checkedData);
  const [inputValue, setInputValue] = useState("");
  const handleChange = async (event: any) => {
    await setInputValue(event.target.value)
  }
  
  Images = Images.filter((item : any) =>item.description && item.description.startsWith(inputValue))

  useEffect(() => {
    dispatch(fetchImages("random"))
  }, [])
  const [sort, setSort] = useState<String>('NONE');
  const SORTS:SortType = {
    "NONE": (list:any) => list,
    "TITLE": (list:any) => sortBy(list, 'description'),
    "DATE": (list:any) => sortBy(list, 'created_at'),
    "SIZE": (list:any) => sortBy(list, 'width'), 
  };
  const handleSort = (title: String) => {
    setSort(title)
  };
  const sortFunction = SORTS[sort];   
  const sortedList = sortFunction(Images);

  const [checked,setChecked]= useState(false);
    const handleChecked=()=>{
         setChecked(()=>!checked)
    }
    useEffect(()=>{
      checked ? dispatch(AllCheckedAction(Images)):
                dispatch(removeCheckedAction()) 
    },[checked])
    
  return (
    <div className='my-8 mx-6'>
      <Heading
        title="Media Library"
        description="Create, edit and manage the media on your community."
        btntext={{
          text: "Add Image",
          css: "text-xs bg-sky-500/100 text-white py-2 px-3 ",
          onClick: openSelectModuleVisible
        }}
      />
      <div className='border divide-x border-slate-200 divide-y divide-slate-200 rounded-md mt-3'>
        <div className=' divide-slate-200 flex flex-row px-1 '>
          <div className="basis-1/6 flex justify-center pt-4">
            <input 
              type='checkbox' 
              className='mt-1'
              checked={checked}
              onChange={handleChecked} 
            />
            <div className='pl-4'>Select all</div>
          </div>
          <div className='basis-5/6 flex justify-between pt-3'>
            <p className='pt-1' > 
                <DeleteIcon 
                  className='text-xl' 
                  onClick={()=>{
                    dispatch(deleteCheckedAction(checkedItems))
                    dispatch(removeCheckedAction())
                  }}
                />
            </p>
            <div className='pb-2 mr-2'>
              <SearchInput
                Value={inputValue}
                Change={handleChange}
              />
            </div>
          </div>
        </div>
        <div className='flex px-3 py-2'>
          <div className='basis-1/6 text-center pt-2'>Sort By</div>
          <div className='basis-5/6 flex '>
            <PrimaryButton
              btntext="Title"
              css="text-black border mr-2 text-sm bg-white py-2 px-3 "
              onClick={()=>handleSort('TITLE')}
            />
            <PrimaryButton
              btntext="Date"
              css="text-black border mr-2 text-sm bg-white py-2 px-3 "
              onClick={()=>handleSort('DATE')}
            />
            <PrimaryButton
              btntext="Size"
              css="text-black border mr-2 text-sm bg-white py-2 px-3 "
              onClick={()=>handleSort('SIZE')}
            />
          </div>
        </div>
      </div>
      {loading ? '...loading' :
        <ImageWrapper
          imgcss="w-40 h-24"
          images={sortedList}
        />
      }

      <ModalComponent
        onClose={closeSelectModuleVisible}
        visible={selectModulevisible}
        width={1190}
      >
        <SelectImagePage onCloseSelect={closeSelectModuleVisible} />
      </ModalComponent>

    </div>
  );
}

export default App;
