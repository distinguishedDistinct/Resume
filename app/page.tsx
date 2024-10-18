"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import CountUp from "react-countup";
import {
  FaFileDownload,
  FaHeadphones,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

const Page = () => {
  return (
    <div>
      <div className="mainContainer pl-10p bg-base-100 text-white pt-28">
        <div className="flex1">
          <div className="Owner flex justify-between ml-1.5 items-center">
            <div className="OwnerInfo">
              <h1>Software Developer</h1>
              <h2 className="text-7xl mt-2 text-justify">
                Hello I'm
                <br />
                <span className="text-green-500">Mustafa Umar</span>
              </h2>
              <p className="w-72 text-sm text-justify mt-5">
                I excel at crafting elegant digital experiences and I am
                proficient in various languages and technologies.
              </p>
              <div className="flex justify-around mt-5">
                <button className="btn btn-ghost border border-green-500 text-green-500 hover:bg-white hover:text-black px-4 py-2 rounded-full">
                  DOWNLOAD CV
                  <FaFileDownload className="inline mr-2" />
                </button>
                <a
                  href="#"
                  className="flex items-center text-green-700 border border-green-500 hover:bg-white hover:text-black pr-2 pl-4 rounded-full"
                >
                  <FaHeadphones className="mr-2" />
                </a>
                <a
                  href="#"
                  className="flex items-center text-green-700 border border-green-500 hover:bg-white hover:text-black pr-2 pl-4 rounded-full"
                >
                  <FaLinkedin className="mr-2" />
                </a>
                <a
                  href="#"
                  className="flex items-center text-green-700 border border-green-500 hover:bg-white hover:text-black pr-2 pl-4 rounded-full"
                >
                  <FaYoutube className="mr-2" />
                </a>
                <a
                  href="#"
                  className="flex items-center text-green-700 border border-green-500 hover:bg-white hover:text-black pr-2 pl-4 rounded-full"
                >
                  <FaTwitter className="mr-2" />
                </a>
              </div>
            </div>
            <div className="image-container relative mr-80">
              <motion.div
                className="absolute rounded-full border-dashed border-4 border-green-800"
                initial={{ x: -3, y: -3 }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  width: "407px",
                  height: "407px",
                  transform: "translate(-100%, -100%)",
                }}
              />
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: { delay: 1.5, duration: 0.4, ease: "easeIn" },
                  rotate: [0, 0],
                }}
              >
                <Image
                  src="/image.jpg"
                  width={400}
                  height={400}
                  alt="My Image"
                  className="rounded-full"
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="counting flex justify-start mt-20 ">
          <div className="flex justify-center">
            <h1 className="text-5xl font-bold">
              <CountUp start={0} end={4} duration={2.5} />
            </h1>
            <p className="ml-3 text-xs w-16 mt-2">Years of experience</p>
          </div>
          <div className="flex justify-center mx-10p">
            <h1 className="text-5xl font-bold">
              <CountUp start={0} end={9} duration={2.5} />
            </h1>
            <p className="ml-3 text-xs w-16 mt-2">Projects Completed</p>
          </div>
          <div className="flex justify-center">
            <h1 className="text-5xl font-bold">
              <CountUp start={0} end={12} duration={2.5} />
            </h1>
            <p className="ml-3 text-xs w-16 mt-2">Technologies Mastered</p>
          </div>
          <div className="flex justify-center mx-10p">
            <h1 className="text-5xl font-bold">
              <CountUp start={0} end={200} duration={2.5} />
            </h1>
            <p className="ml-3 text-xs w-16 mt-2">Code Commits</p>
          </div>
        </div>
      </div>

      {/* Media query for 1434px width */}
      <style jsx>{`
        @media (max-width: 1434px) {
          .Owner {
            flex-direction: column;
            align-items: center;
          }
          .image-container {
            margin-top: 20px;
            margin-right: 0;
            display: flex;
            justify-content: center;
          }
            .counting {
            flex
            justify-center;
        }
            @media (max-width: 869px){
            .counting{
            display: flex; 
            flex-wrap: wrap;
            width:450px
            justify-content: center
            overflow: scroll
            }
      `}</style>
    </div>
  );
};

export default Page;
