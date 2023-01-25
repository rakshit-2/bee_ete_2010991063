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
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
