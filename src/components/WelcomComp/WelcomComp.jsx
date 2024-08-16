import React from "react";

function WelcomComp() {
  return (
    <div className=" mt-32 my-8">
      <div className=" hidden md:block">
        <div className="flex   flex-col-reverse md:flex-row  relative  w-full bg-[rgb(32,32,32)] rounded-xl md:p-8">
          <div className="w-4/12">
            <div className=" md:w-[400px] w-full   lg:w-[500px] bg-[rgb(28,28,28)] absolute radius p-6 flex-wrap">
              <p className=" text-2xl lg:text-4xl text-gray-300 font-bold">
                Welcom to
                <span className="  text-[rgb(202,255,51)]">YourBank</span>{" "}
                Careers!
              </p>
              <p className=" text-sm mt-3 text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                unde suscipit eum omnis enim illo sequi cumque corporis. Modi
                possimus illum, quibusdam dicta excepturi soluta dolor sint
                quod, sunt repellendus consequatur repudiandae Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Quidem aperiam sequi
                consectetur, dolorum laborum iusto praesentium !
              </p>
            </div>
          </div>
          <div className="  w-11/12 md:w-8/12  rounded-xl overflow-hidden">
            <img className="w-full" src="/image/image1.jpg" alt="contract" />
          </div>
        </div>
      </div>
      <section className=" py-8 bg-[rgb(32,32,32)] rounded-xl block md:hidden">
        <div className=" flex flex-col-reverse items-center">
          <div className=" radius2 rounded-t-xl rounded-b-lg w-11/12">
            <div className="    bg-[rgb(28,28,28)]  p-6 flex-wrap">
              <p className=" text-2xl lg:text-4xl text-gray-300 font-bold">
                Welcom to
                <span className="  text-[rgb(202,255,51)]">YourBank</span>{" "}
                Careers!
              </p>
              <p className=" text-sm mt-3 text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                unde suscipit eum omnis enim illo sequi cumque corporis. Modi
                possimus illum, quibusdam dicta excepturi soluta dolor sint
                quod, sunt repellendus consequatur 
              </p>
            </div>
          </div>
          <div className="  w-11/12 md:w-8/12  rounded-xl overflow-hidden">
            <img className="w-full" src="/image/image1.jpg" alt="contract" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default WelcomComp;
