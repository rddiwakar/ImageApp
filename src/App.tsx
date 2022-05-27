import React from 'react';
import RiDeleteBin6Line   from "react-icons/ri"
import PrimaryButton from './components/button';
import SearchInput from './components/input';
import ImageWrapper from './components/imageWrapper';
import Heading from './components/heading';
function App() {
  return (
    <div className='my-8 mx-6'>
      <Heading 
        title="Media Library" 
        description ="Create, edit and manage the media on your community."
        btntext ={{
          text:"Add Image",
          css:"text-xs bg-sky-500/100 text-white"
      }}
      />
      <div className='border divide-x border-slate-200 divide-y divide-slate-200 rounded-md mt-3'>
        <div className=' divide-slate-200 flex flex-row px-3 py-4'>
          <div className="basis-1/6 flex justify-center ">
            <input type='checkbox' className='mt-1' />
            <div className='pl-4'>Select all</div>
          </div>
          <div className='basis-5/6 flex justify-between'>
            <p> delete </p>
            <SearchInput />
          </div>
        </div>
        <div className='flex px-3 py-2'>
          <div className='basis-1/6 text-center'>Sort By</div>
          <div className='basis-5/6 flex '>
            <PrimaryButton 
              btntext="Title"
              css="text-black border mr-2 text-sm bg-white py-1 px-4"
            />
            <PrimaryButton 
              btntext="Date"
              css="text-black border mr-2 text-sm bg-white py-1 px-4"
            />
            <PrimaryButton 
              btntext="Size"
              css="text-black border mr-2 text-sm bg-white py-1 px-4"
            />
          </div>
        </div>
      </div>
      <ImageWrapper 
        imgcss="w-36 h-22"
      />
    </div>
  );
}

export default App;
