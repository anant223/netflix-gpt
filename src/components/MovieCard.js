import { POSTER_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img className="w-48 " src={POSTER_URL + posterPath } alt="Poster" />
    </div>
  );
};

export default MovieCard
