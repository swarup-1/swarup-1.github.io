import Navbar from "./components/Navbar"
import './App.css';
import Front from "./Pages/Front";
import AboutMe from "./Pages/AboutMe";
import Projects from "./Pages/Projects";
import GitHub from "./Pages/GitHub";
import TechStack from "./Pages/TechStack";
import Contact from "./Pages/Contact";
import gif from "./assets/gif.gif";
import { Box, Image } from "@chakra-ui/react";

import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2700);
    return () => clearTimeout(timer);
  }, []);
  return loading ? (
    <Box height="100vh"  backgroundColor={{base:"black",md:"none"}} paddingTop={{base:"60%",sm:"30%",md:"10px"}} >
      <Image src={gif} w="100%" />
    </Box>
  )
  :
  (
    <div className="App">
      <Navbar />
      <Front />
      <AboutMe />
      <TechStack />
      <Projects />
      <GitHub />
      <Contact />
    </div>
  );
}

export default App;
