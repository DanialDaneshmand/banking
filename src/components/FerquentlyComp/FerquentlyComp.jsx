import React from "react";
import { FaAngleDown } from "react-icons/fa6";

const options = [
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing?",
    body: "  eius labore dicta exercitationem magnam porro facere accusantium at? Modi sint, suscipit repellat aperiam nulla laborum expedita sapiente itaque. ipsum dolor sit amet consectetur adipisicing elit. Quae, quasi. Necessitatibus delectus nisi vitae fuga dicta aut quis velit numquam! ",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing?",
    body: "   voluptate consequatur possimus aperiam. A quos impedit eum assumenda ratione dolore esse doloribus dolores? Facere, inventore? ipsum dolor sit amet consectetur adipisicing elit. Quae, quasi. Necessitatibus delectus nisi vitae fuga dicta aut quis velit numquam!",
  },
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing?",
    body: "   voluptate consequatur possimus aperiam. A quos impedit eum assumenda ratione dolore esse doloribus dolores? Facere, inventore? ipsum dolor sit amet consectetur adipisicing elit. Quae, quasi. Necessitatibus delectus nisi vitae fuga dicta aut quis velit numquam!",

  },
  {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing?",
    body: "   voluptate consequatur possimus aperiam. A quos impedit eum assumenda ratione dolore esse doloribus dolores? Facere, inventore? ipsum dolor sit amet consectetur adipisicing elit. Quae, quasi. Necessitatibus delectus nisi vitae fuga dicta aut quis velit numquam!",

  },
];

function FerquentlyComp() {
  return (
    <div className="my-32">
      <HeaderOfFerquently />
      <BodyOfFerquently />
      <div className="flex justify-center py-8">
        <button className="bg-[rgb(32,32,32)] text-gray-400 text-sm  py-2 px-5 rounded-full border flex items-center gap-x-2 border-[rgb(40,40,40)]"><span>Load All FAQ'S</span> <span><FaAngleDown/></span></button>
      </div>
    </div>
  );
}

export default FerquentlyComp;

function HeaderOfFerquently() {
  return (
    <div>
      <p className=" text-4xl my-4 text-gray-400">
        <span className=" text-[rgb(202,255,51)]">Ferquently</span> Asked
        Questions
      </p>
      <p className=" text-gray-400 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum
        dolor sit amet.
      </p>
    </div>
  );
}

function BodyOfFerquently() {
  return (
    <div className=" grid md:grid-cols-2 gap-8 mt-16">
      {options.map((item) => (
        <div className=" border border-[rgb(40,40,40)] bg-[rgb(32,32,32)] rounded-2xl p-8" key={item.title}>
          <div className="border-b border-[rgb(40,40,40)] py-4">
            <p className=" font-bold text-gray-200 ">{item.title}</p>
          </div>
          <div>
            <p className=" text-sm text-gray-400 py-6">{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
