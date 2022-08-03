import React, { useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Welcome = () => {
  useEffect(() => {
    document.title = "Welcome to My Website";
  }, []);
  return (
    <div name="hero" className="w-full h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#9121f3]">Hello!, Everyone</p>
        <h1 className="text-4xl py-4 sm:text-6xl font-bold text-[#ccd6f6] mb-1">
          Welcome To My Personal Website
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#8892b0]">
          I hope you can enjoy the contents of my website
        </h2>
        <Link to="/home">
          <div className="flex pt-4">
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
