import './index.css';
// import test from './../../assets/images/back1.jpg';
import whatsapp from './../../assets/image/whatsapp_logo.svg';
import twitter from './../../assets/image/twitter_logo.svg';
// import { requirePropFactory } from '@mui/material';
// import { display } from '@mui/system';
// import image from './../../assets/images/home1.jpg';


const SearchCard1=(props)=>{
    function display_filter()
    {
        var lis=[];
        for(var i=0;i<props.li.length;i++)
        {
            lis.push(
            <div className='search__inner__right__each__content__filter__each'>
                {props.li[i]}
            </div>
            )
        }
        return lis;
    }
    return (
        <>
        <div className='search__inner__right__each'>
            <div className='search__inner__right__each__img'>
                <img src={require("./../../assets/image/samarth.jpeg")} style={{width:"100%",height:"100%",borderRadius:"10px"}}/>
            </div>
            <div className='search__inner__right__each__content'>
                <div className='search__inner__right__each__content__top'>
                    <div className='search__inner__right__each__content__top__left'>
                        <div className='search__inner__right__each__content__heading'>
                            Rakshit Sharma
                        </div>
                        <div className='search__inner__right__each__content__heading' style={{color:"grey",fontSize:"14px",fontWeight:"500"}}>
                            Haryana, India
                        </div>
                    </div>
                    <div className='search__inner__right__each__content__top__right'>
                        <div className='search__inner__right__each__content__contact__button'>
                            Connect
                        </div>
                    </div>
                </div>
                
                <div className='search__inner__right__each__content__inner'>
                    <div className='search__inner__right__each__content__price'>
                        DOB: 2 March 2002
                    </div>
                    <div className='search__inner__right__each__content__price'>
                        Zodiac Sign: Pisces <span className='search__inner__right__each__content__price__small'>(Zodiac)</span>
                    </div>
                    <div className='search__inner__right__each__content__price'>
                        Religion: Hindu
                    </div>
                    <div className='search__inner__right__each__content__price'>
                        Height: 166<span className='search__inner__right__each__content__price__small'>(Cm)</span>
                    </div>
                    <div className='search__inner__right__each__content__price'>
                        Age: 21 <span className='search__inner__right__each__content__price__small'>(Years)</span>
                    </div>
                    <div className='search__inner__right__each__content__price'>
                        Marital Status: Unmarried
                    </div>
                    <div className='search__inner__right__each__content__price'>
                        Salary: 20 <span className='search__inner__right__each__content__price__small'>(LPA)</span>
                    </div>
                    <div className='search__inner__right__each__content__price'>
                        Mother Tongue: Hindi
                    </div>
                    
                </div>
                {/* <div className='search__inner__right__each__content__filter'>
                    {display_filter()}
                </div> */}
                <div className='search__inner__right__each__content__heading'>
                    About Me:
                </div>
                <div className='search__inner__right__each__content__desc'>
                    hi i am rakshit sharma studen at chit aka akjskjdansjl aljksndlaks xla
                    hi i am rakshit sharma studen at chit aka akjskjdansjl aljksndlaks xla

                </div>
            </div>
        </div>
        </>
    );
}

export default SearchCard1;