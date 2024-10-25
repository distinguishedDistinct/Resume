"use client";

import React, { useState } from "react";
import Card from "../components/Card";

const page = () => {
  const [isModal, setIsModal] = useState(false);

  // Function to toggle the modal state
  const Modal = () => {
    setIsModal(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModal(false);
  };

  return (
    <div className="mainContainer pl-20p bg-base-100 text-white pt-28">
      {isModal ? (
        // Modal content that appears when `isModal` is true
        <div className="Modal-Container fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 ">
          <div className="modalContent bg-white p-5 rounded-lg text-black">
            <h2 className="text-2xl mb-4">Modal Title</h2>
            <p>
              This is the modal content. Click outside or the button to close.
            </p>
            <button
              onClick={closeModal}
              className="mt-4 bg-green-400 text-black p-2 rounded"
            >
              Close Modal
            </button>
          </div>
        </div>
      ) : (
        <div className="mr-80 pr-5">
          <div className="cardsContainer flex justify-between">
            <Card
              heading="Graphic Designing"
              paragraph="As a graphic designer, I create visually 
              engaging designs that communicate ideas effectively."
              serial="01"
              Modal={Modal}
            />
            <Card
              heading="Graphic Designing"
              paragraph="As a graphic designer, I create visually 
              engaging designs that communicate ideas effectively."
              serial="02"
              Modal={Modal}
            />
          </div>
          <div className="cardsContainer flex justify-between">
            <Card
              heading="Graphic Designing"
              paragraph="As a graphic designer, I create visually 
              engaging designs that communicate ideas effectively."
              serial="03"
              Modal={Modal}
            />
            <Card
              heading="Graphic Designing"
              paragraph="As a graphic designer, I create visually 
              engaging designs that communicate ideas effectively."
              serial="04"
              Modal={Modal}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        /* Media query for screens 1300px and smaller */
        @media (max-width: 1300px) {
          .cardsContainer {
            flex-direction: column;
            justify-content: center
            margin-right: 1.25rem; /* Adjust margin for smaller screens */
          }
        }

        @media (max-width: 400px) {
          .mainContainer {
          align-item: center;
            margin-left: auto;
            margin-right: auto;
            padding-top: 80px;

          }
          
        }
      `}</style>
    </div>
  );
};

export default page;
