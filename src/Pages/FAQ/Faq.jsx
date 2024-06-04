import React, { useState } from "react";

import downArrow from "../../assets/icons/down arrow.svg";

import "./Faq.css";

function Faq() {
   const [show, setShow] = useState(false);
   const accordian = () => {
      setShow(true);
   };

   return (
      <section id="faqSection " className="my-5">
         <div className="faqTitle text-center mb-5">
            <h2>Frequently Asked Questions</h2>
            <hr />
         </div>
         <div className="container d-flex flex-column align-items-center gap-4">
            <div className="faq rounded shadow-sm p-3" onClick={accordian}>
               <div className="question">
                  <h5 className="d-flex justify-content-between">
                     1. What is the apt time for submitting an application form
                     to the Universities ?
                     <img src={downArrow} alt="down arrow" />
                  </h5>
               </div>
               {show && (
                  <div className="answer">
                     <hr className="answerLine" />
                     <p className="px-5">
                        Major institutions in a particular country may have one,
                        two or three intakes during an academic year. So you
                        should take steps at least one year in advance for the
                        respective intake.
                     </p>
                  </div>
               )}
            </div>
            <div className="faq rounded shadow-sm p-3">
               <div className="question">
                  <h5 className="d-flex justify-content-between">
                     1. What is the apt time for submitting an application form
                     to the Universities ?
                     <img src={downArrow} alt="down arrow" />
                  </h5>
               </div>
               <div className="answer">
                  <hr className="answerLine" />
                  <p className="px-5">
                     Major institutions in a particular country may have one,
                     two or three intakes during an academic year. So you should
                     take steps at least one year in advance for the respective
                     intake.
                  </p>
               </div>
            </div>
            <div className="faq rounded shadow-sm p-3">
               <div className="question">
                  <h5 className="d-flex justify-content-between">
                     1. What is the apt time for submitting an application form
                     to the Universities ?
                     <img src={downArrow} alt="down arrow" />
                  </h5>
               </div>
               <div className="answer">
                  <hr className="answerLine" />
                  <p className="px-5">
                     Major institutions in a particular country may have one,
                     two or three intakes during an academic year. So you should
                     take steps at least one year in advance for the respective
                     intake.
                  </p>
               </div>
            </div>
            <div className="faq rounded shadow-sm p-3">
               <div className="question">
                  <h5 className="d-flex justify-content-between">
                     1. What is the apt time for submitting an application form
                     to the Universities ?
                     <img src={downArrow} alt="down arrow" />
                  </h5>
               </div>
               <div className="answer">
                  <hr className="answerLine" />
                  <p className="px-5">
                     Major institutions in a particular country may have one,
                     two or three intakes during an academic year. So you should
                     take steps at least one year in advance for the respective
                     intake.
                  </p>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Faq;
