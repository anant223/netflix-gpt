import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggesion from './GptMovieSuggesion';
import { BG_URL } from '../utils/constants';

const GptSearch = () => {
  
  return (
    <div className="">
     
      <div className="absolute -z-10">
        <img className="" src={BG_URL} alt="bg" />
      </div>
      <GptSearchBar />
      <GptMovieSuggesion />
    </div>
  );
}

export default GptSearch
