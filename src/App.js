import React from "react";
import { Route, Routes } from "react-router-dom";

import NavbarComponent from "./Components/NavbarComponent";
import Home from "./Pages/Home/Home";
import Countries from "./Pages/Countries";
import Universities from "./Pages/Universities";
import University from "./Pages/University";
import PageNotFound from "./Pages/PageNotFound";
import FooterComponent from "./Components/FooterComponent";

import "./App.css";

function App() {
   return (
      <>
         <NavbarComponent />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/universities" element={<Universities />} />
            <Route path="/university" element={<University />} />
            <Route path="*" element={<PageNotFound />} />
         </Routes>
         <FooterComponent />
      </>
   );
}

export default App;
