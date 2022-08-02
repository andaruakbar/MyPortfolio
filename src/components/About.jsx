import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-sreen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-green-700">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I`m Andaru, nice to meet you. enjoy with my personal website
            </p>
          </div>
          <div>
            <p>
              Experience in working on a project at Alterra academy as support
              for later in a professional career. Highly analytical, motivated
              and skilled in solving programming problems. Can work well both
              independently and in a team using git collaboration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
