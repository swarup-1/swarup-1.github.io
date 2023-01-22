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
import { Link } from 'react-scroll';
import portfolio_logo from "../assets/portfolio_logo.png";
import Swarup_Kadoli_Resume from "../assets/Swarup_Kadoli_Resume.pdf"
import { ImFolderDownload } from "react-icons/im";
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
  return (
    <Box position="sticky" top="0" zIndex="2" >
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
          <Image 
            boxSize='50px'
            objectFit='cover'
            src={portfolio_logo} />

        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
          <Flex display={{ base: 'none', md: 'flex' }}>
            <DesktopNav />
          </Flex>
          <a href={Swarup_Kadoli_Resume} download="Swarup_Kadoli_Resume.pdf">
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            variant='outline'
            colorScheme="#64FFDA"
            _hover={{
              bg: 'teal.700',
            }}>
            Resume <Text ml="10px" ><ImFolderDownload /></Text>
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
    <Stack direction={'row'} spacing={2}>
      <Link style={{width:"120px"}} to="home" spy={true} smooth={true} offset={-120} duration={500}>Home</Link>
      <Link style={{width:"120px"}} to="about" spy={true} smooth={true} offset={-40} duration={500}>About Me</Link>
      <Link style={{width:"120px"}} to="projects" spy={true} smooth={true} offset={-40} duration={500}>Projects</Link>
      <Link style={{width:"120px"}} to="skills" spy={true} smooth={true} offset={-40} duration={500}>Skills</Link>
      <Link style={{width:"120px"}} to="contact" spy={true} smooth={true} offset={-40} duration={500}>Contact Me</Link>
    </Stack>
  );
};

const MobileNav = () => {
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
            <Link style={{margin:"10px 0px"}} to="home" spy={true} smooth={true} offset={-70} duration={500}>Home</Link>
            <Link style={{margin:"10px 0px"}} to="about" spy={true} smooth={true} offset={-20} duration={500}>About Me</Link>
            <Link style={{margin:"10px 0px"}} to="projects" spy={true} smooth={true} offset={-70} duration={500}>Projects</Link>
            <Link style={{margin:"10px 0px"}} to="skills" spy={true} smooth={true} offset={-70} duration={500}>Skills</Link>
            <Link style={{marginBottom:"20px"}} to="contact" spy={true} smooth={true} offset={-40} duration={500}>Contact Me</Link>
          </Flex>
      <a href={Swarup_Kadoli_Resume} download="Swarup_Kadoli_Resume.pdf">
        <Button
          display='flex'
          variant='outline'
          colorScheme="#64FFDA"
          fontSize={{base:"12px",sm:"15px", md:"17px"}}
          _hover={{
            bg: 'teal.700',
          }}>
          Resume
        </Button>
      </a>
    </Stack>
  );
};
