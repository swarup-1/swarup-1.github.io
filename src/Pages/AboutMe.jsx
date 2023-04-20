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
        <Heading pb={{base:"20px", md:"50px"}} >About Me</Heading>
        <br />
        <Text color="#64ffdb9a" fontSize={{base:"13px",sm:"18px", md:"23px"}}> Hello! I'm Swarup Kadoli,
            <br />
            A quick learner and a Full-stack web developer with core knowledge of MERN stack technologies. Looking forward to applying and enhancing my skills and knowledge as a developer.
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