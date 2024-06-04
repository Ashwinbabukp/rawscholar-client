import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import StudyIllustration from '../../assets/StudyIllustration.svg';
import './Login.css';

function Login({ show }) {
  show(false);
  return (
    <div className="containerlogin d-flex justify-content-center align-items-center">
      <img className='p-1 d-none d-sm-block' src={StudyIllustration} alt="" height="700"  />
      <form className="formContainer shadow d-flex flex-column align-items-center gap-3">
        <img className='mb-5' src={Logo} alt="" width={200} />
        <div className="form-group mb-2">
          <p className="m-0">Email</p>
          <input className="inputBox" type="text" placeholder="Enter Email" />
        </div>
        <div className="form-group mb-2">
          <p className="m-0">Password:</p>
          <input
            className="inputBox"
            type="text"
            placeholder="Enter Password"
          />
          <div>
            <a style={{fontSize:"13px"}} href="/">Forgotten Password?</a>
          </div>
        </div>
        <Button className='mb-5' type="submit">Login</Button>
        <p className="p-1" style={{ fontSize: '13px' }}>
          Don’t have account yet?
          <Link to={'/sign'} style={{ color: 'blue', fontSize: '13px' }}>
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
