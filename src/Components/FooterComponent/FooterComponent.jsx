import React from "react";
import logowhite from "../../assets/logowhite.png";
import style from "./FooterComponent.module.css";
import { Link } from "react-router-dom";

function FooterComponent() {
   return (
      <div className="footer" style={{ backgroundColor: "#067BC2", paddingBlock:"80px" }}>
         <div className="container d-flex align-items-center">
            <img width={100} src={logowhite} alt="" />
            <ul style={{ listStyle: "none" }}>
               <li>
                  <Link
                     to="/"
                     style={{ textDecoration: "none", color: "white" }}
                  >
                     Help
                  </Link>
               </li>
               <li>
                  <Link
                     to="/"
                     style={{ textDecoration: "none", color: "white" }}
                  >
                     Privacy Policy
                  </Link>
               </li>
               <li>
                  <Link
                     to="/"
                     style={{ textDecoration: "none", color: "white" }}
                  >
                     Terms and Conditions
                  </Link>
               </li>
               <li>
                  <Link
                     to="/"
                     style={{ textDecoration: "none", color: "white" }}
                  >
                     Contact
                  </Link>
               </li>
            </ul>
         </div>
      </div>
   );
}

export default FooterComponent;
