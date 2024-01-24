import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

const VideoTitle = ({vol, muteUmuteBtn, title, overview }) => {  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

  }, []);


  return (
    <div className=" w-full md:w-full  h-auto pt-10 md:px-10 lg:pt-28 px-5 md:py-6 absolute aspect-video text-white bg-gradient-to-r from-black z-10">
      <div className="relative top-8  w-1/2 md:w-80 h-auto mx-4 md:mx-0">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-bold">{title}</h1>
        <p className="my-2 md:my-4 line-clamp-3 md:line-clamp-5 overflow-hidden text-sm md:text-[1.4vw] lg:text-lg xl:text-xl">
          {overview}
        </p>
      </div>
      <div className="relative top-10">
        <div className=" flex flex-row  justify-between mx-4 md:mx-0  text-[1.5vw] md:text-[2vw] gap-4">
          <div className="flex gap-4">
            <Button
              style={{ background: "white", color: "black" }}
              variant="contained"
              size={windowWidth > 1024 ? "large" : "small"}
            >
              ▷ Play
            </Button>
            <Button
              style={{ color: "gray", borderColor: "gray" }}
              variant="outlined"
              size={windowWidth > 1024 ? "large" : "small"}
            >
              ⓘ More Info
            </Button>
          </div>
          <div className=" flex items-center">
            <div
              onClick={muteUmuteBtn}
              className="border rounded-full border-white py-0.5 px-2 bg-black text-gray-100 opacity-50 flex items-center"
            >
              {!vol ? <VolumeUpIcon /> : <VolumeOffIcon />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;


