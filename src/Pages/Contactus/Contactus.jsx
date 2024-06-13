import React from 'react';
import './Contactus.css';
import { Button } from 'react-bootstrap';
import Call from "../../assets/blue-icon/Call.svg";
import Message from "../../assets/blue-icon/Message.svg";
import Location from "../../assets/blue-icon/Location.svg";


function Contactus() {
  return (
    <div className="container p-5 ">
      <div className={'titleBar d-flex shapeParent'}>
        <div className="shape"></div>
        <h2 className="fs-4 ms-4">Contact us </h2>
      </div>
      <div className=" container contact-text row">
        <div className="col d-flex justify-content-center align-items-center flex-column" >
          <h2 style={{color:"#067BC2"}} >Let’s connect</h2>
          <p>We are here to help you out anytime </p>
          <div className='connectList p-2' >
            <ul>
              <li className='p-2 ' ><img   width={30} src={Call} alt="" />1234567890</li>
              <li  className='p-2'><img width={30}  src={Message} alt="" />rawscholar@gmail.com</li>
              <li  className='p-2'><img width={30}  src={Location} alt="" />rawscholar@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="col">
          <form className="formContainer shadow d-flex flex-column align-items-center gap-3 ">
            <div className="form-group mb-2">
              <p className="m-0">Email</p>
              <input
                className="inputBox"
                type="text"
                placeholder="Enter Email"
                style={{ fontSize: '15px' }}
              />
            </div>
            <div className="form-group mb-2">
              <p className="m-0">Password</p>
              <input
                className="inputBox"
                type="text"
                placeholder="Enter Password"
                style={{ fontSize: '15px' }}
              />
            </div>
            <Button
              className="mt-2 mb-3 w-100 "
              style={{ fontSize: '13px' }}
              type="submit"
            >
              Login
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
