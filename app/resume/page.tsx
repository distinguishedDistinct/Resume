"use client";
import { useState } from "react";
import ResumeCard from "../components/ResumeCard";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skill from "../components/Skill";
import About from "../components/About";

// Define a type for the sections
type Section = "experience" | "education" | "skills" | "about";

const Page = () => {
  const [activeSection, setActiveSection] = useState<Section>("experience"); // Default to experience section

  const handleSectionClick = (section: Section) => {
    setActiveSection(section);
  };

  const getButtonStyle = (section: Section) =>
    activeSection === section
      ? "bg-green-600 text-black transition duration-300 ease-in-out"
      : "bg-gray-800 text-white transition duration-300 ease-in-out";

  return (
    <div className="pl-64 bg-base-100 text-white">
      <div className="flex justify-start pt-28 ml-1.5 mr-10p pr-3">
        <div className="flex flex-col justify-start w-40p">
          <div>
            <h1 className="text-4xl">
              <b>Why Hire Me?</b>
            </h1>
          </div>
          <div className="my-6">
            <p className="text-xs leading-normal opacity-70 w-50p">
              I bring a versatile skill set in both web development and graphic
              design.
            </p>
          </div>

          <div>
            <button
              className={`rounded-md w-80p py-2 ${getButtonStyle(
                "experience"
              )}`}
              onClick={() => handleSectionClick("experience")}
            >
              Experience
            </button>
          </div>
          <div>
            <button
              className={`rounded-md w-80p my-6 py-2 ${getButtonStyle(
                "education"
              )}`}
              onClick={() => handleSectionClick("education")}
            >
              Education
            </button>
          </div>
          <div>
            <button
              className={`rounded-md w-80p py-2 ${getButtonStyle("skills")}`}
              onClick={() => handleSectionClick("skills")}
            >
              Skills
            </button>
          </div>
          <div>
            <button
              className={`rounded-md w-80p my-6 py-2 ${getButtonStyle(
                "about"
              )}`}
              onClick={() => handleSectionClick("about")}
            >
              About me
            </button>
          </div>
        </div>

        <div className="w-50p">
          <h1 className="text-4xl">
            <b>
              {activeSection === "experience"
                ? "My Experience"
                : activeSection === "education"
                ? " My Education"
                : activeSection === "about"
                ? "About Me"
                : "My Skills"}
            </b>
          </h1>
          <p className="text-xs leading-normal opacity-70 w-90p my-3">
            I bring a strong background in web development and design, combining
            creativity with practical technical solutions.
          </p>

          {/* Conditionally render based on active section */}
          <div className="">
            {activeSection === "experience" && <Experience />}
            {activeSection === "education" && <Education />}
            {activeSection === "skills" && (
              <p>
                <Skill />
              </p>
            )}
            {activeSection === "about" && <About />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
