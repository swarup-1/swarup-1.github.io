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

import {Helmet} from "react-helmet";

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
      <Helmet>
        <title>Swarup Kadoli - MERN Stack Developer</title>
        <meta name="description" content="Welcome to Swarup's portfolio website. Explore a diverse collection of web development projects, showcasing my expertise in the MERN stack. From building responsive front-end designs to developing complex back-end functionality, I combine technical knowledge with creative vision to produce exceptional results. Check out my portfolio to see examples of my work and learn more about my experience and skills as a developer. Contact me today to bring your next project to life with cutting-edge web technology." />
        <meta name="author" content="Swarup Kadoli" />
        <meta name="keywords" content="Swarup Kadoli, swarup, kadoli, masai, Masai School, Web developer, portfolio, MERN Stack Developer, web development projects, front-end designs, back-end functionality, technical knowledge, creative vision, exceptional results, portfolio, experience, skills, cutting-edge web technology" />
        <meta property="og:title" content="Swarup Kadoli - MERN Stack Developer" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Welcome to Swarup's portfolio website. Explore a diverse collection of web development projects, showcasing my expertise in the MERN stack. From building responsive front-end designs to developing complex back-end functionality, I combine technical knowledge with creative vision to produce exceptional results. Check out my portfolio to see examples of my work and learn more about my experience and skills as a developer. Contact me today to bring your next project to life with cutting-edge web technology." />
        <meta property="og:url" content="https://swarup-1.github.io/" />
        <meta property="og:site_name" content="Swarup Kadoli | Portfolio" />
        <meta property="og:locale" content="en_US" />
        <meta property="profile:first_name" content="Swarup" />
        <meta property="profile:last_name" content="Kadoli" />
        <meta property="profile:username" content="swarup-1" />
        <meta property="profile:gender" content="male" />
        <meta property="profile:email" content="swarup.kadoli@gmail.com" />
        <meta property="profile:url" content="https://www.linkedin.com/in/swarup-kadoli-902512221/" />
        <meta property="profile:github" content="https://github.com/swarup-1" />
      </Helmet>
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
