import './index.css';
import whatsapp from './../../assets/image/whatsapp_logo.svg';
import twitter from './../../assets/image/twitter_logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import back from './../../assets/image/home_back10.jpg'
import { HashLink } from 'react-router-hash-link';
import satyam from './../../assets/image/satyam.jpeg';

const ProfileNortCard1=(props)=>{
    
    return (
        <>
        <div className='profile__inner__notification__addedme__each'>
            <div className='profile__inner__notification__addedme__each__image'>
                <img src={require(`./../../assets/image/${props.ele.user_image}`)} style={{width:"100%",height:"100%",borderRadius:"50%"}}/>
            </div>
            <div className=''>
                <div className='profile__inner__notification__addedme__each__name'>
                    {props.ele.user_name}
                </div>
                <div className='profile__inner__notification__addedme__each__about'>
                    {props.ele.user_about}
                </div>
            </div>
                <div className='profile__inner__notification__addedme__each__button' style={{backgroundColor:"rgb(6, 186, 87)"}}>
                    <FontAwesomeIcon icon={faCheck} size="md" color="white"/> 
                </div>
                <div className='profile__inner__notification__addedme__each__button'  style={{backgroundColor:"rgb(244, 72, 72)"}}>
                    <FontAwesomeIcon icon={faXmark} size="md" color="white"/> 
                </div>
        </div>
        </>
    );
}

export default ProfileNortCard1;