import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addMoviesTrailer } from '../utils/movieSlice';

const useMovieTrailer = (movie_id) => {
    const dispatch = useDispatch();    
    const getMovieVideo = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
        API_OPTIONS
      );

      const json = await data.json();
      const getTrailer = json.results.filter((vid) => vid.type === "Trailer");
      const movieTrailer = getTrailer.length ?  getTrailer[0] : getTrailer.results
      dispatch(addMoviesTrailer(movieTrailer));
    };
    useEffect(() => {
      getMovieVideo();
    }, []);
}

export default useMovieTrailer
