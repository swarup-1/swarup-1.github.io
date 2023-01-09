import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useDisclosure,
} from '@chakra-ui/react';
import { Link } from 'react-scroll';
import Swarup_Kadoli_Resume from "../assets/Swarup_Kadoli_Resume.pdf"
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';
export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
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
          <Text
            fontFamily={'heading'}>
            My Logo 
          </Text>

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
            {/* <a href="https://drive.google.com/file/d/1c9e3JeMGi_Lm-e_JjNd3ChNQyBGg7JZE/view?usp=share_link" target="_blank"></a> */}
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            variant='outline'
            colorScheme="#64FFDA"
            _hover={{
              bg: 'teal.700',
            }}>
            Resume
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
      <Link style={{width:"130px"}} to="about" spy={true} smooth={true} offset={50} duration={500}>About Me</Link>
      <Link style={{width:"130px"}} to="projects" spy={true} smooth={true} offset={50} duration={500}>Projects</Link>
      <Link style={{width:"130px"}} to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact Me</Link>
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      p={4}
      border="1px solid red"
      w="30%"
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
          <Stack key={navItem}>
            <Flex
              py={2}
              justify={'space-between'}
              align={'center'}>
              <Text
                fontWeight={700}>
                {navItem}
              </Text>
            </Flex>
          </Stack>
      ))}
      <a href={Swarup_Kadoli_Resume} download="Swarup_Kadoli_Resume.pdf">
        <Button
          display='flex'
          variant='outline'
          colorScheme="#64FFDA"
          _hover={{
            bg: 'teal.700',
          }}>
          Resume
        </Button>
      </a>
    </Stack>
  );
};

const NAV_ITEMS = [ "Home","About Me","Projects","Contact Me",];