import GitHubCalendar from 'react-github-calendar';
import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react';
const GitHub = () => {
  return (
    <Box p={{base:"5px 0px", md:"50px 0px"}}>
        <Heading pb={{base:"20px", md:"50px"}}>Github</Heading>
        <p align="center">
          <Box padding={{base:"0px", md:"30px"}} border={{base:"none", md:"1px solid #64FFDA"}} width={{base:"90%", md:"70%"}} marginBottom="15px" >
          <GitHubCalendar username="swarup-1" theme={{level0 : "#b4ffb7",level1 : "#39ff43c7",level2 : "#68e700c7",level3 : "#007e06",level4 : "#004e04c7"}} />
          </Box>
          <Box padding={{base:"0px", md:"30px"}} border="1px solid #64FFDA" width="70%" marginBottom="15px" >
            <Text style={{base:"10px", md:"20px"}} >swarup-1's streak</Text>
            <img alt="swarup-1's streak" src="https://github-readme-streak-stats.herokuapp.com/?user=swarup-1&theme=black-ice&hide_border=true&stroke=0000&background=000F16"/>
          </Box>
          <Box padding={{base:"0px", md:"30px"}} border="1px solid #64FFDA" width="70%" marginBottom="15px" >
            <Text style={{base:"10px", md:"20px"}} >swarup-1's Github Stats</Text>
            <img alt="swarup-1's Github Stats" src="https://github-readme-stats.vercel.app/api?username=swarup-1&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=000F16" />
          </Box>
          <Box padding={{base:"0px", md:"30px"}} border="1px solid #64FFDA" width="70%" marginBottom="15px" >
            <Text style={{base:"10px", md:"20px"}} >swarup-1's Top Languages</Text>
            <img alt="swarup-1's Top Languages" src="https://github-readme-stats.vercel.app/api/top-langs/?username=swarup-1&langs_count=8&count_private=true&layout=compact&theme=react&hide_border=true&bg_color=000F16" />
          </Box>
        </p>

    </Box>
  )
}

export default GitHub