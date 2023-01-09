import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { SiGithub } from 'react-icons/si'
import kindmeal from "../assets/kindmeal.png"
import acras from "../assets/acras.png"
import cricbuzz from "../assets/cricbuzz.png"

const Projects = () => {
  return (
    <div className='projects'>
      <br />
      <Heading >Projects</Heading>
      <Box width={{base:"100%",sm:"90%",lg:"70%"}} m="auto" >


        <Box position= "relative" width= {{base:"100%",md:"70%"}} height= {{base:"250px",md:"300px"}} m="10% 0%">
          <Image src={kindmeal} objectFit="cover" height="100%" borderRadius="10px" boxShadow="black 0px 5px 15px"/>

          <Box 
            position="absolute" 
            top={{base:"0%",md:"10%"}} 
            left={{base:"0%",md:"50%",lg:"70%"}} 
            width= {{base:"100%",md:"90%",lg:"70%"}} 
            height="100%"
            textAlign="end" 
            backgroundColor={{base:"#000000c5",md:"#00000000"}}>

            <p style={{fontSize:"12px"}}>Individual Project</p>
            <Text fontSize="25px">My Meal</Text>
            <Box 
              m="10px 0px 20px 0px"
              p="10px 20px" 
              borderRadius="5px" 
              boxShadow = "black 0px 20px 30px -10px"
              backgroundColor={{base:"#000000b8",md:"#001c29"}} 
              >
              <Text fontSize="16px">KindMeal.my is Malaysia's leading meat-free lifestyle platform, where you can go for vegetarian and vegan meals. This project is developed in 5 days.</Text>
            </Box>
            <Text ml="20%" >React | Chakra UI <br />| HTML | CSS | JavaScript (ES6+) <br />| json-server | Render | LocalStorage</Text>
            <Flex justifyContent="end" gap="10px" >
              <SiGithub />
              <FaExternalLinkAlt />
            </Flex>
          </Box>
        </Box>
        <Box position= "relative" width= {{base:"100%",md:"70%"}} height= {{base:"250px",md:"300px"}} m="10% 0%">
          <Image src={acras} objectFit="cover" height="100%" borderRadius="10px" boxShadow="black 0px 5px 15px" />

          <Box 
            position="absolute" 
            top={{base:"0%",md:"10%"}} 
            left={{base:"0%",md:"50%",lg:"70%"}} 
            width= {{base:"100%",md:"90%",lg:"70%"}} 
            height="100%"
            textAlign="end" 
            backgroundColor={{base:"#000000c5",md:"#00000000"}}>

            <p style={{fontSize:"12px"}}>Group Project</p>
            <Text fontSize="25px">ACRAS</Text>
            <Box 
              m="10px 0px 20px 0px"
              p="10px 20px" 
              borderRadius="5px" 
              boxShadow = "black 0px 20px 30px -10px"
              backgroundColor={{base:"#000000b8",md:"#001c29"}} 
              >
              <Text fontSize="16px">An international clothing brand. This offers an assortment of women's, men's, and children's apparel and accessories. Collaborative project developed along with four team members in 5 days.</Text>
            </Box>
            <Text >HTML | CSS | JavaScript (ES6) <br />| LocalStorage</Text>
            <Flex justifyContent="end" gap="10px" >
              <SiGithub />
              <FaExternalLinkAlt />
            </Flex>
          </Box>
        </Box>
        <Box position= "relative" width= {{base:"100%",md:"70%"}} height= {{base:"250px",md:"300px"}} m="10% 0%">
          <Image src={cricbuzz} objectFit="cover" height="100%" borderRadius="10px" boxShadow="black 0px 5px 15px" />

          <Box 
            position="absolute" 
            top={{base:"0%",md:"10%"}} 
            left={{base:"0%",md:"50%",lg:"70%"}} 
            width= {{base:"100%",md:"90%",lg:"70%"}} 
            height="100%"
            textAlign="end" 
            backgroundColor={{base:"#000000c5",md:"#00000000"}}>

            <p style={{fontSize:"12px"}}>Group Project</p>
            <Text fontSize="25px">CricBuzz</Text>
            <Box 
              m="10px 0px 20px 0px"
              p="10px 20px" 
              borderRadius="5px" 
              boxShadow = "black 0px 20px 30px -10px"
              backgroundColor={{base:"#000000b8",md:"#001c29"}} 
              >
              <Text fontSize="16px">Cricbuzz is an Indian cricket news website. It features, news, articles and live coverage of cricket matches including videos, text commentary. This project is developed in 5 days.</Text>
            </Box>
            <Text >HTML | CSS | JavaScript (ES6+) <br />| LocalStorage</Text>
            <Flex justifyContent="end" gap="10px" >
              <SiGithub />
              <FaExternalLinkAlt />
            </Flex>
          </Box>
        </Box>
      </Box>
  </div>
  )
}

export default Projects