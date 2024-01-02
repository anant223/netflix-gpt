import React from "react";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";

const VideoTitle = ({ vol, clickHandle, title, overview }) => {
  return (
    <div className="w-full h-auto md:h-auto h- pt-28 px-10 absolute aspect-video text-white bg-gradient-to-r from-black">
      <div className=" w-[20.2rem] h-auto">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="my-4 line-clamp-5 overflow-hidden text-[1.4vw] md:text-[0.6rem] lg:text-lg xl:text-[1rem]">
          {overview}
        </p>
      </div>
      <div className="flex text-[2vw] gap-2 items-center">
        <button className="bg-white text-black px-4 p-2 rounded">▷ Play</button>
        <button className="bg-gray-500 text-white p-2 opacity-50 px-4 rounded">
          ⓘ More Info
        </button>
        <div className="translate-x-[48rem]">
          <button onClick={clickHandle}>
            {!vol ? <VolumeUpIcon /> : <VolumeOffIcon />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
