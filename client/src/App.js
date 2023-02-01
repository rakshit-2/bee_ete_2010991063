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





  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={
          <Home 
            LoggedIn={LoggedIn} LoggedInStatus={LoggedInStatus}
          />}>
        </Route>
        <Route path="/search" element={
          <Search
            LoggedIn={LoggedIn} LoggedInStatus={LoggedInStatus}
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
