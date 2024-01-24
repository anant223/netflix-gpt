import React from "react";
import { POSTER_URL } from "../utils/constants";
import SkeletonColor from "../utils/shimmer";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-48 pr-4 flex-shrink-0 ">
      <img
        className="w-36 md:w-48 h-auto rounded-sm "
        src={POSTER_URL + posterPath}
        alt="Poster"
      />
    </div>
  );
};

export default MovieCard
