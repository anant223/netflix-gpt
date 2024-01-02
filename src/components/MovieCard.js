import React from "react";
import { POSTER_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if(!posterPath) return null;
  return (
    <div className="w-48 pr-4 ">
      <img className="w-48 " src={POSTER_URL + posterPath } alt="Poster" />
    </div>
  );
};

export default MovieCard
