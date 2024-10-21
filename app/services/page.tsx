"use client";

import React from "react";
import Card from "../components/Card";

const page = () => {
  return (
    <div className="mainContainer pl-20p bg-base-100 text-white ">
      <div className="cardsContainer">
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
      <div className="cardsContainer">
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

      {/* Add the custom styles */}
      <style jsx>{`
        .cardsContainer {
          display: flex;
          justify-content: space-between;
          padding-top: 7rem;
          margin-left: 0.375rem;
          margin-right: 20rem;
          padding-right: 1.25rem;
        }

        /* Media query for screens 1300px and smaller */
        @media (max-width: 1300px) {
          .cardsContainer {
            flex-direction: column;
            margin-right: 1.25rem; /* Adjust margin for smaller screens */
          }
        }
      `}</style>
    </div>
  );
};

export default page;
