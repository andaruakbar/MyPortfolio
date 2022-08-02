import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skill from "./components/Skill";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Projects />
    </div>
  );
}

export default App;
