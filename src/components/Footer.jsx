import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full h-[100px] bg-[#0a192f] text-gray-300 text-center px-4 py-4 lg:hidden">
      <div className="flex justify-center items-center px-4">
        <div className="flex gap-3">
          <div className="bg-slate-600 p-2 rounded-md">
            <a
              href="https://github.com/andaruakbar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
          </div>
          <div className="bg-blue-700 p-2 rounded-md">
            <a
              href="https://www.linkedin.com/in/andaru-akbar-270484214/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
          <div className="bg-green-700 p-2 rounded-md">
            <a
              href="https://wa.me/+6281232090483"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={30} />
            </a>
          </div>
          <div className="bg-red-700 p-2 rounded-md">
            <a
              href="mailto:andaruakbar11@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiOutlineMail size={30} />
            </a>
          </div>
          <div className="bg-slate-400 p-2 rounded-md">
            <a
              href="https://drive.google.com/file/d/19YFQy7gpeoW1oKjThScBRPFRBJgRbE5f/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFillPersonLinesFill size={30} />
            </a>
          </div>
          <div className="bg-red-900 p-2 rounded-md">
            <a
              href="https://youtu.be/-f-BR8LF-sQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={30} />
            </a>
          </div>
        </div>
      </div>
      <small>&copy; Copyright 2022, Andaru Akbar</small>
    </div>
  );
};

export default Footer;
