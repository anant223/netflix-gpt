import React from 'react'
import { useSelector } from 'react-redux';
import lang from '../utils/langConstant';

const GptSearchBar = () => {
  const langKey = useSelector(store => store.lang.language)
  const langText = lang[langKey].inputPlaceholder;
  const langSearch = lang[langKey].search;
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12'>
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder= {langText}
        />
        <button
          className="bg-red-500 hover:bg-red-700 text-white py-2 rounded text-sm col-span-3 m-4 px-4"
        >
          {langSearch}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar
