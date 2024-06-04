import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';
import StudyIllustration from '../../assets/StudyIllustration.svg';
import './Signup.css';


function Signup({show}) {
    show (false)
  return (
    <div className="containerlogin d-flex justify-content-center align-items-center">
      <img className='p-1  d-none d-sm-block' src={StudyIllustration} alt="" height="700"  />
      <form className="formContainer shadow d-flex flex-column align-items-center gap-3">
        <img className='mb-2' src={Logo} alt="" width={180} />
        <div className="form-group">
          <p className="m-0">Full Name<span style={{color:"#067BC2"}}>*</span></p>
          <input className="inputBox" type="text" placeholder="Enter Email" 
          style={{ fontSize: '15px' }} />
        </div>
        <div className="form-group ">
          <p className="m-0">Email<span style={{color:"#067BC2"}}>*</span></p>
          <input className="inputBox" type="text" placeholder="Enter Email" 
          style={{ fontSize: '15px' }} />
        </div>
        <div className="form-group ">
          <p className="m-0">Phone No<span style={{color:"#067BC2"}}>*</span></p>
          <input className="inputBox" type="text" placeholder="Enter Email" 
          style={{ fontSize: '15px' }} />
        </div>

        <div className="form-group ">
          <p className="m-0">Password<span style={{color:"#067BC2"}}>*</span></p>
          <input
            className="inputBox"
            type="text"
            placeholder="Enter Password"
            style={{ fontSize: '15px' }}
          />
        </div>
        <div className="form-group mb-2">
          <p className="m-0">Confirm Password<span style={{color:"#067BC2"}}>*</span></p>
          <input
            className="inputBox"
            type="text"
            placeholder="Enter Password"
            style={{ fontSize: '15px' }}
          />
        </div>
        <Button  className='mt-2  w-100 ' style={{fontSize: '13px'}} type="submit">Signup</Button>
        <p className=" mt-5" style={{ fontSize: '13px' }}>
        Already have an account? 
          <Link  to={'/login'} style={{ color: 'blue', fontSize: '13px' }}>
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}

export default Signup
