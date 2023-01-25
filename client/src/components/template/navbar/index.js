import './index.css';
import back1 from './../../assets/image/home_back2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from './../../assets/image/logo2.png'

{/* <i class="fa-sharp fa-solid fa-file-magnifying-glass"></i> */}

const Navbar=(props)=> {
  return (
    <>
    <div className='navbar__outer'>
        <div className='navbar__inner'>
            <div className='navbar__inner__left'>
                <img src={logo} style={{width:"50px",height:"50px",borderRadius:"50%"}}/>
            </div>
            <div className='navbar__inner__center'>
                Wedding+
            </div>
            <div className='navbar__inner__right'>
                <FontAwesomeIcon icon={faSearch} size="xl" color="black" className='nav__icon' /> 
                <FontAwesomeIcon icon={faUser} size="xl" color="black" className='nav__icon' /> 
            </div>
        </div>
    </div>
    </>
  );
}

export default Navbar;