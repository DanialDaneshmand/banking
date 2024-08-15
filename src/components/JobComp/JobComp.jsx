import React from "react";
import { FaBriefcase } from "react-icons/fa6";

const options = [
  {
    title: "Relationship Manager",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates        aliquid dolore nostrum magni iusto natus laborum ratione. Beatae        doloremque debitis facere. Accusantium non voluptatibus at error sint        assumenda, doloribus aliquid, est porro, nisi repellendus ipsam animi",
  },
  {
    title: "Relationship Manager",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates        aliquid dolore nostrum magni iusto natus laborum ratione. Beatae        doloremque debitis facere. Accusantium non voluptatibus at error sint        assumenda, doloribus aliquid, est porro, nisi repellendus ipsam animi",
  },
  {
    title: "Relationship Manager",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates        aliquid dolore nostrum magni iusto natus laborum ratione. Beatae        doloremque debitis facere. Accusantium non voluptatibus at error sint        assumenda, doloribus aliquid, est porro, nisi repellendus ipsam animi",
  },
];

function JobComp() {
  return (
    <div className="my-32">
      <HeaderOfJob />
      <BodyOfJob />
    </div>
  );
}

export default JobComp;

function HeaderOfJob() {
  return (
    <div>
      <p className=" text-4xl my-4 text-gray-400">
        <span className=" text-[rgb(202,255,51)]">Job Openning</span>
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

function BodyOfJob() {
  return (
    <div className="my-16 grid md:grid-cols-2 gap-8">
      {options.map((item) => (
        <div key={item.title} className="p-4 bg-[rgb(28,28,28)] rounded-2xl">
          <div>
            <p className=" text-gray-200 text-2xl">{item.title}</p>
            <div className="flex flex-col items-start sm:flex-row sm:items-center gap-x-2 mt-3 text-gray-400">
              <div className="mb-3 sm:mb-0 border bg-[rgb(32,32,32)] rounded-full py-1 px-3">
                Locatin:India
              </div>
              <div className=" border bg-[rgb(32,32,32)] rounded-full py-1 px-3">
                Department: Banking
              </div>
            </div>
          </div>
          <div className="my-6">
            <p className=" text-gray-200 text-xl">About This Job</p>
            <p className=" mt-3 text-gray-400 text-sm">{item.body}</p>
          </div>
          <div>
            <p className=" text-gray-200 text-xl mb-3">
              Requirement & Qualifications
            </p>
            <p className="flex gap-x-2 items-center my-3 text-gray-400 ">
              <span>
                <FaBriefcase />
              </span>
              <span>Lorem ipsum dolor sit amet.</span>
            </p>
            <p className="flex gap-x-2 items-center my-3 text-gray-400 ">
              <span>
                <FaBriefcase />
              </span>
              <span>Lorem ipsum dolor sit amet.</span>
            </p>
            <p className="flex gap-x-2 items-center my-3 text-gray-400 ">
              <span>
                <FaBriefcase />
              </span>
              <span>Lorem ipsum dolor sit amet.</span>
            </p>
            <p className="flex gap-x-2 items-center my-3 text-gray-400 ">
              <span>
                <FaBriefcase />
              </span>
              <span>Lorem ipsum dolor sit amet.</span>
            </p>
          </div>
          <div>
            <button className=" text-sm py-3 mt-4 font-bold px-5 rounded-full bg-[rgb(202,255,51)]">Apply Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}
