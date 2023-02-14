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
import Err from './components/template/err/index'
import Admin from './components/template/admin/index'
import AdminEnter from './components/template/adminEnter/index'


import { faTriangleExclamation,faCircleCheck,faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const App=(props)=> {
  AOS.init({
    offset: 100,
    duration: 1500,
    easing: 'ease-in-sine',
  });



  // globalStates
  const[LoggedIn,setLoggedIn]=useState("");
  const[LoggedInStatus,setLoggedInStatus]=useState(false);
  const[adminLoggedIn,setAdminLoggedIn]=useState("");
  const[adminLoggedInStatus,setAdminLoggedInStatus]=useState(true);

  const[errorDisplay,setErrorDisplay]=useState("none")
  const[errorIcon,setErrorIcon]=useState()
  const[errorText,setErrorText]=useState("Error")
  const[errorColor,setErrorColor]=useState("red")


  function myStopFunction() 
  {
    setErrorDisplay("none");
  }

  function showError(message,type)
  {
    setErrorText(message)
    if(type==="success")
    {
      setErrorIcon(faCircleCheck);
      setErrorDisplay("flex");
      setErrorColor("green")
    }
    else if(type==="info")
    {
      setErrorIcon(faCircleInfo);
      setErrorDisplay("flex")
      setErrorColor("#FD9229")
    }
    else
    {
      setErrorIcon(faTriangleExclamation);
      setErrorDisplay("flex")
      setErrorColor("red")
    }
    setTimeout(myStopFunction, 4000);
  }




  function LoggedInStatusCheck(x,data)
  {
    setLoggedIn(data);
    setLoggedInStatus(x);
  }

  function AdminLoggedInStatusCheck(x,data)
  {
    setAdminLoggedIn(data);
    setAdminLoggedInStatus(x);
  }


  

  function valuetext(value) {
      return `${value}`;
  }

  const [age, setAge] = useState([20, 50]);
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
        <Route path="/" element={<Navigate to="/home" replace />} />
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



            errorDisplay={errorDisplay}
            errorIcon={errorIcon}
            errorText={errorText}
            errorColor={errorColor}
            showError={showError}

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


            showError={showError}
            errorDisplay={errorDisplay}
            errorIcon={errorIcon}
            errorText={errorText}
            errorColor={errorColor}
          />}>

        </Route>
        <Route path="/profile" element={
          <Profile 
            LoggedInStatusCheck={LoggedInStatusCheck}
            LoggedIn={LoggedIn} LoggedInStatus={LoggedInStatus}


            showError={showError}
            errorDisplay={errorDisplay}
            errorIcon={errorIcon}
            errorText={errorText}
            errorColor={errorColor}
          />}>

        </Route>
        <Route path="/auth" element={
          <Auth 
            LoggedIn={LoggedIn}
            LoggedInStatusCheck={LoggedInStatusCheck}
            LoggedInStatus={LoggedInStatus}

            showError={showError}
            errorDisplay={errorDisplay}
            errorIcon={errorIcon}
            errorText={errorText}
            errorColor={errorColor}
          />}>
          </Route>
        <Route path="/admin" element={
          <Admin 
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
            errorDisplay={errorDisplay}
            errorIcon={errorIcon}
            errorText={errorText}
            errorColor={errorColor}
            showError={showError}
            AdminLoggedInStatusCheck={AdminLoggedInStatusCheck}
            adminLoggedIn={adminLoggedIn}
            adminLoggedInStatus={adminLoggedInStatus}
          />}>
        </Route>
        <Route path="/admin-enter" element={
          <AdminEnter 
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
            errorDisplay={errorDisplay}
            errorIcon={errorIcon}
            errorText={errorText}
            errorColor={errorColor}
            showError={showError}
            AdminLoggedInStatusCheck={AdminLoggedInStatusCheck}
            adminLoggedIn={adminLoggedIn}
            adminLoggedInStatus={adminLoggedInStatus}
          />}>
        </Route>
        <Route path="/err" element={
          <Err 
            LoggedIn={LoggedIn}
            LoggedInStatusCheck={LoggedInStatusCheck}
            LoggedInStatus={LoggedInStatus}

            showError={showError}
            errorDisplay={errorDisplay}
            errorIcon={errorIcon}
            errorText={errorText}
            errorColor={errorColor}
          />}>
          </Route>
        <Route path="*" element={<Navigate to="/err" replace />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
