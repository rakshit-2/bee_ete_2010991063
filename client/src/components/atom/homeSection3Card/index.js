import './index.css';


const HomeSection3Card=(props)=> {
  return (
    <>
    <div key={props.id} className='home__outer__section3__content__each' data-aos="fade-up"  data-aos-delay={(props.num-1)*150}>
      <img src={props.img} className="home__outer__section3__content__each__img"/>
      <div className='home__outer__section3__content__each__text'>
        <span style={{color:"#f44848"}}>{props.num}</span>{'\u00A0'}{props.heading}
      </div>
    </div>
    </>      
  );
}

export default HomeSection3Card;