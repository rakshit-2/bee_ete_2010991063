import './index.css';


const HomeSection5Card=(props)=> {
  return (
    <>
    <div key={props.id} className='home__outer__section5__content__each' data-aos="fade-up"  data-aos-delay={(props.num-1)*150}>
      <img src={props.img} className="home__outer__section5__content__each__img"/>
      <div className='home__outer__section5__content__each__text'>
        {props.heading}
      </div>
    </div>
    </>      
  );
}

export default HomeSection5Card;