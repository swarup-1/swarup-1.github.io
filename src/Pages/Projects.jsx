import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { SiGithub } from 'react-icons/si'
import kindmeal from "../assets/kindmeal.png"
import acras from "../assets/acras.png"
import cricbuzz from "../assets/cricbuzz.png"
import trademart from "../assets/trademart.png"

const Projects = () => {
  return (
    <Box className='projects' p={{base:"5px 0px", md:"50px 0px"}} >
      
      <Heading pb={{base:"20px", md:"50px"}} >Projects</Heading>
      <Box width={{base:"100%",sm:"90%",lg:"70%"}} m="auto" >

  
        <Box position= "relative" width= {{base:"100%",md:"70%"}} height= {{base:"250px",md:"300px"}} mb={{base:"300px", md:"10%"}}  >
          <Image src={kindmeal} objectFit="cover" w="100%" height={{base:"80%", sm:"100%"}} borderRadius="10px" boxShadow="black 0px 5px 15px"/>

          <Box 
            position="absolute" 
            top={{base:"100%",md:"10%"}} 
            left={{base:"0%",md:"50%",lg:"70%"}} 
            width= {{base:"100%",md:"90%",lg:"70%"}} 
            height="100%"
            textAlign="end"
            p={{base:"0% 5%", md:"0px"}}
            backgroundColor="#00000000">

            <p style={{fontSize:"12px"}}>Individual Project</p>
            <Text fontSize="25px" color="#c9fff3">My Meal</Text>
            <Box 
              m={{base:"10px 0px", sm:"5px 0px 0px 0px"}}
              p="10px 20px" 
              color="#64ffdb9a"
              borderRadius="5px" 
              boxShadow = "black 0px 20px 30px -10px"
              backgroundColor="#001c29" 
              >
              <Text fontSize={{base:"13px",sm:"15px", md:"17px"}}>KindMeal.my is Malaysia's leading meat-free lifestyle platform, where you can go for vegetarian and vegan meals. <br />This project is developed in 5 days.</Text>
              <br />
            <Text color="#c9fff3" fontSize={{base:"13px",sm:"15px"}} ml="20%" >React | Chakra UI | HTML | CSS | JavaScript (ES6+) | json-server | Render | LocalStorage</Text>
            <br />
            <Flex justifyContent="end" gap="10px" >
              <a target="_blank" href="https://github.com/swarup-1/KindMeal-Clone"><SiGithub color="#c9fff3" fontSize="20px" /></a>
              <a target="_blank" href="https://quack-building-4956.vercel.app/"><FaExternalLinkAlt color="#c9fff3" fontSize="20px" /></a>
            </Flex>
            </Box>
    
          </Box>
        </Box>
        <Box position= "relative" width= {{base:"100%",md:"70%"}} height= {{base:"250px",md:"300px"}} mb={{base:"330px", md:"10%"}}  >
          <Image src={trademart} objectFit="cover" w="100%" height={{base:"80%", sm:"100%"}} borderRadius="10px" boxShadow="black 0px 5px 15px"/>

          <Box 
            position="absolute" 
            top={{base:"100%",md:"5%"}} 
            left={{base:"0%",md:"50%",lg:"70%"}} 
            width= {{base:"100%",md:"90%",lg:"70%"}} 
            height="100%"
            textAlign="end" 
            p={{base:"0% 5%", md:"0px"}}
            backgroundColor="#00000000">

            <p style={{fontSize:"12px"}}>Group Project</p>
            <Text fontSize="25px" color="#c9fff3">Indiamart clone</Text>
            <Box 
              m={{base:"10px 0px", sm:"5px 0px 30px 0px"}}
              p="10px 20px" 
              color="#64ffdb9a"
              borderRadius="5px" 
              boxShadow = "black 0px 20px 30px -10px"
              backgroundColor="#001c29" 
              >
              <Text fontSize={{base:"13px",sm:"16px"}}>IndiaMART is an Indian e-commerce company that provides B2B and customer to customer sales services. <br />Collaborative project developed along with four team members in 5 days.</Text>
              <br />
            <Text color="#c9fff3" fontSize={{base:"13px",sm:"15px"}} ml="20%" >Redux | React | Chakra UI | HTML | CSS | JavaScript (ES6+) | Firebase | json-server | Render | LocalStorage</Text>
            <br />
            <Flex justifyContent="end" gap="10px" >
              <a target="_blank" href="https://github.com/jithstephen13/tested-request-4840"><SiGithub color="#c9fff3" fontSize="20px" /></a>
              <a target="_blank" href="https://trademart.netlify.app/"><FaExternalLinkAlt color="#c9fff3" fontSize="20px" /></a>
            </Flex>
            </Box>
    
          </Box>
        </Box>
        <Box position= "relative" width= {{base:"100%",md:"70%"}} height= {{base:"250px",md:"300px"}} mb={{base:"300px", md:"10%"}}  >
          <Image src={acras} objectFit="cover" w="100%" height={{base:"80%", sm:"100%"}} borderRadius="10px" boxShadow="black 0px 5px 15px" />

          <Box 
            position="absolute" 
            top={{base:"100%",md:"10%"}} 
            left={{base:"0%", md:"50%",lg:"70%"}} 
            width= {{base:"100%",md:"90%",lg:"70%"}} 
            height="100%"
            textAlign="end" 
            p={{base:"0% 5%", md:"0px"}}
            backgroundColor="#00000000">

            <p style={{fontSize:"12px"}}>Group Project</p>
            <Text fontSize="25px" color="#c9fff3">JCREW clone</Text>
            <Box 
              m={{base:"10px 0px", sm:"5px 0px 0px 0px"}}
              p="10px 20px" 
              color="#64ffdb9a"
              borderRadius="5px" 
              boxShadow = "black 0px 20px 30px -10px"
              backgroundColor="#001c29" 
              >
              <Text fontSize={{base:"13px",sm:"16px"}}>An international clothing brand. This offers an assortment of women's, men's, and children's apparel and accessories. <br />Collaborative project developed along with four team members in 5 days.</Text>
              <br />
            <Text color="#c9fff3" fontSize={{base:"13px",sm:"15px"}} >HTML | CSS | JavaScript (ES6+) | LocalStorage</Text>
            <br />
            <Flex justifyContent="end" gap="10px" >
              <a target="_blank" href="https://github.com/Dante2109/JCrew_clone"><SiGithub color="#c9fff3" fontSize="20px" /></a>
              <a target="_blank" href="https://acras.netlify.app/"><FaExternalLinkAlt color="#c9fff3" fontSize="20px" /></a>
            </Flex>
            </Box>
    
          </Box>
        </Box>
        <Box position= "relative" width= {{base:"100%",md:"70%"}} height= {{base:"250px",md:"300px"}} mb={{base:"300px", md:"10%"}}  >
          <Image src={cricbuzz} objectFit="cover" w="100%" height={{base:"80%", sm:"100%"}} borderRadius="10px" boxShadow="black 0px 5px 15px" />

          <Box 
            position="absolute" 
            top={{base:"100%",md:"10%"}} 
            left={{base:"0%",md:"50%",lg:"70%"}} 
            width= {{base:"100%",md:"90%",lg:"70%"}} 
            height="100%"
            textAlign="end" 
            p={{base:"0% 5%", md:"0px"}}
            backgroundColor="#00000000">

            <p style={{fontSize:"12px"}}>Group Project</p>
            <Text fontSize="25px" color="#c9fff3">CricBuzz</Text>
            <Box 
              m={{base:"10px 0px", sm:"5px 0px 0px 0px"}}
              p="10px 20px" 
              color="#64ffdb9a"
              borderRadius="5px" 
              boxShadow = "black 0px 20px 30px -10px"
              backgroundColor="#001c29" 
              >
              <Text fontSize={{base:"13px",sm:"16px"}}>Cricbuzz is an Indian cricket news website. It features, news, articles and live coverage of cricket matches including videos, text commentary. <br />This project is developed in 5 days.</Text>
              <br />
            <Text color="#c9fff3" fontSize={{base:"13px",sm:"15px"}} >HTML | CSS | JavaScript (ES6+) | LocalStorage | Embedded-videos</Text>
            <br />
            <Flex justifyContent="end" gap="10px" >
              <a target="_blank" href="https://github.com/swarup-1/CricBuzz-Clone"><SiGithub color="#c9fff3" fontSize="20px" /></a>
              <a target="_blank" href="https://web101project.netlify.app/"><FaExternalLinkAlt color="#c9fff3" fontSize="20px" /></a>
            </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
  </Box>
  )
}

export default Projects