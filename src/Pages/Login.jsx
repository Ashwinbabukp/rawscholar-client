import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from "../assets/Logo.svg";

function Login({ show }) {
  show(false);
  return (
    <div className="container-login">
      <form className="formContainer">
          <img src={Logo} alt="" />
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
            />
            <p className="p-1" style={{fontSize:"15px"}}>New User?<Link to={"/sign"} style={{color:"blue",fontSize:"15px"}}>click here</Link> </p>
          </div>
          <Button type="submit">Login</Button>
        </form>
    </div>
  );
}

export default Login;
