import Navbar from "./components/Navbar"
import './App.css';
import Front from "./Pages/Front";
import AboutMe from "./Pages/AboutMe";
import Projects from "./Pages/Projects";
import GitHub from "./Pages/GitHub";
import SmallProjects from "./Pages/SmallProjects";
import TechStack from "./Pages/TechStack";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Front />
      <AboutMe />
      <Projects />
      <SmallProjects />
      <GitHub />
      <TechStack />
      <Contact />
    </div>
  );
}

export default App;
