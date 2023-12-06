import React from 'react'

const VideoTitle = ({title, overview}) => {

  return (
    <div className=" w-screen pt-36 px-12 absolute aspect-video text-white bg-gradient-to-r from-black ">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-4 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-gray-500    text-white p-3  opacity-50 px-4 rounded text-xl">
          ▷ Play
        </button>
        <button className="bg-gray-500  text-white p-3 opacity-50 px-4 mx-6 rounded text-xl">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle
