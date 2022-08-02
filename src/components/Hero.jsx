import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Hero = () => {
  return (
    <div name="hero" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-green-700">Hi, My Name is</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#ccd6f6] mb-1">
          Andaru Akbar Priyatmaji
        </h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-[#8892b0]">
          Frontend Developer || Web Design
        </h2>
        <p className="text-[#8892b0] mx-w-[700px] py-4">
          I'm a frontend web developer & web design,I was focused on studying as
          a Frontend technologies like HTML, CSS, Javascript, React Js, Redux,
          Next Js, Tailwind Css and others. Experience in working on a project
          at Alterra academy as support for later in a professional career.
          Highly analytical, motivated and skilled in solving programming
          problems. Can work well both independently and in a team using git
          collaboration., and figma for building Website designs
        </p>
        <div>
          <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-green-700 hover:border-green-700">
            Get Started <HiArrowNarrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
