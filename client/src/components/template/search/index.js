import './index.css';
import Navbar from '../navbar';

const Seach=(props)=> {
  return (
    <>
      <Navbar LoggedIn={props.LoggedIn} LoggedInStatus={props.LoggedInStatus}/>
        Seach
    </>
  );
}

export default Seach;