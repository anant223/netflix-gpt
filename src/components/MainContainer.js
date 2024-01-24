import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useRef, useState } from 'react'

const MainContainer = () => {
  const playerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const movies = useSelector((store) => store.movies?.nowPlayingMoveis);
  if(!movies) return;
  const mainMovies = movies[1];
// console.log(mianmovies)
  const {original_title, overview, id} = mainMovies;
  
  const toggleMuteBtn = () =>{
     const palyer = playerRef.current;
     console.log(palyer);
     if(palyer){
      if(isMuted){
        palyer.unMute();
      }else{
        palyer.mute();
      }
      setIsMuted(!isMuted);
     }
  }
  
  const onPalyerReady = (e) =>{
    const palyer = e.target;
    playerRef.current = palyer
    console.log(palyer)
    if(isMuted){
      palyer.mute();
    }else{
      palyer.unMute();
    }

  }
 
  return (    
    <div className="">
      <VideoTitle
        title={original_title}
        overview={overview}
        muteUmuteBtn={toggleMuteBtn}
        vol={isMuted}
      />
      <VideoBackground movieId={id} readyPalyer={onPalyerReady} />
    </div>
  );
}

export default MainContainer;
