import { useSelector } from 'react-redux';
import useNowPlaying from '../customehooks/useNowPlaying';
import GptSearch from './GptSearch';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';

const Browse = () => {
  useNowPlaying();
  const GPT = useSelector((store) => store.GPT.showGPTSearch);

  return (
    <div>
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

}

export default Browse;