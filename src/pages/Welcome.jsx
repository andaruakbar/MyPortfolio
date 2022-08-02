import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div name="hero" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#9121f3]">Hi, My Name is</p>
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
        <Link to="/home">
          <div className="flex justify-end">
            <button className=" border-2 border-[#9121f3] px-6 py-3 my-2 flex items-center button-light-hero">
              <span>Get Started</span> <HiArrowNarrowRight className="ml-3" />
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
