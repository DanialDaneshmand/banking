import React from "react";

const options = [
  {
    title: "Integrity",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates aliquid dolore nostrum magni iusto natus laborum ratione. Beatae  doloremque debitis facere. Accusantium non voluptatibus at error sint         assumenda, doloribus aliquid, est porro, nisi repellendus ipsam",
  },
  {
    title: " Centricity",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates aliquid dolore nostrum magni iusto natus laborum ratione. Beatae  doloremque debitis facere. Accusantium non voluptatibus at error sint         assumenda, doloribus aliquid, est porro, nisi repellendus ipsam",
  },
  {
    title: "Collaboration",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates aliquid dolore nostrum magni iusto natus laborum ratione. Beatae  doloremque debitis facere. Accusantium non voluptatibus at error sint         assumenda, doloribus aliquid, est porro, nisi repellendus ipsam",
  },
  {
    title: "Innovation",
    body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates aliquid dolore nostrum magni iusto natus laborum ratione. Beatae  doloremque debitis facere. Accusantium non voluptatibus at error sint         assumenda, doloribus aliquid, est porro, nisi repellendus ipsam",
  },
];

function ValuesComp() {
  return (
    <div className=" my-16">
      <HeaderOfValues />
      <div className="my-16 grid  md:grid-cols-2 gap-8">
        {
            options.map(item=><div className="pt-1 sm:pr-4 md:pr-1 pl-5 border-[rgb(202,255,51)] border-l " key={item.title}>
                <p className="text-4xl mb-3 font-bold text-[rgb(40,40,40)] w-full">{item.title}</p>
                <p className=" text-gray-400 text-sm">{item.body}</p>
            </div>)
        }
      </div>
    </div>
  );
}

export default ValuesComp;

function HeaderOfValues() {
  return (
    <div>
      <p className=" text-4xl my-4 text-gray-400">
        Our <span className=" text-[rgb(202,255,51)]">Values</span>
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
