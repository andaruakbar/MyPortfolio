import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full h-[100px] bg-[#0a192f] text-gray-300 text-center px-4 py-4 lg:hidden">
      <div className="flex justify-center items-center px-4">
        <div className="flex gap-3">
          <div className="bg-slate-600 p-2 rounded-md">
            <a href="/">
              <FaGithub size={30} />
            </a>
          </div>
          <div className="bg-blue-700 p-2 rounded-md">
            <a href="/">
              <FaLinkedin size={30} />
            </a>
          </div>
          <div className="bg-green-700 p-2 rounded-md">
            <a href="/">
              <FaWhatsapp size={30} />
            </a>
          </div>
          <div className="bg-red-700 p-2 rounded-md">
            <a href="/">
              <HiOutlineMail size={30} />
            </a>
          </div>
          <div className="bg-slate-400 p-2 rounded-md">
            <a href="/">
              <BsFillPersonLinesFill size={30} />
            </a>
          </div>
        </div>
      </div>
      <small>&copy; Copyright 2022, Andaru Akbar</small>
    </div>
  );
};

export default Footer;
