import { Box, Button, Card, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { SiChakraui, SiCss3, SiCypress, SiFirebase, SiGit, SiGithub, SiHeroku, SiHtml5, SiJavascript, SiJest, SiMongodb, SiNetlify, SiNextdotjs, SiNodedotjs, SiPostman, SiReact, SiRedux, SiTypescript, SiVercel, SiVisualstudiocode } from 'react-icons/si'
import { FaNpm } from 'react-icons/fa'

const TechStack = () => {
  
  return (
    <Box p={{base:"5px 0px", md:"50px 0px"}} className="skills">
      <Heading pb={{base:"20px", md:"50px"}} m="auto" >Tech Stack & Tools</Heading>
      <Flex flexDirection="column" justifyContent="space-around" >
          
{/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        {/* <Flex columns={{base:3, sm:5, md:8, lg:10}} m="auto" mb="20px"> */}
        <SimpleGrid columns={{base:3, sm:5, md:8, lg:10}} m="auto" mb="20px">
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}}><SiHtml5/><Text fontSize="10px">HTML</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} ><SiCss3/><Text fontSize="10px">CSS3</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} ><SiJavascript/><Text fontSize="10px">JavaScript</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} ><SiReact/><Text fontSize="10px">React</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} ><SiRedux/><Text fontSize="10px">Redux</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} ><SiNextdotjs/><Text fontSize="10px">Next.js</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} ><SiTypescript/><Text fontSize="10px">TypeScript</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} ><SiNodedotjs/><Text fontSize="10px">Node.js</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} ><SiMongodb/><Text fontSize="10px">MongoDB</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} ><SiChakraui/><Text fontSize="10px">Chakra-UI</Text></Button>
        </SimpleGrid>
{/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        {/* <Flex columns={{base:3, sm:5, md:8, lg:10}} m="auto" mb="20px"> */}
        <SimpleGrid columns={{base:3, sm:5, md:8, lg:10}} m="auto" mb="20px">
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} ><SiGit/><Text fontSize="10px">Git</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} ><SiGithub/><Text fontSize="10px">GitHub</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} ><SiVisualstudiocode/><Text fontSize="10px">VS Code</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} ><FaNpm/><Text fontSize="10px">npm</Text></Button>
<Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} ><SiPostman/><Text fontSize="10px">Postman</Text></Button>
        </SimpleGrid>
{/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        {/* <Flex columns={{base:3, sm:5, md:8, lg:10}} m="auto" mb="20px"> */}
        <SimpleGrid columns={{base:3, sm:5, md:8, lg:10}} m="auto" mb="20px">
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} ><SiNetlify/><Text fontSize="10px">Netlify</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} ><SiVercel/><Text fontSize="10px">Vercel</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} ><SiHeroku/><Text fontSize="10px">Heroku</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} > <img src="https://render.com/favicon.ico" alt="" /><Text fontSize="10px">Render</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} ><SiCypress/><Text fontSize="10px">Cypress</Text></Button>
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} ><SiJest/><Text fontSize="10px">Jest</Text></Button>
        </SimpleGrid>
{/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
        {/* <Tippy theme='light' placement="bottom" content={<span style={{color:"#000F16"}} >HTML</span>} >
        </Tippy> */}
        {/* <Tippy theme='light' placement="bottom" content={<span style={{color:"#000F16"}} >HTML</span>} >
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} ><SiFirebase/><Text fontSize="10px">HTML</Text></Button>
        </Tippy> */}
        {/* <Tippy theme='light' placement="bottom" content={<span style={{color:"#000F16"}} >HTML</span>} >
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} ><Text fontSize="10px">HTML</Text></Button>
        </Tippy>
        <Tippy theme='light' placement="bottom" content={<span style={{color:"#000F16"}} >HTML</span>} >
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} ><Text fontSize="10px">HTML</Text></Button>
        </Tippy>
        <Tippy theme='light' placement="bottom" content={<span style={{color:"#000F16"}} >HTML</span>} >
          <Button display="flex" flexDirection="column" variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} ><Text fontSize="10px">HTML</Text></Button>
        </Tippy> */}
        </Flex>
    </Box>
  )
}

export default TechStack