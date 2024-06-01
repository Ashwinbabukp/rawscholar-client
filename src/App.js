import React from 'react'
import NavbarComponent from './Components/NavbarComponent';
import FooterComponent from './Components/FooterComponent';
import "./App.css"
import Home from './Pages/Home';

function App() {
  return (
    <section>
      <NavbarComponent/>
      <Home/>
      <FooterComponent/>
    </section>
  )
}

export default App
