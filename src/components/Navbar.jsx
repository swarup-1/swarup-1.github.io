import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Link,
  useDisclosure,
} from '@chakra-ui/react';
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
        minH={'60px'}
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
            Logo
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
              <Link  p={2}>Home</Link>
              <Link w="120px" p={2}>About Me</Link>
              <Link w="120px" p={2}>Projects</Link>
              <Link w="120px" p={2}>Contact Me</Link>
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