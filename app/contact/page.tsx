"use client";

import React from "react";
import Form from "../components/Form";
import Socials from "../components/Socials";

const page = () => {
  return (
    <div className="Main-Container pl-20p bg-base-100 text-white pt-28 pb-8">
      <div className="Work-container flex justify-between mr-80">
        <div>
          <Form />
        </div>
        <div className="Socials flex flex-col justify-center ml-10">
          <div>
            <Socials />
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1230px) {
          .Main-Container {
            padding-left: 0px;
          }

          .Work-container {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin-left: 0;
            margin-right: auto;
            margin-left: auto;
          }

          .Socials {
            margin-top: 50px; /* Add spacing between WorkCard and Carousel on smaller screens */
            margin-bottom: 50px;
            margin-right: 0; /* Remove right margin for better alignment */
          }
        }
        @media (max-width: 450) {
          .Work-container {
            margin-left: auto;
            margin-right: auto;
            padding-right: 80px;
            width: 70%;
          }
        }
      `}</style>
    </div>
  );
};

export default page;
