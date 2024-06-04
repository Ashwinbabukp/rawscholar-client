import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import NavbarComponent from './Components/NavbarComponent/NavbarComponent';
import Home from './Pages/Home/Home';
import Countries from './Pages/Countries';
import Universities from './Pages/Universities';
import University from './Pages/University';
import PageNotFound from './Pages/PageNotFound';
import FooterComponent from './Components/FooterComponent/FooterComponent';

import './App.css';
import Login from './Pages/Login/Login';

function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && <NavbarComponent />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/universities" element={<Universities />} />
        <Route path="/university" element={<University />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/login" element={<Login show={setShow} />} />
      </Routes>
      {show && <FooterComponent />}
    </>
  );
}

export default App;
