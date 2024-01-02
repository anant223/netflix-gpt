import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useState } from 'react'
import React from 'react'

const MainContainer = () => {
  const [isMute, setIsMute] = useState(1);
  const movies = useSelector((store) => store.movies?.nowPlayingMoveis);
  if(!movies) return;
  const mainMovies = movies[1];
  console.log(mainMovies)
  const {original_title, overview, id} = mainMovies;
  const toggleMuteNUnmuteSound = (e) => {
    e.preventDefault();

    setIsMute(!isMute)
  };
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} vol={isMute} clickHandle={toggleMuteNUnmuteSound}/>
      <VideoBackground movieId={id} vol={isMute}/>
    </div>
  );
}

export default MainContainer
