import './index.css';
import { Parallax } from 'react-parallax';
import back1 from './../../assets/image/home_back1.jpg';
import back2 from './../../assets/image/home_back2.jpg';
import back3 from './../../assets/image/home_back3.jpg';
import back4 from './../../assets/image/home_back4.jpg';
import back5 from './../../assets/image/home_back5.jpg';
import back6 from './../../assets/image/home_back6.jpg';
import back7 from './../../assets/image/home_back7.jpg';
import back8 from './../../assets/image/home_back8.jpg';

import home_people from './../../assets/image/home_people.svg';
import home_profile from './../../assets/image/home_profile.svg';
// import back2 from './../../assets/image/home_back2.jpg';
// import back2 from './../../assets/image/home_back2.jpg';
import Navbar from './../navbar/index';
import HomeSection2Card from '../../atom/homeSection2Card';
import HomeSection2Data from '../../assets/store/homeSection2Data';
import HomeSection3Card from '../../atom/homeSection3Card';
import HomeSection3Data from '../../assets/store/homeSection3Data';
import HomeSection4Data from '../../assets/store/homeSection4Data';
import HomeSection5Card from '../../atom/homeSection5Card';
import HomeSection5Data from '../../assets/store/homeSection5Data';
import Carousel from "react-multi-carousel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import 'react-multi-carousel/lib/styles.css';


