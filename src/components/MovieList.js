import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {useRef, useState} from "react";
const MovieList = ({ title, movies, tv }) => {
  const containerRef = useRef(null);
  const [isHover, setHover] = useState()
  const combinedItems = [...(movies || []), ...(tv || [])];
  const moviesState = useSelector((state) => state.movies);
  
  const filteredMovieTVShows =
    moviesState.selectedCategories === "Movies"
      ? moviesState.nowPlayingMoveis
      : moviesState.selectedCategories === "TV Shows"
      ? moviesState.tvShows
      : combinedItems;
    const handlePrevious = () => {
        const {scrollLeft, clientWidth}= containerRef.current;
        containerRef.current.scrollLeft = scrollLeft - clientWidth;
    };
    const handleForward = () => {
        const { scrollLeft, clientWidth } = containerRef.current;
        containerRef.current.scrollLeft = scrollLeft + clientWidth;
    };
   

    
    return (
      <div className="mb-6 text-white relative">
        <h2 className="py-2 text-lg md:text-xl">{title}</h2>
        <div className="flex items-center relative">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2  flex">
            <div
              className="  hover:bg-black opacity-55 py-[119px] hover:px-4 cursor-pointer"
              onClick={handlePrevious}
            >
              <ArrowBackIosIcon />
            </div>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex items-center">
            <div
              className=" hover:bg-black opacity-55 py-[119px] hover:px-4 cursor-pointer"
              onClick={handleForward}
            >
              <ArrowForwardIosIcon />
            </div>
          </div>
          <div
            ref={containerRef}
            className="flex -space-x-8 md:-space-x-1 overflow-x-hidden scroll-smooth items-center"
          >
            {filteredMovieTVShows?.map((item, i) => (
              <MovieCard key={item.id} posterPath={item?.poster_path} />
            ))}
          </div>
        </div>
      </div>
    );
}

export default MovieList;
