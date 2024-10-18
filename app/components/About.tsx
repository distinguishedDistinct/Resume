import React from "react";

const About = () => {
  return (
    <div className="flex justify-between ">
      <div className="flex justify-start mt-10">
        <div className="flex flex-col mr-5">
          <p className="text-2xs leading-normal opacity-70 mb-2">Name</p>
          <p className="text-2xs leading-normal opacity-70 mb-2 my-5">
            Experience
          </p>
          <p className="text-2xs leading-normal opacity-70 mb-2 my-5">
            Nationality
          </p>
          <p className="text-2xs leading-normal opacity-70 mb-2 my-5">
            Freelance
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xs leading-normal font-bold mb-2">
            Mustafa Umar
          </h3>
          <h3 className="text-2xs leading-normal font-bold mb-2 my-5">
            4 Years
          </h3>
          <h3 className="text-2xs leading-normal font-bold mb-2 my-5">
            Pakistani
          </h3>
          <h3 className="text-2xs leading-normal font-bold mb-2 my-5">
            Available
          </h3>
        </div>
      </div>
      <div className="flex justify-start h-72 mt-10">
        <div className="flex flex-col mr-10">
          <p className="text-2xs leading-normal opacity-70 mb-2">Phone</p>
          <p className="text-2xs leading-normal opacity-70 mb-2 my-5">
            Instagram
          </p>
          <p className="text-2xs leading-normal opacity-70 mb-2 my-5">Email</p>
          <p className="text-2xs leading-normal opacity-70 mb-2 my-5">
            Languages
          </p>
        </div>
        <div className="flex flex-col">
          <h3 className="text-2xs leading-normal font-bold mb-2">
            (+92) 324 5283 434
          </h3>
          <h3 className="text-2xs leading-normal font-bold mb-2 my-5">
            mustafa_umar.jpg
          </h3>
          <h3 className="text-2xs leading-normal font-bold mb-2 my-5">
            mustafaumar2001@gmail.com
          </h3>
          <h3 className="text-2xs leading-normal font-bold mb-2 my-5 ">
            English, Urdu
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