const Home=(props)=> {
  const responsive = {
    desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1
    },
    tablet: {
    breakpoint: { max: 1024, min: 750 },
    items: 1,
    slidesToSlide: 1
    },
    mobile: {
    breakpoint: { max: 749, min: 0 },
    items: 1,
    slidesToSlide: 1
    }
  };
  return (
    <>
      <Navbar LoggedIn={props.LoggedIn} LoggedInStatus={props.LoggedInStatus}/>
      <Parallax blur={1} bgImage={back1} bgImageAlt="the cat" strength={200}>
        <div className='home__outer__section1'>
          <div className='home__outer__section1__'>

          </div>
        </div>
      </Parallax>
      <div className='home__outer__section2'>
        <div className='home__outer__section2__left'>
          <div className='home__outer__section2__left__inner'>
            <div className='home__outer__section2__left__inner__smallhead' data-aos="fade-right">
              MORE THAN 20 YEARS OF
            </div>
            <div className='home__outer__section2__left__inner__head' data-aos="fade-right">
              Bringing People Together
            </div>
            {
              HomeSection2Data.map((ele)=>{
                const{id,text,heading,img,back_color}=ele;
                return(
                  <HomeSection2Card id={id}  text={text} heading={heading} img={img} back_color={back_color}/>
                )
              })
            }
            
          </div>
        </div>
        <div className='home__outer__section2__right'>
          <div className='home__outer__section2__right__inner'>
            <Parallax blur={1} bgImage={back2} style={{borderRadius:"1rem"}} bgImageAlt="the cat" strength={200}>
              <div className='home__outer__section2__right__inner__img'></div>
            </Parallax>
          </div>
        </div>
      </div>
      <Parallax blur={1} bgImage={back8} bgImageAlt="the cat" strength={200}>
        <div className='home__outer__section3'>
          <div className='home__outer__section3__inner'>
            <div className='home__outer__section3__smallhead'data-aos="fade-right" >
              THREE SIMPLE STEPS TO
            </div>
            <div className='home__outer__section2__head'data-aos="fade-right">
              Find the One for You
            </div>
          </div>
          
          <div className='home__outer__section3__content'>
              {
                HomeSection3Data.map((ele)=>{
                  const{id,img,heading}=ele;
                  return(
                    <HomeSection3Card id={id} img={img} heading={heading} num={id+1}/>
                  )
                })
              }
          </div>
        </div>
      </Parallax>
      <div className='home__outer__section2'>
        <div className='home__outer__section2__right'>
          <div className='home__outer__section2__right__inner'>
            <Parallax blur={1} bgImage={back5} style={{borderRadius:"1rem"}} bgImageAlt="the cat" strength={200}>
              <div className='home__outer__section2__right__inner__img'></div>
            </Parallax>
          </div>
        </div>
        <div className='home__outer__section4__left'>
          <div className='home__outer__section2__left__inner'>
            <div className='home__outer__section2__left__inner__smallhead' data-aos="fade-left">
              BEST FOR YOU
            </div>
            <div className='home__outer__section2__left__inner__head' data-aos="fade-left">
              Membership Plans
            </div>
            <div className='home__outer__section2__left__inner__content'>
              <div className='home__outer__section2__left__inner__content__each'  data-aos="fade-left"  data-aos-delay={0}>
                <div className='home__outer__section2__left__inner__content__each__head'>
                  Free 
                </div>
                {
                  HomeSection4Data.free.map((ele)=>{
                    const{id,text,icon,colorIcon,colorText}=ele;
                    return(
                      <div key={id} className='home__outer__section2__left__inner__content__each__each' style={{color:colorText}}>
                        <FontAwesomeIcon icon={icon} size="md" color={colorIcon} className='nav__icon'/>{text}
                      </div>
                    )
                  })
                }
                
              </div>
              <div className='home__outer__section2__left__inner__content__each'  data-aos="fade-left" data-aos-delay={100}>
                <div className='home__outer__section2__left__inner__content__each__head'>
                  Paid 
                </div>
                {
                  HomeSection4Data.paid.map((ele)=>{
                    const{id,text,icon,colorIcon,colorText}=ele;
                    return(
                      <div key={id} className='home__outer__section2__left__inner__content__each__each' style={{color:colorText}}>
                        <FontAwesomeIcon icon={icon} size="md" color={colorIcon} className='nav__icon'/>{text}
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className='home__outer__section2__left__inner__button'>
                <div className='home__outer__section2__left__inner__button__each' >
                  Browse Plans
                </div>
            </div> 
          </div>
        </div>
        
        
      </div>
      <Parallax blur={1} bgImage={back6} bgImageAlt="the cat" strength={200}>
        <div className='home__outer__section5'>
          <div className='home__outer__section3__inner'>
            <div className='home__outer__section3__smallhead'data-aos="fade-right" style={{color:"white"}} >
            LAKHS OF HAPPY COUPLES
            </div>
            <div className='home__outer__section2__head'data-aos="fade-right">
            Matched by Wedding+
            </div>
          </div>
          
          <div className='home__outer__section5__content'>
            <Carousel 
              responsive={responsive} 
              draggable
              pauseOnHover
              infinite
              showDots={true}
              removeArrowOnDeviceType={["tablet", "mobile","desktop"]}>
                  {
                    HomeSection5Data.map((ele)=>{
                      const{id,img,heading}=ele;
                      return(
                        <HomeSection5Card id={id} img={img} heading={heading} num={id+1}/>
                      )
                    })
                  }
              </Carousel>
          </div>
        </div>
      </Parallax>


      <div className='home__outer__section2'>
        <div className='home__outer__section2__right'>
          <div className='home__outer__section2__right__inner'>
            <Parallax blur={1} bgImage={back5} style={{borderRadius:"1rem"}} bgImageAlt="the cat" strength={200}>
              <div className='home__outer__section2__right__inner__img'></div>
            </Parallax>
          </div>
        </div>
        <div className='home__outer__section4__left'>
          <div className='home__outer__section2__left__inner'>
            <div className='home__outer__section2__left__inner__smallhead' data-aos="fade-left">
              BEST FOR YOU
            </div>
            <div className='home__outer__section2__left__inner__head' data-aos="fade-left">
              Membership Plans
            </div>
            <div className='home__outer__section2__left__inner__content'>
              <div className='home__outer__section2__left__inner__content__each'  data-aos="fade-left"  data-aos-delay={0}>
                <div className='home__outer__section2__left__inner__content__each__head'>
                  Free 
                </div>
                {
                  HomeSection4Data.free.map((ele)=>{
                    const{id,text,icon,colorIcon,colorText}=ele;
                    return(
                      <div key={id} className='home__outer__section2__left__inner__content__each__each' style={{color:colorText}}>
                        <FontAwesomeIcon icon={icon} size="md" color={colorIcon} className='nav__icon'/>{text}
                      </div>
                    )
                  })
                }
                
              </div>
              <div className='home__outer__section2__left__inner__content__each'  data-aos="fade-left" data-aos-delay={100}>
                <div className='home__outer__section2__left__inner__content__each__head'>
                  Paid 
                </div>
                {
                  HomeSection4Data.paid.map((ele)=>{
                    const{id,text,icon,colorIcon,colorText}=ele;
                    return(
                      <div key={id} className='home__outer__section2__left__inner__content__each__each' style={{color:colorText}}>
                        <FontAwesomeIcon icon={icon} size="md" color={colorIcon} className='nav__icon'/>{text}
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className='home__outer__section2__left__inner__button'>
                <div className='home__outer__section2__left__inner__button__each' >
                  Browse Plans
                </div>
            </div> 
          </div>
        </div>
        
        
      </div>
      
    </>
  );
}

export default Home;