import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTVShows} from "../utils/movieSlice";
import { useEffect } from "react";

const useTvShows = () => {
  const dispatch = useDispatch();


  const tvShows = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/discover/tv`,
      API_OPTIONS
    );
    const jsonData = await data.json();
    dispatch(addTVShows(jsonData.results));
  };
  useEffect(() => {
    tvShows();
  }, []);
};

export default useTvShows;

