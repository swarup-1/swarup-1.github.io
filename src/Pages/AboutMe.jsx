import myPhoto2 from "../assets/Myphoto2.jpeg"
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const AboutMe = () => {
  return (
    <Box className="about" marginBottom={{base:"5px", md:"50px"}}>
      <br />
      <br />
      <Flex flexDirection={{base:"column", md:"row"}} p={{base:"20px 50px", md:"10px 10px"}} justifyContent="space-evenly">
        <Box align="start" width={{base:"100%", md:"30%"}}  >
        <Heading pb={{base:"16px", md:"20px"}} >About Me</Heading>
        <br />
        <Text color="#64ffdb9a" fontSize={{base:"12px",sm:"16px", md:"20px"}}> Hello! I'm Swarup Kadoli,
            <br />
            Experienced Full Stack Web Developer specializing in the MERN stack, adept in React, Redux, and TypeScript. Skilled in
crafting AI-powered personalization dashboards for Shopify stores. Proficient in HTML and CSS, with a strong problemsolving mindset and a collaborative approach. Quick to adapt to new technologies, making me a valuable asset in
dynamic web development environments.
            <br /> 
            </Text>
        </Box>
        <Box align="start" width={{base:"100%", md:"30%"}}  >
        <Image src={myPhoto2} alt="Profile Image" m="auto" marginTop="20px" w={{base:"50%", sm:"60", md:"80%"}} />
        </Box>
      </Flex>

    </Box>
  )
}

export default AboutMe