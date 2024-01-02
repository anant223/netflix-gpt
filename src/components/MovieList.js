import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies }) => {
  //  console.log(title, movies)
  return (
    <div className="">
      <h2 className=' text-white py-2 table-cell text-xl'>
        {title}
      </h2>
      <div className="flex overflow-x-auto">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList
