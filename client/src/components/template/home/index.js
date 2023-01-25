import './index.css';
import { Parallax } from 'react-parallax';
import back1 from './../../assets/image/home_back1.jpg';
import back2 from './../../assets/image/home_back2.jpg';
import Navbar from './../navbar/index';

const Home=(props)=> {
  return (
    <>
      <Navbar/>
      <Parallax blur={1} bgImage={back1} bgImageAlt="the cat" strength={200}>
        <div className='home__outer__section1'>
          <div className='home__outer__section1__'>

          </div>
        </div>
      </Parallax>
      <Parallax blur={1} bgImage={back2} bgImageAlt="the cat" strength={200}>
        <div className='home__outer__section1'>
          <div className='home__outer__section1__'>

          </div>
        </div>
      </Parallax>
    </>
  );
}

export default Home;