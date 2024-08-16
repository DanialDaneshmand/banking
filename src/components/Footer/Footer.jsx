import React from "react";
import { FaAtlassian } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <div className=" md:px-32 bg-[rgb(32,32,32)] w-full  flex flex-col items-center">
      <div className=" border-b border-[rgb(40,40,40)] w-full py-4 flex justify-center items-center flex-col gap-4 mt-16">
        <div className=" flex  justify-center items-center gap-x-2 lg:gap-x-4 w-64">
          <span className=" text-lg md:text-xl text-[rgb(202,255,51)]">
            <FaAtlassian />
          </span>
          <span className=" text-lg md:text-xl font-bold text-[rgb(170,170,170)]">
            Your Bank
          </span>
        </div>
        <div>
          <ul className="text-[rgb(198,198,198)] flex   items-center gap-x-2">
            <li className=" navbar__item">Home</li>
            <li className="navbar__item">Careers</li>
            <li className="navbar__item">About</li>
            <li className="navbar__item">Security</li>
          </ul>
        </div>
      </div>
      <div className=" py-12 flex flex-col items-center md:flex-row gap-y-4 md:gap-y-0 justify-center gap-x-8 border-b border-[rgb(40,40,40)] w-full">
        <div className=" flex items-center gap-x-2">
          <span className=" text-[rgb(202,255,51)]">
            <FaRegEnvelope />
          </span>
          <span className=" text-gray-200">danial11111377@gmail.com</span>
        </div>
        <div className=" flex items-center gap-x-2">
          <span className=" text-[rgb(202,255,51)]">
            <FaPhone />
          </span>
          <span className=" text-gray-200">09392923907</span>
        </div>
        <div className=" flex items-center gap-x-2">
          <span className=" text-[rgb(202,255,51)]">
            <FaLocationDot />
          </span>
          <span className=" text-gray-200">somewhere in the word</span>
        </div>
      </div>
      <div className=" w-full  py-16 flex justify-center">
        <div className="px-8 flex-col md:flex-row gap-y-4 md:gap-y-0 mx-4 md:mx-0 w-full rounded-full border border-[rgb(40,40,40)] flex items-center justify-between p-3">
          <div className=" flex  gap-x-2">
            <div className="flex  justify-center items-center bg-[rgb(202,255,51)] rounded-full sm:w-16 sm:h-16 w-12 h-12">
              <span className=" text-[rgb(32,32,32)] text-2xl sm:text-4xl">
                <FaSquareFacebook />
              </span>
            </div>
            <div className="flex justify-center items-center bg-[rgb(202,255,51)] rounded-full sm:w-16 sm:h-16 w-12 h-12">
              <span className=" text-[rgb(32,32,32)] text-2xl sm:text-4xl">
                <FaSquareTwitter />
              </span>
            </div>
            <div className="flex justify-center items-center bg-[rgb(202,255,51)] rounded-full sm:w-16 sm:h-16 w-12 h-12">
              <span className=" text-[rgb(32,32,32)] text-2xl sm:text-4xl ">
                <FaLinkedin />
              </span>
            </div>
          </div>
          <div className=" text-gray-200">YourBank All Right Reserved</div>
          <div className=" text-gray-200 py-2">
            <span>Privacy Policy</span>
            <span className=" border-l mx-4"></span>
            <span>Terme Of Service</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
