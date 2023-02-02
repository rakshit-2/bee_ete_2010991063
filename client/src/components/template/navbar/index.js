import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import logo from './../../assets/image/logo3.jpg';
import { useNavigate } from 'react-router-dom';

{/* <i class="fa-sharp fa-solid fa-file-magnifying-glass"></i> */}

const Navbar=(props)=> {
    const navigate = useNavigate();
  return (
    <>
    <div className='navbar__outer'>
        <div className='navbar__inner'>
            <div className='navbar__inner__left' onClick={()=>{navigate("/home")}}>
                <img src={logo} style={{width:"50px",height:"50px",borderRadius:"50%"}}/>
            </div>
            <div className='navbar__inner__center' onClick={()=>{navigate("/home")}}>
                Wedding+
            </div>
            <div className='navbar__inner__right'>
                <FontAwesomeIcon icon={faSearch} size="xl" color="black" className='nav__icon' onClick={()=>{navigate("/search")}}/> 
                {
                    props.LoggedInStatus ? (
                        <FontAwesomeIcon icon={faUser} size="xl" color="black" className='nav__icon' onClick={()=>{navigate("/profile")}}/> 
                    ):(
                        <FontAwesomeIcon icon={faRightToBracket} size="xl" color="black" className='nav__icon' onClick={()=>{navigate("/auth")}}/>  
                    )
                }
                
                
            </div>
        </div>
    </div>
    </>
  );
}

export default Navbar;