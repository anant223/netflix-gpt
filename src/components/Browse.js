import { useSelector } from "react-redux";
import useNowPlaying from "../customehooks/useNowPlaying";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondryContainer from "./SecondryContainer";
import useTvShows from "../customehooks/useTvShows";
import SkeletonColor from "../utils/shimmer";

const Browse = () => {
  useTvShows();
  useNowPlaying();
  const GPT = useSelector((store) => store.GPT.showGPTSearch);
  return (
    <div className="bg-black w-full h-screen">
      <Header />
      {GPT ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
