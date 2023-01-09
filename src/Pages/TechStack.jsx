import { Box, Button, Card, Flex, Heading, IconButton, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { SiChakraui, SiCss3, SiCypress, SiFirebase, SiGit, SiGithub, SiHeroku, SiHtml5, SiJavascript, SiMongodb, SiNetlify, SiNextdotjs, SiNodedotjs, SiPostman, SiReact, SiRedux, SiTypescript, SiVercel, SiVisualstudiocode } from 'react-icons/si'
import { FaNpm } from 'react-icons/fa'

const TechStack = () => {
  return (
    <Box p="20px">
      <Heading m="auto" >Tech Stack & Tools</Heading>
      <Flex flexDirection="column" justifyContent="space-around">
          
        <SimpleGrid columns={{base:3, sm:5, md:8, lg:10}} m="auto" mb="20px">
        <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiHtml5/>}/>
        <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiJavascript />}/>
        <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiReact />}/>
        <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiTypescript />}/>
        <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiRedux />}/>
        <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiNodedotjs />}/>
        <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiNextdotjs />}/>
        <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiMongodb />}/>
        <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiCss3 />}/>
        <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiChakraui />}/>
        </SimpleGrid>
        <SimpleGrid columns={{base:3, sm:5, md:8, lg:10}} m="auto" mb="20px">
        <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiGit />}/>
        <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiGithub />}/>
        <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiVisualstudiocode />}/>
        <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<FaNpm />}/>
        <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiNetlify />}/>
        </SimpleGrid>
        <SimpleGrid columns={{base:3, sm:5, md:8, lg:10}} m="auto" mb="20px">
        <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiVercel />}/>
        <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiHeroku />}/>
        <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiCypress />}/>
        <Button variant='outline' _hover={{ bg: 'teal.700', }} p="0px" m={{base:"5px", md:"10px"}} borderColor="" color='#64FFDA' w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} > <img src="https://render.com/favicon.ico"   alt="" /> </Button>
        </SimpleGrid>
        {/* // <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiPostman />}/> */}
        {/* // <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={<SiFirebase />}/> */}
        {/* // <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={< />}/> */}
        {/* // <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={< />}/> */}
        {/* // <IconButton variant='outline' _hover={{ bg: 'teal.700', }} fontSize="150%" borderColor="" color='#64FFDA' m={{base:"5px", md:"10px"}} p="5px" w={{base:"40px", sm:"50px", md:"60px"}} h={{base:"40px", sm:"50px", md:"60px"}} icon={< />}/> */}
          
        </Flex>
    </Box>
  )
}

export default TechStack