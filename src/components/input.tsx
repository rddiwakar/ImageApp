import React from 'react'
import {FiSearch} from 'react-icons/fi';
import {SearchInputProps} from "../react-app-env"

function SearchInput({Change,Value}:SearchInputProps){
    return(
        <div className="relative">
            <FiSearch className='absolute top-2 left-2'/>
            <input 
                type="text" 
                placeholder='search media' 
                className="border pl-9 py-1 outline-0" 
                onChange={(event)=>Change(event)}
                value={Value}
            />
        </div>
    )
}
export default SearchInput