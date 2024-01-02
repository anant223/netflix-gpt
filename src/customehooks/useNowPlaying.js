import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlaying = () => {
  //  const nowPlayingMoveis = useSelector(
  //    (store) => store.movies.nowPlayingMoveis
  //  );
  const dispatch = useDispatch();

  const nowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    dispatch(addNowPlayingMovies(jsonData.results));
  };
  useEffect(() => {
     nowPlayingMovie();
  }, []);
}

export default useNowPlaying
