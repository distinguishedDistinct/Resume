import React from "react";

const WorkCard = (props: {
  heading: string;
  paragraph: string;
  serial: string;
}) => {
  return (
    <div className="card ">
      <div className="transition ease-in-out delay-100  hover:text-green-600 duration-300 ">
        <div className="flex">
          <h1 className="text-5xl ">{props.serial}</h1>
        </div>
        <h1 className="text-3xl font-bold my-5">{props.heading}</h1>
      </div>
      <p className="text-xs w-80 leading-normal opacity-70">
        {props.paragraph}
      </p>

      <div className="opacity-50 border-b border-gray-500 mt-4"></div>
    </div>
  );
};

export default WorkCard;
