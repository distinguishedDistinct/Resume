import React from "react";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon

const WorkCard = (props: {
  heading: string;
  paragraph: string;
  serial: string;
  tools: string;
}) => {
  return (
    <div className="card ">
      <div className="transition ease-in-out delay-100  hover:text-green-400 duration-300 ">
        <div className="flex">
          <h1 className="text-5xl ">{props.serial}</h1>
        </div>
        <h1 className="text-3xl font-bold my-5">{props.heading}</h1>
      </div>
      <p className="text-xs w-96 leading-normal opacity-70">
        {props.paragraph}
      </p>
      <h1 className="text-sm font-bold mt-5 text-green-400">{props.tools}</h1>

      <div className="opacity-50 border-b border-gray-500 my-4 "></div>
      <div className="flex">
        <button className=" mr-5 w-11 h-11 -rotate-120deg text-3xl bg-gray-800 rounded-full transition ease-in-out delay-150 hover:bg-white hover:-rotate-90 hover:text-black">
          ↓
        </button>
        <button className=" p-2 text-3xl bg-gray-800 rounded-full transition ease-in-out delay-150 hover:bg-white hover:text-black">
          <FaGithub />
        </button>
      </div>
    </div>
  );
};

export default WorkCard;
