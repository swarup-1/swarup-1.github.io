import { Box, Button, Card, Flex, Heading, IconButton, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { SiChakraui, SiCss3, SiCypress, SiFirebase, SiGit, SiGithub, SiHeroku, SiHtml5, SiJavascript, SiJest, SiMongodb, SiNetlify, SiNextdotjs, SiNodedotjs, SiPostman, SiReact, SiRedux, SiTypescript, SiVercel, SiVisualstudiocode } from 'react-icons/si'
import { FaNpm } from 'react-icons/fa'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'

const TechStack = () => {
  return (
    <Box p={{base:"5px 0px", md:"50px 0px"}} className="skills">
      <Heading pb={{base:"20px", md:"50px"}} m="auto" >Tech Stack & Tools</Heading>
      <Flex flexDirection="column" justifyContent="space-around" >
          
{/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        {/* <Flex columns={{base:3, sm:5, md:8, lg:10}} m="auto" mb="20px"> */}
        <SimpleGrid columns={{base:3, sm:5, md:8, lg:10}} m="auto" mb="20px">
        <Tippy theme='light' placement="bottom" content={<span style={{color:"#000F16"}} >HTML5</span>} >
          <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiHtml5/>}/>
        </Tippy>
        <Tippy theme='light' placement="bottom" content={<span style={{color:"#000F16"}} >JavaScript</span>} >
          <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiJavascript />}/>
        </Tippy>
        <Tippy theme='light' placement="bottom" content={<span style={{color:"#000F16"}} >React</span>} >
          <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiReact />}/>
        </Tippy>
        <Tippy theme='light' placement="bottom" content={<span style={{color:"#000F16"}} >TypeScript</span>} >
          <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiTypescript />}/>
        </Tippy>
        <Tippy theme='light' placement="bottom" content={<span style={{color:"#000F16"}} >NodeJS</span>} >
          <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiNodedotjs />}/>
        </Tippy>
        <Tippy theme='light' placement="bottom" content={<span style={{color:"#000F16"}} >MongoDB</span>} >
          <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiMongodb />}/>
        </Tippy>
        <Tippy theme='light' placement="bottom" content={<span style={{color:"#000F16"}} >Chakra UI</span>} >
          <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiChakraui />}/>
        </Tippy>
        <Tippy theme='light' placement="bottom" content={<span style={{color:"#000F16"}} >Redux</span>} >
          <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiRedux />}/>
        </Tippy>
        <Tippy theme='light' placement="bottom" content={<span style={{color:"#000F16"}} >NextJS</span>} >
          <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiNextdotjs />}/>
        </Tippy>
        <Tippy theme='light' placement="bottom" content={<span style={{color:"#000F16"}} >CSS3</span>} >
          <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiCss3 />}/>
        </Tippy>
        </SimpleGrid>
{/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        {/* <Flex columns={{base:3, sm:5, md:8, lg:10}} m="auto" mb="20px"> */}
        <SimpleGrid columns={{base:3, sm:5, md:8, lg:10}} m="auto" mb="20px">
        <Tippy theme='light' placement="bottom" content={<span style={{color:"#000F16"}} >Git</span>} >
          <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiGit />}/>
        </Tippy>
        <Tippy theme='light' placement="bottom" content={<span style={{color:"#000F16"}} >GitHub</span>} >
          <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiGithub />}/>
        </Tippy>
        <Tippy theme='light' placement="bottom" content={<span style={{color:"#000F16"}} >VS Code</span>} >
          <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiVisualstudiocode />}/>
        </Tippy>
        <Tippy theme='light' placement="bottom" content={<span style={{color:"#000F16"}} >npm</span>} >
          <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<FaNpm />}/>
        </Tippy>
        <Tippy theme='light' placement="bottom" content={<span style={{color:"#000F16"}} >Netlify</span>} >
          <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiNetlify />}/>
        </Tippy>
        </SimpleGrid>
{/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        {/* <Flex columns={{base:3, sm:5, md:8, lg:10}} m="auto" mb="20px"> */}
        <SimpleGrid columns={{base:3, sm:5, md:8, lg:10}} m="auto" mb="20px">
        <Tippy theme='light' placement="bottom" content={<span style={{color:"#000F16"}} >Vercel</span>} >
          <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiVercel />}/>
        </Tippy>
        <Tippy theme='light' placement="bottom" content={<span style={{color:"#000F16"}} >Heroku</span>} >
          <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiHeroku />}/>
        </Tippy>
        <Tippy theme='light' placement="bottom" content={<span style={{color:"#000F16"}} >Render</span>} >
          <Button variant='outline' _hover={{ bg: 'teal.700', }} p="0px" m={{base:"5px", md:"10px"}} borderColor="" color='#64FFDA' w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} > <img src="https://render.com/favicon.ico"   alt="" /> </Button>
        </Tippy>
        <Tippy theme='light' placement="bottom" content={<span style={{color:"#000F16"}} >Cypress</span>} >
          <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiCypress />}/>
        </Tippy>
        <Tippy theme='light' placement="bottom" content={<span style={{color:"#000F16"}} >jest</span>} >
          <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiJest />}/>
        </Tippy>
        </SimpleGrid>
{/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        {/* <Tippy theme='light' placement="bottom" content={<span style={{color:"#000F16"}} >HTML</span>} >
          <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiPostman />}/>
        </Tippy> */}
        {/* <Tippy theme='light' placement="bottom" content={<span style={{color:"#000F16"}} >HTML</span>} >
          <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiFirebase />}/>
        </Tippy> */}
        {/* <Tippy theme='light' placement="bottom" content={<span style={{color:"#000F16"}} >HTML</span>} >
          <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={}/>
        </Tippy>
        <Tippy theme='light' placement="bottom" content={<span style={{color:"#000F16"}} >HTML</span>} >
          <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={}/>
        </Tippy>
        <Tippy theme='light' placement="bottom" content={<span style={{color:"#000F16"}} >HTML</span>} >
          <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={}/>
        </Tippy> */}
        </Flex>
    </Box>
  )
}

export default TechStack