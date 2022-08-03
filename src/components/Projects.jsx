import React from "react";
import anmovie from "../assets/projects/ANMOVIES.png";
import infinity from "../assets/projects/INFINITY-SPORT.png";
import house from "../assets/projects/TEKNOLOGI.png";
import todo from "../assets/projects/TODO-LIST-APP.png";

const Projects = () => {
  return (
    <div
      name="project"
      className="w-full h-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="py-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#9121f3]">
            Project
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${house})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="pt-8 text-center">
                <a
                  href="https://housefancygroup1.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center border-2 border-[#2196f3] rounded-lg px-2 py-1 m-2 button-light-demo">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/andaruakbar/House-Fancy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center border-2 border-[#9121f3] rounded-lg px-2 py-1 m-2 button-light-code">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${infinity})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center border-2 border-[#2196f3] rounded-lg px-2 py-1 m-2 button-light-demo">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/andaruakbar/project-olshop-frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center border-2 border-[#9121f3] rounded-lg px-2 py-1 m-2 button-light-code">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${anmovie})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="pt-8 text-center">
                <a
                  href="https://mymovies-app-react-andaru.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center border-2 border-[#2196f3] rounded-lg px-2 py-1 m-2 button-light-demo">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/andaruakbar/mymovies-app-react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center border-2 border-[#9121f3] rounded-lg px-2 py-1 m-2 button-light-code">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${todo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="text-center">
                <a
                  href="https://todo-list-app-andaru.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center border-2 border-[#2196f3] rounded-lg px-2 py-1 m-2 button-light-demo">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/andaruakbar/todo-list-app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center border-2 border-[#9121f3] rounded-lg px-2 py-1 m-2 button-light-code">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
