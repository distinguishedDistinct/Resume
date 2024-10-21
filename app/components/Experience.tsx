import React from "react";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <div className="Resume flex flex-wrap gap-4 h-96 overflow-y-auto w-100p ">
      <ResumeCard
        date="2020 - 2021"
        title=" Freelance Web Developer"
        desc="E-commerce"
      ></ResumeCard>
      <ResumeCard
        date="2020 - 2021"
        title=" Freelance Web Developer"
        desc="E-commerce"
      ></ResumeCard>
      <ResumeCard
        date="2020 - 2021"
        title=" Freelance Web Developer"
        desc="E-commerce"
      ></ResumeCard>
      <ResumeCard
        date="2020 - 2021"
        title=" Freelance Web Developer"
        desc="E-commerce"
      ></ResumeCard>
      <ResumeCard
        date="2020 - 2021"
        title=" Freelance Web Developer"
        desc="E-commerce"
      ></ResumeCard>
      <ResumeCard
        date="2020 - 2021"
        title=" Freelance Web Developer"
        desc="E-commerce"
      ></ResumeCard>
      <style jsx>{`
        @media (max-width: 830px) {
          .Resume {
            flex-direction: column;
            overflow: scroll;
            height: 200px;
          }
        }
        @media (max-width: 580px) {
          .Resume {
            overflow: scroll;
            height: 300px;
            margin-left: 0px;
          }
        }
      `}</style>
    </div>
  );
};

export default Experience;
