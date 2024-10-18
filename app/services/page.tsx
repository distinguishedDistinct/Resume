import React from "react";
import Card from "../components/Card";

const page = () => {
  return (
    <div className="mainContainer pl-64 bg-base-100 text-white ">
      <div className="flex justify-between pt-28 ml-1.5 mr-30p">
        <Card
          heading="Graphic Designing"
          paragraph="As a graphic designer, I create visually 
          engaging designs that communicate ideas effectively. "
          serial="01"
        ></Card>
        <Card
          heading="Graphic Designing"
          paragraph="As a graphic designer, I create visually 
          engaging designs that communicate ideas effectively. "
          serial="02"
        ></Card>
      </div>
      <div className="flex justify-between pt-28 ml-1.5 mr-30p">
        <Card
          heading="Graphic Designing"
          paragraph="As a graphic designer, I create visually 
          engaging designs that communicate ideas effectively. "
          serial="03"
        ></Card>
        <Card
          heading="Graphic Designing"
          paragraph="As a graphic designer, I create visually 
          engaging designs that communicate ideas effectively. "
          serial="04"
        ></Card>
      </div>
    </div>
  );
};

export default page;
