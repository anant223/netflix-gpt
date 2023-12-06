import {useSelector } from 'react-redux';
import useMovieTrailer from '../customehooks/useMovieTrailer';


const VideoBackground = ({ movieId }) => {
  //fetch movie id
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movies?.playingTrailer);

  return (
    <div>
      <iframe
        className="w-[100%] aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}`} //?autoplay=1&mute=1
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground
