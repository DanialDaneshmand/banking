import React from "react";
import { FaBoxArchive } from "react-icons/fa6";
import { FaLightbulb } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa6";

const options = [
  {
    id: 1,
    icon: <FaBriefcase />,
    title: "Competitive Compasation",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates aliquid dolore nostrum magni iusto natus laborum ratione. Beatae  doloremque debitis facere. Accusantium non voluptatibus at error sint         assumenda, doloribus aliquid, est porro, nisi repellendus ipsam",
  },
  {
    id: 2,
    icon: <FaLightbulb />,
    title: "Health and Wellness",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates aliquid dolore nostrum magni iusto natus laborum ratione. Beatae  doloremque debitis facere. Accusantium non voluptatibus at error sint         assumenda, doloribus aliquid, est porro, nisi repellendus ipsam",
  },
  {
    id: 3,
    icon: <FaBriefcase />,
    title: "Retirement Planning",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates aliquid dolore nostrum magni iusto natus laborum ratione. Beatae  doloremque debitis facere. Accusantium non voluptatibus at error sint         assumenda, doloribus aliquid, est porro, nisi repellendus ipsam",
  },
  {
    id: 4,
    icon: <FaBriefcase />,
    title: "Work-Life Balance",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates aliquid dolore nostrum magni iusto natus laborum ratione. Beatae  doloremque debitis facere. Accusantium non voluptatibus at error sint         assumenda, doloribus aliquid, est porro, nisi repellendus ipsam",
  },
];

function BenefitsComp() {
  return (
    <div className=" my-32">
      <HeaderOfBenefits />
      <BodyOfBenefits />
    </div>
  );
}

export default BenefitsComp;

function HeaderOfBenefits() {
  return (
    <div>
      <p className=" text-4xl my-4 text-gray-400">
        Our <span className=" text-[rgb(202,255,51)]">Benefits</span>
      </p>
      <p className=" text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
        aliquid dolore nostrum magni iusto natus laborum ratione. Beatae
        doloremque debitis facere. Accusantium non voluptatibus at error sint
        assumenda, doloribus aliquid, est porro, nisi repellendus ipsam animi
      </p>
    </div>
  );
}

function BodyOfBenefits() {
  return (
    <div className=" my-16 grid md:grid-cols-2 gap-8">
      {options.map((item) => (
        <div key={item.id} className={item.id===2||item.id===3?' rounded-t-3xl  rounded-b-md overflow-hidden  md:rounded-tl-lg md:rounded-tr-3xl md:rounded-bl-3xl md:rounded-br-lg':'md:rounded-tl-3xl md:rounded-tr-lg md:rounded-bl-lg md:rounded-br-3xl  rounded-t-3xl  rounded-b-md overflow-hidden md:item2'}>
          <div className=" bg-[rgb(32,32,32)] px-4 py-6">
            <div className=" flex items-center gap-x-4">
              <div className="shadow-[rgb(202,255,51)] shadow-sm bg-[rgb(30,30,30)]  flex justify-center items-center w-16 h-16 rounded-full ">
                <div className=" shadow-[rgb(202,255,51)] shadow-lg  bg-[rgb(35,35,35)]  h-12 w-12 rounded-full  flex justify-center items-center">
                  <span className=" text-[rgb(202,255,51)] text-xl">
                    {item.icon}
                  </span>
                </div>
              </div>
              <span className=" text-xl text-gray-200 ">{item.title}</span>
            </div>
            <div className=" text-gray-400 text-sm">{item.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
