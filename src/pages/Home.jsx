import React, { useState, useEffect } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skill from "../components/Skill";

const Home = () => {
  useEffect(() => {
    document.title = "My Personal Website";
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
