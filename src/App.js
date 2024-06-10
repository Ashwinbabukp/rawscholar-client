import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import NavbarComponent from "./Components/NavbarComponent/NavbarComponent";
import Home from "./Pages/Home/Home";
import Countries from "./Pages/Countries";
import Universities from "./Pages/Universities";
import University from "./Pages/University";
import PageNotFound from "./Pages/PageNotFound";
import FooterComponent from "./Components/FooterComponent/FooterComponent";

import "./App.css";
import Login from "./Pages/Login/Login";
import Faq from "./Pages/FAQ/Faq";
import ScrollToTop from "./Components/ScrollToTop";
import Signup from "./Pages/Signup/Signup";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";

function App() {
   const [show, setShow] = useState(true);
   return (
      <>
         {show && <NavbarComponent />}
         <ScrollToTop />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/university" element={<University />} />
            <Route path="/login" element={<Login show={setShow} />} />
            <Route path="/signup" element={<Signup show={setShow} />} />
            <Route path="/forgotpassword" element={<ForgotPassword show={setShow} />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="*" element={<PageNotFound />} />
         </Routes>
         {show && <FooterComponent />}
      </>
   );
}

export default App;
