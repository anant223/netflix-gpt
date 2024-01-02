import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondryContainer = () => {
  const movies = useSelector((store) => store.movies);
  // console.log(movies.nowPlayingMoveis);
  return (
    <div className="bg-black">
      <div className='-mt-[15vw] md:-mt-28 pl-8 relative'>
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMoveis} />
        <MovieList title={"Trending"} movies={movies?.nowPlayingMoveis} />
        <MovieList title={"Most Watched"} movies={movies?.nowPlayingMoveis} />
        <MovieList title={"Action"} movies={movies?.nowPlayingMoveis} />
      </div>
    </div>
  );
}

export default SecondryContainer
