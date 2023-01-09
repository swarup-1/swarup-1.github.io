
import { SiGithub, SiGmail, SiLinkedin,  } from "react-icons/si";
import { Box, Button, Card, CardBody, CardFooter, Center, Flex, Heading, IconButton, Input, Text } from '@chakra-ui/react'
import React from 'react'

const Contact = () => {
  return (
    <Box p="20px" className="contact">
      <Heading m="auto" >Get In Touch</Heading>
      <Text m="auto" w={{base:"90%", sm:"70%", md:"50%", lg:"40%" }}>Currently I'm learning Full Stack Web Development from Masai School, My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</Text>
      <Center p="20px">
        <Card align='center' color='#64FFDA' border="1px solid #64FFDA" w={{base:"90%", sm:"70%", md:"50%", lg:"30%" }}>
          <CardBody w="100%">
            <Input variant='flushed' placeholder='Name' />
            <Input variant='flushed' placeholder='Email' />
            <Input variant='flushed' placeholder='Message' />
          </CardBody>
          <CardFooter>
            <Button variant='outline' colorScheme="#64FFDA" _hover={{  bg: 'teal.700'}}> Submit </Button>
          </CardFooter>
        </Card>
      </Center>
        <Flex textAlign="center" justifyContent="space-around" w={{base:"80%", sm:"50", md:"30%" }} m="auto" templateColumns='repeat(auto-fill, minmax(30%, 1fr))'>
          <Card w="30%" >
            <IconButton variant='outline' _hover={{ bg: 'teal.700', }} borderColor="" color='#64FFDA' aria-label='Send email' icon={ <SiGithub />  }/>          
          </Card>
          <Card w="30%" >
            <IconButton variant='outline' _hover={{ bg: 'teal.700', }} borderColor="" color='#64FFDA' aria-label='Send email' icon={<SiLinkedin />}/>
          </Card>
          <Card w="30%" >
            <IconButton variant='outline' _hover={{ bg: 'teal.700', }} borderColor="" color='#64FFDA' aria-label='Send email' icon={<SiGmail />}/>
          </Card>
        </Flex>
    </Box>
  )
}

export default Contact