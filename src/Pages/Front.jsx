import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Swarup_Kadoli_Resume from "../assets/Swarup_Kadoli_Resume.pdf"
import React from 'react'

const Front = () => {
  const handleclick=()=>{
      window.open('https://drive.google.com/file/d/1c9e3JeMGi_Lm-e_JjNd3ChNQyBGg7JZE/view?usp=share_link','_blank')
  }
  return (
    <Box margin="50px 0px 70px 0px" className='home' >
      <Flex justifyContent="space-around" p={{base:"5px 50px", md:"5px 100px", lg:"10px 60px"}}>
        <Box align="start">
      <Text fontSize={{base:"15px",sm:"20px"}}>Hi, my name is</Text>
      <Heading fontSize={{base:"35px",sm:"50px", md:"70px"}}>Swarup Kadoli</Heading>
      <br />
      <Heading fontSize={{base:"30px",sm:"40px", md:"50px"}} fontWeight="700"  color="#64ffdb9a">I love building<br /> and learning new things.</Heading>
      <br /><br />
      <Text fontSize={{base:"15px",sm:"20px"}} >Currently I am available at Masai School as a Full Web Stack developer trainee & having Hands-on knowledge in MERN Stack</Text>
      <br />
      
            <a href={Swarup_Kadoli_Resume} download="Swarup_Kadoli_Resume.pdf" onClick={handleclick} rel="noreferrer">
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            variant='outline'
            colorScheme="#64FFDA"
            p="30px"
            _hover={{
              bg: 'teal.700',
            }}>
            Take a look on my Resume 
          </Button>
            </a>
        {/* If page is small then show this download Button */}
        <a href={Swarup_Kadoli_Resume} onClick={handleclick} download="Swarup_Kadoli_Resume.pdf" rel="noreferrer">
        <Button
            display={{ base: 'flex', md: 'none' }}
            variant='outline'
            colorScheme="#64FFDA"
            p={{base:"10px", md:"30px"}}
            fontSize={{base:"12px",sm:"15px", md:"25px"}}
            _hover={{
              bg: 'teal.700',
            }}>
          Resume
        </Button>
      </a>
        </Box>
        <div width="40%"></div>
      </Flex>

    </Box>
  )
}

export default Front