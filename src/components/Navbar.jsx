import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useDisclosure,
  Image,
} from '@chakra-ui/react';
import '../App.css';
import { Link } from 'react-scroll';
import portfolio_logo from "../assets/portfolio_logo.png";
import Swarup_Kadoli_Resume from "../assets/Swarup_Kadoli_Resume.pdf"
import { ImProfile } from "react-icons/im";
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [sticky, setSticky] = useState(false)
  useEffect(()=>{
    const handleScroll=()=>{
      setSticky(window.scrollY>10)
    }
    window.addEventListener("scroll",handleScroll)
  })
  const handleclick=()=>{
    window.open('https://drive.google.com/file/d/1c9e3JeMGi_Lm-e_JjNd3ChNQyBGg7JZE/view?usp=share_link','_blank')
  }
  
  return (
    <Box position="sticky" top="0" zIndex="2" color="#4ffad2f0" >
      <Flex
        boxShadow="black 0px 3px 8px"
        backgroundColor="#001c29"
        minH={'70px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={'center'}>
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant='outline'
            colorScheme="#64FFDA"
            _hover={{
              bg: 'teal.700',
            }}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link style={{cursor:"pointer" }} to="home" spy={true} smooth={true} offset={-120} duration={500}>
            <Image 
              boxSize='50px'
              objectFit='cover'
              src={portfolio_logo} />
          </Link>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Flex display={{ base: 'none', md: 'flex' }}>
            <DesktopNav />
          </Flex>
          <a href={Swarup_Kadoli_Resume} download="Swarup_Kadoli_Resume.pdf" onClick={handleclick} rel="noreferrer">
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            variant='outline'
            colorScheme="#64FFDA"
            _hover={{
              bg: 'teal.700',
            }}>
            Resume <Text ml="10px" fontWeight="300" ><ImProfile /></Text>
          </Button>
          </a>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {

  return (
    <Box display="flex" alignItems="center" >
      <Link style={{width:"120px",cursor:"pointer" }} className="navhome" to="home" spy={true} smooth={true} offset={-120} duration={500}>Home</Link>
      <Link style={{width:"120px",cursor:"pointer" }} className="navabout" to="about" spy={true} smooth={true} offset={-40} duration={500}>About Me</Link>
      <Link style={{width:"120px",cursor:"pointer" }} className="navprojects" to="projects" spy={true} smooth={true} offset={-40} duration={500}>Projects</Link>
      <Link style={{width:"120px",cursor:"pointer" }} className="navskills" to="skills" spy={true} smooth={true} offset={-40} duration={500}>Skills</Link>
      <Link style={{width:"120px",cursor:"pointer" }} className="navcontact" to="contact" spy={true} smooth={true} offset={-40} duration={500}>Contact Me</Link>
    </Box>
  );
};

const MobileNav = () => {
  const handleclick=()=>{
    window.open('https://drive.google.com/file/d/1c9e3JeMGi_Lm-e_JjNd3ChNQyBGg7JZE/view?usp=share_link','_blank')
  }
  return (
    <Stack
      p={4}
      w={{base:"40%",sm:"30%"}}
      marginBottom="20px"
      borderBottom="1px solid #64FFDA"
      borderRight="1px solid #64FFDA"
      borderTop="1px solid #000f1670"
      backgroundColor="#001c29"
      fontSize={{base:"12px",sm:"15px", md:"17px"}}
      display={{ md: 'none' }}>
          <Flex flexDirection="column" textAlign="start" >
            <Link style={{margin:"10px 0px", cursor:"pointer" }} to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
            <Link style={{margin:"10px 0px", cursor:"pointer" }} to="about" spy={true} smooth={true} offset={-20} duration={500}>About Me</Link>
            <Link style={{margin:"10px 0px", cursor:"pointer" }} to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>
            <Link style={{margin:"10px 0px", cursor:"pointer" }} to="skills" spy={true} smooth={true} offset={-70} duration={500}>Skills</Link>
            <Link style={{marginBottom:"20px", cursor:"pointer" }} to="contact" spy={true} smooth={true} offset={-40} duration={500}>Contact Me</Link>
          </Flex>
          <a href={Swarup_Kadoli_Resume} download="Swarup_Kadoli_Resume.pdf" onClick={handleclick} rel="noreferrer">
        <Button
          display='flex'
          variant='outline'
          colorScheme="#64FFDA"
          fontSize={{base:"12px",sm:"15px", md:"17px"}}
          _hover={{
            bg: 'teal.700',
          }}>
          Resume <Text ml="10px" fontWeight="300" ><ImProfile /></Text>
        </Button>
      </a>
    </Stack>
  );
};
