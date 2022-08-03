import React from "react";
import andaru from "../assets/personal/andaru.png";

const Hero = () => {
  return (
    <div name="hero" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] grid sm:grid-cols-2 mx-auto px-8 justify-center">
        <div className="sm:self-center lg:text-right lg:self-center">
          <p className="mt-20 md:mt-40 text-[#9121f3]">Hi, My Name is</p>
          <h1 className=" text-3xl sm:text-5xl  font-bold text-[#ccd6f6] mb-1">
            Andaru Akbar Priyatmaji
          </h1>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#8892b0]">
            Frontend Developer || Web Design
          </h2>
        </div>
        <div className="pt-10 md:mt-40 flex items-center justify-center">
          <img src={andaru} alt="" className="w-60 h-70" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
