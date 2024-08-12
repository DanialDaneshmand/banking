import React, { useState } from "react";
import { FaAtlassian } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";
import { FaRectangleXmark } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";

function Header() {
  const [show, setShow] = useState(false);
  return (
    <div className="   w-full flex justify-between px-6 bg-[rgb(32,32,32)] my-8 py-4 rounded-full border border-[#252525]">
      <Logo />
      {show && (
        <div className="block lg:hidden backdrop-blur-sm bg-opacity-30 w-screen h-screen absolute left-0 top-0 bg-gray-500">
          <div className=" p-8 lg:p-0 lg:w-full sm:w-[450px] h-screen lg:h-auto w-full absolute right-0 top-0 bg-[rgb(32,32,32)]">
            <button
              onClick={() => setShow(false)}
              className=" text-xl text-[rgb(202,255,51)]"
            >
              <FaXmark />
            </button>
            <div className="flex flex-col-reverse lg:flex-row items-end gap-y-32 justify-between lg:justify-around w-full ">
              <NavbarLinks />
              <LoginBox />
            </div>
          </div>
        </div>
      )}
      <div className=" hidden lg:block w-full">
        <div className="  flex flex-col-reverse lg:flex-row items-end  justify-between lg:justify-around w-full ">
          <NavbarLinks />
          <LoginBox />
        </div>
      </div>

      <button
        onClick={() => setShow(!show)}
        className="text-xl block lg:hidden text-[rgb(202,255,51)]"
      >
        <FaBars />
      </button>
    </div>
  );
}

export default Header;

function Logo() {
  return (
    <div className=" flex justify-start items-center gap-x-2 lg:gap-x-4 w-64">
      <span className=" text-lg md:text-xl text-[rgb(202,255,51)]">
        <FaAtlassian />
      </span>
      <span className=" text-lg md:text-xl font-bold text-[rgb(170,170,170)]">
        Your Bank
      </span>
    </div>
  );
}

function NavbarLinks() {
  return (
    <div>
      <ul className="text-[rgb(198,198,198)] flex gap-y-12 lg:gap-y-0 flex-col lg:flex-row items-center gap-x-2">
        <li className=" navbar__item">Home</li>
        <li className="navbar__item">Careers</li>
        <li className="navbar__item">About</li>
        <li className="navbar__item">Security</li>
      </ul>
    </div>
  );
}

function LoginBox() {
  return (
    <div className=" flex justify-center items-center gap-x-1">
      <div className="login__item">Sign Up</div>
      <div className="login__item">Login</div>
    </div>
  );
}
