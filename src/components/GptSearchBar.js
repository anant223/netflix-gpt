import React from 'react';
import  { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import lang from '../utils/langConstant';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGPTMoviesResult } from '../utils/gptSlicie';

const GptSearchBar = () => {
  const langKey = useSelector(store => store.lang.language)
  const langData = lang[langKey] || lang.en
  const langText = langData.inputPlaceholder;
  const langSearch = langData.search;
  const searchText = useRef(null)
  const dispatch = useDispatch();
  const searchMovieTMDB = async(movie) =>{
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json()
    return json.results;
    
   }

  const handleGPTSearch = async() =>{
    const gptQuery =
      "Act as a Movie Reccomdation system and suggest some movies for the query: " +
      searchText.current.value +
      "only give me five names of movies, comma sperated like the example result given ahead. Exaple Result: Animal, gadar, golamal, solay, Top-gun ";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    console.log(gptResults.choices?.[0].message?.content)

    const gptMovies = gptResults.choices?.[0].message?.content.split(',');

    const promiseArray = gptMovies?.map((movie) => searchMovieTMDB(movie))
    console.log(promiseArray)
    const tmdbResult = await Promise.all(promiseArray);
    console.log(tmdbResult)
    dispatch(
      addGPTMoviesResult({
        movieName: gptMovies,
        movieResults: tmdbResult,
      })
    );
  }
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder= {langText}
        />
        <button
          className="bg-red-500 hover:bg-red-700 text-white py-2 rounded text-sm col-span-3 m-4 px-4" onClick={handleGPTSearch}
        >
          {langSearch}
        </button>
      </form>
    </div>
  );
}

export default GptSearchBar
