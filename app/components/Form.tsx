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
      <div className="flex">
        <div className="mr-5 ml-5">
          <Input labels="" placeholder="" type="name" />
        </div>
        <Input labels="" placeholder="" type="name" />
      </div>
      <div className="flex my-5 ">
        <div className="mr-5 ml-5">
          <Input labels="" placeholder="" type="name" />
        </div>
        <Input labels="" placeholder="" type="name" />
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
        @media (max-width: 450) {
          h1 {
            font-size: 2rem;
          }
          p {
            font-size: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default Form;
