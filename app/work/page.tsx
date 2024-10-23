"use client";

import React, { useState } from "react";
import WorkCard from "../components/WorkCard";
import Carousel from "../components/Carousel";

const Page = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Data for both Carousel and WorkCard
  const slidesData = [
    {
      heading: "Graphic Designing",
      paragraph:
        "As a graphic designer, I create visually engaging designs that communicate ideas effectively.",
      serial: "01",
      tools: "HTML 5, CSS 3, JavaScript",
      image:
        "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp",
    },
    {
      heading: "Web Development",
      paragraph:
        "I build dynamic websites and applications using modern web technologies.",
      serial: "02",
      tools: "React, Node.js, MongoDB",
      image:
        "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slidesData.length - 1 : prev - 1));
  };

  return (
    <div className="Main-Container pl-20p bg-base-100 text-white pt-28 pb-8">
      <div className="Work-container bg-base-100 text-white flex justify-between mr-80 pr-8">
        {/* Pass the current slide data to WorkCard */}
        <div className="cardsContainer mr-20">
          <WorkCard
            heading={slidesData[currentSlide].heading}
            paragraph={slidesData[currentSlide].paragraph}
            serial={slidesData[currentSlide].serial}
            tools={slidesData[currentSlide].tools}
          />
        </div>
        {/* Pass current slide, nextSlide, and prevSlide to Carousel */}
        <div className="cardsContainer w-96">
          <Carousel
            slides={slidesData.map((slide) => slide.image)}
            currentSlide={currentSlide}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
          />
        </div>
        <style jsx>{`
          @media (max-width: 1500px) {
            .Main-Container {
              padding-left: 0px;
            }

            .Work-container {
              flex-direction: column;
              align-items: center;
              justify-content: center;
              margin-left: 0;
              margin-right: 50px;
            }

            .cardsContainer {
              margin-bottom: 20px; /* Add spacing between WorkCard and Carousel on smaller screens */
              margin-right: 0; /* Remove right margin for better alignment */
            }
          }
          @media (max-width: 400px) {
            .Work-container {
            
              margin-left: auto;
              margin-right: auto;
              padding-right: 80px;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default Page;
