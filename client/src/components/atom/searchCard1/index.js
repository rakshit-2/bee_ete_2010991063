import './index.css';
// import test from './../../assets/images/back1.jpg';
import whatsapp from './../../assets/image/whatsapp_logo.svg';
import twitter from './../../assets/image/twitter_logo.svg';
// import { requirePropFactory } from '@mui/material';
// import { display } from '@mui/system';
// import image from './../../assets/images/home1.jpg';
import Axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchCard1=(props)=>{
    const navigate=useNavigate()
    const[reqDisplay,setReqDisplay]=useState({
        connect:"flex",
        req:"none"
    })


    function connectClicked(toEmail)
    {
        Axios.post('http://localhost:5000/api/search/connect-user',
        {
            email: props.LoggedIn,
            toEmail:toEmail,
        }).then((res) => {
            if(res.data.message==="Subscription Over")
            {
                props.showError("Subscription Over Add more from Profile!!","info")
                navigate("/profile")
            }
            else
            {
                props.showError("Request Sent!!","success")
                setReqDisplay({connect:"none",req:"flex"})
            }
            
        });
    }

    function requestedClicked(toEmail)
    {
        Axios.post('http://localhost:5000/api/search/remove-user',
        {
            email: props.LoggedIn,
            toEmail:toEmail,
        }).then((res) => {
            props.showError("Request Removed!!","info")
            setReqDisplay({connect:"flex",req:"none"})
        });
    }
    
    return (
        <>
        <div className='search__inner__right__each'>
            <div className='search__inner__right__each__img'>
                <img src={require(`./../../assets/image/${props.ele.user_image}`)} style={{width:"100%",height:"100%",borderRadius:"10px"}}/>
            </div>
            <div className='search__inner__right__each__content'>
                <div className='search__inner__right__each__content__top'>
                    <div className='search__inner__right__each__content__top__left'>
                        <div className='search__inner__right__each__content__heading'>
                            {props.ele.user_name}
                        </div>
                        <div className='search__inner__right__each__content__heading' style={{color:"grey",fontSize:"14px",fontWeight:"500"}}>
                            {props.ele.user_state}
                        </div>
                    </div>
                    <div className='search__inner__right__each__content__top__right'>
                        <div style={{display:reqDisplay.connect}} className='search__inner__right__each__content__contact__button' onClick={()=>{connectClicked(props.ele.user_email)}}>
                            Connect
                        </div>
                        <div style={{display:reqDisplay.req}} className='search__inner__right__each__content__contact__button' onClick={()=>{requestedClicked(props.ele.user_email)}}>
                            Requested
                        </div>
                    </div>
                </div>
                <div className='search__inner__right__each__content__heading'>
                    About Me:
                </div>
                <div className='search__inner__right__each__content__desc'>
                    {props.ele.user_about}

                </div>
                <div className='search__inner__right__each__content__inner'>
                    <div className='search__inner__right__each__content__price'>
                        DOB: {props.ele.user_dob}
                    </div>
                    <div className='search__inner__right__each__content__price'>
                        Zodiac Sign: {props.ele.user_zodiac} <span className='search__inner__right__each__content__price__small'>(Zodiac)</span>
                    </div>
                    <div className='search__inner__right__each__content__price'>
                        Religion: {props.ele.user_religion}
                    </div>
                    <div className='search__inner__right__each__content__price'>
                        Height: {props.ele.user_height}<span className='search__inner__right__each__content__price__small'>(Cm)</span>
                    </div>
                    <div className='search__inner__right__each__content__price'>
                        Age: {props.ele.user_age}<span className='search__inner__right__each__content__price__small'>(Years)</span>
                    </div>
                    <div className='search__inner__right__each__content__price'>
                        Marital Status: {props.ele.user_marstat}
                    </div>
                    <div className='search__inner__right__each__content__price'>
                        Salary: {props.ele.user_sallary} <span className='search__inner__right__each__content__price__small'>(LPA)</span>
                    </div>
                    <div className='search__inner__right__each__content__price'>
                        Mother Tongue: {props.ele.user_motherTongue}
                    </div>
                    
                </div>
                {/* <div className='search__inner__right__each__content__filter'>
                    {display_filter()}
                </div> */}
                
            </div>
        </div>
        </>
    );
}

export default SearchCard1;