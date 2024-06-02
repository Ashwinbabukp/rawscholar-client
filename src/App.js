import React from "react";
import NavbarComponent from "./Components/NavbarComponent";
import FooterComponent from "./Components/FooterComponent";
import "./App.css";
import Home from "./Pages/Home/Home";
import Countries from "./Pages/Countries";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound";
import Universities from "./Pages/Universities";
import University from "./Pages/University";

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
