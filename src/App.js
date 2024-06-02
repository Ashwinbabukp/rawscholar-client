import React from "react";
import NavbarComponent from "./Components/NavbarComponent";
import FooterComponent from "./Components/FooterComponent";
import "./App.css";
import Home from "./Pages/Home/Home";
import Countries from "./Pages/Countries/Countries";
import { Route, Routes } from "react-router-dom";

function App() {
   return (
      <section>
         <NavbarComponent />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/countries" element={<Countries />} />
         </Routes>
         <FooterComponent />
      </section>
   );
}

export default App;
