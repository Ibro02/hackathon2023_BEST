import React from 'react'
import { Box, Button, Center, Flex,Stack, Text ,Image, Container} from "@chakra-ui/react"
import Avatar from './shared/Avatar' 
import Awards from './shared/Awards'
import Carousel from './shared/Carousel'
function LastExpirience() {
  return (
    <Box id={"lastexp"} height={"100%"} py={20} m={{base:"1", md:"1", lg:"1"}}  >
      <Text align={"center"} fontSize={{base: "5xl", md:"6xl"}} textTransform={"uppercase"} fontWeight={700} textShadow={"5px 5px 0 black"}>Prijašnja iskustva</Text>
<Box bgColor={"#E63448"} width={{base:"80%", md:"lg"}} mx={{base:"0",md:"auto"}} my={"5"} h={"3px"} align={"center"} borderRadius={"100%"}></Box>

        <Flex bgColor={"#040406"} border={"1px solid #292929"} boxShadow={" 1px 1px 2px black"} mx={{base: "0", md:"28%"}} py={"0.5"}  borderRadius={"10"} flexDir={"row"} alignItems={"center"} justifyContent="space-between"  margin={"auto"}>
        <Carousel />
        </Flex>
    </Box>
  )
}

export default LastExpirience