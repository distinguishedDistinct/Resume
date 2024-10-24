import React from "react";
import Input from "../components/Input";

const Form = () => {
  return (
    <div className="Main-Container bg-gray-800 p-5">
      <h1 className="text-green-400 text-3xl"> Let's Work Together</h1>
      <p className="w-96 my-5">
        Want to work with me? send me a message and we'll get back right get
        you.
      </p>
      <div className="Input-containers flex">
        <div className=" First mr-10">
          <Input labels="Name" placeholder="" type="name" />
        </div>
        <Input labels="Email" placeholder="" type="name" />
      </div>
      <div className="Input-containers flex my-5 ">
        <div className="First mr-10">
          <Input labels="Company" placeholder="" type="name" />
        </div>
        <Input labels="Years" placeholder="" type="name" />
      </div>
      <select name="cars" id="cars" className="w-100p py-2">
        <option value="placeholder">Select Service</option>
        <option value="volvo">Web Development</option>
        <option value="saab">Graphic Design</option>
        <option value="mercedes">UI/UX Design</option>
        <option value="audi">Logo Design</option>
      </select>
      <textarea
        name=""
        id=""
        placeholder="Type your message here."
        className="my-5 w-100p"
        rows={8}
      ></textarea>
      <button className="rounded-full font-extrabold bg-green-400 p-2 text-black hover:text-black hover:bg-white">
        Send Message
      </button>
      <style jsx>{`
        @media (max-width: 450px) {
          .Main-Container {
            margin-left: auto;
            margin-right: auto;
            width: 90%;
          }
          .Input-containers {
            flex-direction: column;
            width: 50%;
            margin-right: auto;
            margin-left: auto;
          }

          h1 {
            font-size: 2rem;
          }
          p {
            width: 280px;
            font-size: 10px;
          }
          .First {
            margin-left: 0px;
            margin-right: 0px;
            margin-bottom: 5px;
          }
        }
      `}</style>
    </div>
  );
};

export default Form;
