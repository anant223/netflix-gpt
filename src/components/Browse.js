import useNowPlaying from '../customehooks/useNowPlaying';
import Header from './Header';
import MainContainer from './MainContainer';
import SecondryContainer from './SecondryContainer';

const Browse = () => {
  useNowPlaying();
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondryContainer/>
    </div>
  );

}

export default Browse;