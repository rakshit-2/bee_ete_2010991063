import './index.css';

import home_people from './../../assets/image/home_people.svg';

const HomeSection2Card=(props)=> {
  return (
    <>
    <div key={props.id} style={{backgroundColor:props.back_color}} className='home__outer__section2__left__inner__each' data-aos="fade-right">
        <div className ='home__outer__section2__left__inner__each__img'>
        <img src={props.img} style={{width:"100%",height:"100%"}}/>
        </div>
        <div className='home__outer__section2__left__inner__each__info'>
        <div className='home__outer__section2__left__inner__each__info__head'>
            {props.heading}
        </div>
        <div className='home__line1'></div>
        <div className='home__outer__section2__left__inner__each__info__text'>
            {props.text}
        </div>
        </div>
    </div>
    </>      
  );
}

export default HomeSection2Card;