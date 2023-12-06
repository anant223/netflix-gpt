import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlaying = () => {

  const dispatch = useDispatch();

  const nowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const jsonData = await data.json();
    console.log(jsonData.results);
    dispatch(addNowPlayingMovies(jsonData.results));
  };
  useEffect(() => {
    nowPlayingMovie();
  }, []);
}

export default useNowPlaying
