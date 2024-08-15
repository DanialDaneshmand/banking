import React from "react";

function StartComp() {
  return (
    <div className="my-32">
      <HeaderOfStart />
    </div>
  );
}

export default StartComp;
function HeaderOfStart() {
  return (
    <div className="flex md:items-center flex-col md:flex-row bg-[rgb(32,32,32)] rounded-2xl p-8">
      <div className=" md:w-8/12 ">
        <p className=" text-4xl my-4 text-gray-200">
          Start Your Career With{" "}
          <span className=" text-[rgb(202,255,51)]">Your Bank Today!</span>
        </p>
        <p className=" text-gray-400 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
          aliquid dolore nostrum magni iusto natus laborum ratione. Beatae
          doloremque debitis facere. Accusantium .
        </p>
      </div>
      <div className=" md:w-4/12 flex justify-center mt-4 md:mt-0 md:justify-end">
        <button className=" text-sm py-3 mt-4  px-5 rounded-full bg-[rgb(202,255,51)]">
          Open Account
        </button>
      </div>
    </div>
  );
}
