import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Socials = () => {
  return (
    <div>
      <div className="flex">
        <FaPhone
          size={60}
          className="text-green-400 p-2 bg-gray-800 hover:text-white mr-7"
        />
        <div className="flex flex-col">
          <div className="text-xs w-80 leading-normal opacity-80">Phone</div>
          <div className="text-xl w-80 leading-normal font-bold">
            (+92) 324 5283 434
          </div>
        </div>
      </div>
      <div className="flex my-7">
        <FaEnvelope
          size={60}
          className="text-green-400 p-2 bg-gray-800 hover:text-white mr-7"
        />
        <div className="flex flex-col">
          <div className="text-xs w-80 leading-normal opacity-80">Email</div>
          <div className="text-xl w-80 leading-normal font-bold">
            mustafaumar2001@gmail.com
          </div>
        </div>
      </div>
      <div className="flex my-7">
        <FaMapMarkerAlt
          size={60}
          className="text-green-400 p-2 bg-gray-800 hover:text-white mr-7"
        />
        <div className="flex flex-col">
          <div className="text-xs w-80 leading-normal opacity-80">Address</div>
          <div className="text-xl w-80 leading-normal font-bold">
            Rawalipindi, Pakistan
          </div>
        </div>
      </div>
    </div>
  );
};

export default Socials;
