import React from "react";

import notfound from "../assets/notfound.png";

function PageNotFound() {
   return (
      <>
         <section id="notFoundSection">
            <div className="container text-center my-5">
               <img src={notfound} alt="Not Found" />
               <h1
                  style={{
                     color: "#39C6B5",
                     fontFamily: "Lilita One, sans-serif",
                     fontSize: "90px",
                  }}
               >
                  404
               </h1>
               <p>Page Not Found</p>
               <button className="btn btn-outline-info rounded-pill">
                  Go Back
               </button>
            </div>
         </section>
      </>
   );
}

export default PageNotFound;
