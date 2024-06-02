import React from "react";
import germany from "../../assets/flags/germany.png";
import hungary from "../../assets/flags/hungary.png";
import france from "../../assets/flags/france.png";
import latvia from "../../assets/flags/latvia.png";
import malta from "../../assets/flags/malta.png";
import uk from "../../assets/flags/uk.png";
import ireland from "../../assets/flags/ireland.png";
import lithuania from "../../assets/flags/lithuania.png";
import NavbarComponent from "../../Components/NavbarComponent";
import FooterComponent from "../../Components/FooterComponent";
import { Link } from "react-router-dom";

function Countries() {
   return (
      <>
         <section id="countriesSection" className="container">
            <div className="countriesContainer shapeParent">
               <div className="my-5">
                  <div className="shape"></div>
                  <h3 className="ms-4">Countries</h3>
               </div>
               <div className="d-flex flex-wrap justify-content-between row-gap-3 my-5">
                  <div>
                     <img
                        src={germany}
                        height={180}
                        alt="Country pic"
                        className="rounded border"
                     />
                     <div className="title text-center">
                        <p>Germany</p>
                     </div>
                  </div>
                  <div>
                     <img
                        src={hungary}
                        height={180}
                        alt="Country pic"
                        className="rounded border"
                     />
                     <div className="title text-center">
                        <p>Hungary</p>
                     </div>
                  </div>
                  <div>
                     <img
                        src={france}
                        height={180}
                        alt="Country pic"
                        className="rounded border"
                     />
                     <div className="title text-center">
                        <p>France</p>
                     </div>
                  </div>
                  <div>
                     <img
                        src={latvia}
                        height={180}
                        alt="Country pic"
                        className="rounded border"
                     />
                     <div className="title text-center">
                        <p>Latvia</p>
                     </div>
                  </div>
                  <div>
                     <img
                        src={lithuania}
                        height={180}
                        alt="Country pic"
                        className="rounded border"
                     />
                     <div className="title text-center">
                        <p>Lithuania</p>
                     </div>
                  </div>
                  <div>
                     <img
                        src={malta}
                        height={180}
                        alt="Country pic"
                        className="rounded border"
                     />
                     <div className="title text-center">
                        <p>Malta</p>
                     </div>
                  </div>
                  <div>
                     <img
                        src={uk}
                        height={180}
                        alt="Country pic"
                        className="rounded border"
                     />
                     <div className="title text-center">
                        <p>UK</p>
                     </div>
                  </div>
                  <div>
                     <img
                        src={ireland}
                        height={180}
                        alt="Country pic"
                        className="rounded border"
                     />
                     <div className="title text-center">
                        <p>Ireland</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}

export default Countries;
