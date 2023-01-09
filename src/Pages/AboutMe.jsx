import myPhoto2 from "../assets/Myphoto2.jpeg"
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

const AboutMe = () => {
  return (
    <div className="about">
      <br />
      <br />
      <Flex flexDirection={{base:"column", md:"row"}} p={{base:"20px 50px", md:"10px 10px"}} justifyContent="space-evenly">
        <Box align="start" width={{base:"100%", md:"30%"}}  >
        <Heading>About Me</Heading>
        <Text> Hello! I'm Swarup Kadoli,
            <br />
            A quick learner and an aspiring full-stack web developer with core knowledge of MERN stack technology. Looking forward to applying and enhancing my skills and knowledge as a developer.
            <br /> 
            </Text>
            <Text>Here are a few technologies I've been working with recently</Text>
            <Flex justifyContent={{base:"space-evenly", md:"space-between"}} p={{base:"5px", md:"20px"}} >

            <ul style={{listStyleType:"square"}}>
              <li>HTML</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Redux</li>
              <li>Express</li>
              <li>Nextjs</li>
              {/* <li>Mongoose</li> */}
            </ul>





            <ul style={{listStyleType:"square"}}>
              <li>CSS</li>
              <li>Chakra-UI</li>
              {/* <li>Styled Components</li> */}
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>TypeScript</li>
              {/* <li>Firebase</li>
              <li>Storybook</li> */}
            </ul>
            </Flex>
        </Box>
        <Box align="start" width={{base:"100%", md:"30%"}}  >
        <Image src={myPhoto2} alt="" m="auto" w={{base:"50%", sm:"60", md:"80%"}} />
        </Box>
      </Flex>

    </div>
  )
}

export default AboutMe