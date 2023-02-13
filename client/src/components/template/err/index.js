
import './index.css';
// import err_img from './../../assets/images/err.jpg';
import ErrorCard from '../../atom/errorCard';
import Navbar from '../navbar';


const Err=(props)=>{
return (
    <>
    <ErrorCard 
        errorDisplay={props.errorDisplay}
        errorIcon={props.errorIcon}
        errorText={props.errorText}
        errorColor={props.errorColor}

    />
    <Navbar LoggedIn={props.LoggedIn} LoggedInStatus={props.LoggedInStatus} />
    <div className='err__outer'>
        <div className='err__inner__head'style={{marginBottom:"32rem"}}>
            404
        </div>
        <div className='err__inner__head' style={{marginTop:"28rem"}}>
            Go Home
        </div>
        <div className='err__inner'>
        </div>
    </div>
    </>
);
}

export default Err;