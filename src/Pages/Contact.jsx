import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'
import { SiGithub, SiGmail, SiLinkedin,  } from "react-icons/si";
import { Box, Button, Card, CardBody, CardFooter, Center, Flex, Heading, IconButton, Input, Text } from '@chakra-ui/react'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [message, setMessage]=useState("")

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_say_hi', 'template_opp6soe', form.current, 'yKGJPe-W_WPJL9kOj')
      .then((result) => {
          console.log(result.text);
          setName("")
          setEmail("")
          setMessage("")

      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <Box p={{base:"5px 0px", md:"50px 0px"}} paddingBottom="20%" className="contact">
      <Heading m="auto"  pb={{base:"20px", md:"50px"}} >Get In Touch</Heading>
      <Text m="auto" w={{base:"90%", sm:"70%", md:"50%", lg:"40%" }} color="#64ffdb9a" >Currently I'm learning Full Stack Web Development from Masai School, My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</Text>
      <Center p="30px" mt="50px">
        <Card align='center' border="1px solid #64FFDA" w={{base:"90%", sm:"70%", md:"50%", lg:"30%" }}>
          <form ref={form} onSubmit={sendEmail} style={{width:"100%", padding:"15px"}}>
            <input type="text" value="To : swarupkadoli9@gmail.com" style={{backgroundColor:"#000F16", marginBottom:"10px", color:'#fff', borderBottom:"1px solid #64FFDA", width:"100%"}}/>
            <input type="text" name="user_name" onChange={(e)=>setName(e.target.value)} value={name} style={{backgroundColor:"#000F16", marginBottom:"10px", color:'#fff', borderBottom:"1px solid #64FFDA", width:"100%"}} placeholder='Your Name' />
            <input type="email" name="user_email" onChange={(e)=>setEmail(e.target.value)} value={email} style={{backgroundColor:"#000F16", marginBottom:"10px", color:'#fff', borderBottom:"1px solid #64FFDA", width:"100%"}} placeholder='Your Email' />
            <textarea name="message" onChange={(e)=>setMessage(e.target.value)} value={message} style={{backgroundColor:"#000F16", marginBottom:"10px", borderBottom:"1px solid #64FFDA", width:"100%"}} placeholder='Message' rows="6" cols="45" autoComplete="off" />
            <Button type="submit" value="Send" variant='outline' colorScheme="#64FFDA" _hover={{  bg: 'teal.700'}}> Submit </Button>
          </form>
          <CardFooter>
          </CardFooter>
        </Card>
      </Center>
        <Flex textAlign="center" justifyContent="space-around" w={{base:"80%", sm:"50", md:"30%" }} m="auto" templateColumns='repeat(auto-fill, minmax(30%, 1fr))'>
          <a href="https://github.com/swarup-1" target="_blank" style={{width:"30%"}} >
            <IconButton variant='outline' w="100%" _hover={{ bg: 'teal.700', }} borderColor="" color='#64FFDA' aria-label='Send email' icon={ <SiGithub />  }/>          
          </a>
          <a href="https://www.linkedin.com/in/swarup-kadoli-902512221/" target="_blank" style={{width:"30%"}} >
            <IconButton variant='outline' w="100%" _hover={{ bg: 'teal.700', }} borderColor="" color='#64FFDA' aria-label='Send email' icon={<SiLinkedin />}/>
          </a>
          <Tippy theme='light' placement="bottom" content={<span style={{color:"#000F16"}} >swarupkadoli9@gmail.com</span>} >
          <a href="mailto:swarupkadoli9@gmail.com?body=Hello%2C%0D%0A%0D%0A" target="_blank" style={{width:"30%"}} >
            <IconButton variant='outline' w="100%" _hover={{ bg: 'teal.700', }} borderColor="" color='#64FFDA' aria-label='Send email' icon={<SiGmail />}/>
          </a>
          </Tippy>
        </Flex>
    </Box>
  )
}

export default Contact