"use client";

import React from "react";
import WorkCard from "../components/WorkCard";
import Carousel from "../components/Carousel";

const page = () => {
  return (
    <div className="pl-20p bg-base-100 text-white pt-28">
      <div className=" bg-base-100 text-white flex justify-between mr-80">
        <div className="cardsContainer">
          <WorkCard
            heading="Graphic Designing"
            paragraph="As a graphic designer, I create visually 
          engaging designs that communicate ideas effectively. "
            serial="01"
          />
        </div>
        <div className="cardsContainer">
          <Carousel />
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
        `}</style>
      </div>
    </div>
  );
};

export default page;
