import { Box, Button, Flex } from '@chakra-ui/react';
import React from 'react'

const Front = () => {
  return (
    <div >
      <Flex justifyContent="space-around" p={{base:"5px 50px", md:"5px 100px", lg:"10px 60px"}}>
        <Box align="start">
      <p>Hi, my name is</p>
      <heading>Swarup Kadoli</heading>
      <heading>I love building and learning new things.</heading>
      <p>I’m currently learning full-stack web development with a specialization in MERN stack from Masai School.</p>

        {/* <a href={Swarup_Kadoli_Resume} download="Swarup_Kadoli_Resume.pdf"> */}
            <a href="https://drive.google.com/file/d/1c9e3JeMGi_Lm-e_JjNd3ChNQyBGg7JZE/view?usp=share_link" rel="noreferrer" target="_blank">
          <Button
            display={{ base: 'none', md: 'inline-flex' }}
            variant='outline'
            colorScheme="#64FFDA"
            _hover={{
              bg: 'teal.700',
            }}>
            Take a Look on my Resume
          </Button>
            </a>
            {/* </a> */}
        </Box>
        <div width="40%"></div>
      </Flex>

    </div>
  )
}

export default Front