import "./App.css";
import About from "./components/About";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Education />
      <Skills />
    </div>
  );
}

export default App;
