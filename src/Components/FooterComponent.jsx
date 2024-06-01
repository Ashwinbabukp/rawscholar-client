import React from 'react';
import logowhite from '../assets/logowhite.png';
import './FooterComponent.css';

function FooterComponent() {
  return <div className='footer' style={{height:"300px", width:"100%", backgroundColor:"#067BC2"}}>
    <div className='container'>
      <img style={{width:"400px"}} src={logowhite} alt="" />
    </div>
    <ul>
        <li className='d-flex'>
          <a href="/">Help</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms and Conditions</a>
          <a href="/">Contact</a>
        </li>
      </ul>
  </div>;
}

export default FooterComponent;
