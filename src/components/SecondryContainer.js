import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondryContainer = () => {

  const movies = useSelector((store) => store.movies);
  const tvs = useSelector((store) => store.movies?.tvShows);

  
  return (
    <div className="bg-black">
      <div className="lg:-mt-26 pl-4 -mt-20 md:-mt-52 md:py-6 md:pl-8 z-10 relative">
        <MovieList
          title={"Now Playing"}
          movies={movies?.nowPlayingMoveis}
          tv={tvs}
        />
        <MovieList
          title={"Trending"}
          movies={movies?.nowPlayingMoveis}
          tv={tvs}
        />
        <MovieList
          title={"Most Watched"}
          movies={movies?.nowPlayingMoveis}
          tv={tvs}
        />
        <MovieList
          title={"Action"}
          movies={movies?.nowPlayingMoveis}
          tv={tvs}
        />
      </div>
    </div>
  );
}

export default SecondryContainer
