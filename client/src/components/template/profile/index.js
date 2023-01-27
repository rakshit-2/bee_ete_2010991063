import './index.css';
import Navbar from '../navbar';

const Profile=(props)=> {
  console.log(props.LoggedIn)
  return (
    <>
      <Navbar LoggedIn={props.LoggedIn} LoggedInStatus={props.LoggedInStatus}/>
        Profile
    </>
  );
}

export default Profile;