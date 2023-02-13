
import './index.css';
// import err_img from './../../assets/images/err.jpg';
import ErrorCard from '../../atom/errorCard';
import Navbar from '../navbar';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';


const AdminEnter=(props)=>{
    const navigate=useNavigate()



return (
    <>
    <ErrorCard 
        errorDisplay={props.errorDisplay}
        errorIcon={props.errorIcon}
        errorText={props.errorText}
        errorColor={props.errorColor}
    />
    <Navbar LoggedIn={props.LoggedIn} LoggedInStatus={props.LoggedInStatus} />
    <div className='adminenter__outer'>
        <div className='adminenter__inner'>
            
        </div>
    </div>
    </>
);
}

export default AdminEnter;