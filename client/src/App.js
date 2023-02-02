import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Axios from "axios";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from './components/template/home/index'
import Profile from './components/template/profile/index'
import Search from './components/template/search/index'
import Auth from './components/template/auth/index'

const App=(props)=> {
  AOS.init({
    offset: 100,
    duration: 1500,
    easing: 'ease-in-sine',
  });



  // globalStates
  const[LoggedIn,setLoggedIn]=useState("");
  const[LoggedInStatus,setLoggedInStatus]=useState(false);
  
  
  function LoggedInStatusCheck(x,data)
  {
    setLoggedIn(data);
    setLoggedInStatus(x);
  }



  function valuetext(value) {
      return `${value}`;
  }

  const [age, setAge] = useState([20, 30]);
  const [religion, setReligion] = useState('All');
  const [location, setLocation] = useState('All');


  const handleChangeAge = (event, newValue) => {
      setAge(newValue);
  };

  const handleChangeLocation = (event) => {
      setLocation(event.target.value);
  };

  const handleChangeReligion = (event) => {
      setReligion(event.target.value);
  };





  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={
          <Home 
            LoggedInStatusCheck={LoggedInStatusCheck}
            LoggedIn={LoggedIn} 
            LoggedInStatus={LoggedInStatus}
            location={location}
            religion={religion}
            age={age}
            handleChangeAge={handleChangeAge}
            handleChangeLocation={handleChangeLocation}
            handleChangeReligion={handleChangeReligion}
            valuetext={valuetext}
          />}>
        </Route>
        <Route path="/search" element={
          <Search
            LoggedInStatusCheck={LoggedInStatusCheck}
            LoggedIn={LoggedIn} 
            LoggedInStatus={LoggedInStatus}
            location={location}
            religion={religion}
            age={age}
            handleChangeAge={handleChangeAge}
            handleChangeLocation={handleChangeLocation}
            handleChangeReligion={handleChangeReligion}
            valuetext={valuetext}
          />}>

        </Route>
        <Route path="/profile" element={
          <Profile 
            LoggedInStatusCheck={LoggedInStatusCheck}
            LoggedIn={LoggedIn} LoggedInStatus={LoggedInStatus}
          />}>

        </Route>
        <Route path="/auth" element={
          <Auth 
            LoggedIn={LoggedIn}
            LoggedInStatusCheck={LoggedInStatusCheck}
            LoggedInStatus={LoggedInStatus}
          />}>
          </Route>
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
