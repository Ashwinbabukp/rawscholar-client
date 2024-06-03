import React from "react";
import { Link } from "react-router-dom";

import logowhite from "../../assets/logowhite.png";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";
import whatsapp from "../../assets/icons/whatsapp.svg";
import mail from "../../assets/icons/mail.svg";

import style from "./FooterComponent.module.css";

function FooterComponent() {
   return (
      <div
         className="footer"
         style={{ backgroundColor: "#067BC2", paddingBlock: "30px" }}
      >
         <div className="container d-flex justify-content-between align-items-center">
            <img height={100} src={logowhite} alt="" />
            <ul
               style={{ listStyle: "none", height: "100%" }}
               className="d-flex flex-column gap-4"
            >
               <li>
                  <Link
                     to="/"
                     style={{
                        textDecoration: "none",
                        color: "white",
                     }}
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
            <div className="socials text-light">
               <Link className={style.socialIcon}>
                  <img src={mail} alt="mail" />
                  <span>rawscholar@gmail.com</span>
               </Link>
               <div className="d-flex justify-content-between">
                  <Link
                     to="https://www.facebook.com/rawscholarofficial"
                     target="blank"
                     className={style.socialIcon}
                  >
                     <img src={facebook} alt="facebook" />
                  </Link>
                  <Link
                     to="https://www.instagram.com/rawscholar/"
                     target="blank"
                     className={style.socialIcon}
                  >
                     <img src={instagram} alt="instagram" />
                  </Link>
                  <Link
                     to="https://x.com/rawscholar?lang=en"
                     target="blank"
                     className={style.socialIcon}
                  >
                     <img src={twitter} alt="twitter" />
                  </Link>
                  <Link className={style.socialIcon}>
                     <img src={whatsapp} alt="whatsapp" />
                  </Link>
               </div>
            </div>
            <div className="location">
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.5915165706906!2d76.2837884749214!3d9.967903090135897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80f6e2077d2c286d%3A0xcd50ca008f5bb0c4!2sRawscholar!5e0!3m2!1sen!2sin!4v1717425859167!5m2!1sen!2sin"
                  width="300"
                  height="200"
                  style={{ border: "0" }}
                  className="rounded"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
               ></iframe>
            </div>
         </div>
      </div>
   );
}

export default FooterComponent;
