"use client";

import React from "react";
import Card from "../components/Card";

const page = () => {
  return (
    <div className="mainContainer pl-20p bg-base-100 text-white pt-28">
      <div className="mr-80 pr-5">
        <div className="cardsContainer flex justify-between">
          <Card
            heading="Graphic Designing"
            paragraph="As a graphic designer, I create visually 
          engaging designs that communicate ideas effectively. "
            serial="01"
          />
          <Card
            heading="Graphic Designing"
            paragraph="As a graphic designer, I create visually 
          engaging designs that communicate ideas effectively. "
            serial="02"
          />
        </div>
        <div className="cardsContainer flex justify-between">
          <Card
            heading="Graphic Designing"
            paragraph="As a graphic designer, I create visually 
          engaging designs that communicate ideas effectively. "
            serial="03"
          />
          <Card
            heading="Graphic Designing"
            paragraph="As a graphic designer, I create visually 
          engaging designs that communicate ideas effectively. "
            serial="04"
          />
        </div>
      </div>

      {/* Add the custom styles */}
      <style jsx>{`
        /* Media query for screens 1300px and smaller */
        @media (max-width: 1300px) {
          .cardsContainer {
            flex-direction: column;
            margin-right: 1.25rem; /* Adjust margin for smaller screens */
          }
        }
        @media (max-width: 400px) {
          .mainContainer {
            padding-left: 50px;
            margin-left: auto;
            margin-right: auto;
          }
          .cardsContainer {
          }
        }
      `}</style>
    </div>
  );
};

export default page;
