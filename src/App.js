import "./App.css";
import About from "./components/About";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Hero />
      <div className="container2">
        <About />
        <Education />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
