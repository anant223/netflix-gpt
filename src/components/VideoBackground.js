import {useSelector } from 'react-redux';
import React from "react";
import useMovieTrailer from '../customehooks/useMovieTrailer';


const VideoBackground = ({vol,movieId }) => {
  //fetch movie id
  useMovieTrailer(movieId);
  const trailer = useSelector((store) => store.movies?.playingTrailer);
  
  // useEffect(()=>{
    //  function onYouTubeIframeAPIReady() {
    //    const player = new window.YT.Player("player", {
    //      events: {
    //        onReady: onPlayerReady,
    //        onStateChange: onPlayerStateChange,
    //      },
    //    });
    //  }

     
  // },[])
  return (
    <div className="player">
      <iframe
        className="aspect-video w-full h-[75vh] md:w-full md:h-screen"
        src={`https://www.youtube.com/embed/${trailer?.key}?autoplay=1&mute=${vol}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;


