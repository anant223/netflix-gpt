import { useSelector } from "react-redux";
import useMovieTrailer from "../customehooks/useMovieTrailer";
import YouTube from "react-youtube"

const VideoBackground = ({ readyPalyer, movieId }) => {
  // Fetch movie id
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movies?.playingTrailer);

  return (
    <div className="">
      <div className="aspect-video overflow-hidden w-auto relative bottom-10">        
        <iframe
          className="w-full h-full overflow-hidden"
          style={{ maxWidth: "100%" }}
          src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=0&mute=${1}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        {/* <YouTube
          videoId={trailer?.key}
          opts={{
            playerVars: {
              autoplay: 1,
            },
          }}
          onReady={readyPalyer}
        /> */}
      </div>
    </div>
  );
};

export default VideoBackground;

