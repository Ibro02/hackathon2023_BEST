import React from 'react'
import { Box, Flex, Text ,Image} from "@chakra-ui/react"
import {logo} from '../../styles/Sponsors.module.css'
function Jobfair() {

    const styleRed = {
        color: '#E63448',
        fontWeight: '700',
        textTransform: "uppercase",
        textShadow: "1px 1px 0 black"
    
    }
    

  return (
    
    <Box id='sponsors'>

    <Box  px={{base: "10", md:10, lg:10}}  py={40} textAlign={"justify"}>
    <Text  align={"center"} fontSize={{base: "5xl", md:"6xl"}} textTransform={"uppercase"} fontWeight={800}>Sponzori</Text>
<Box bgColor={"#E63448"} width={{base:"60%", md:"m"}} mx={"auto"} my={"5"} h={"3px"} align={"center"} borderRadius={"10"}></Box>

<Flex flexDir={"column"} justifyContent={"space-between"} width={"100%"} >
<Flex flexDir={"column"} alignItems={"center"} pb={"40"}>
<Text align={"center"} fontSize={{base: "5xl", md:"6xl"}} textTransform={"uppercase"} fontWeight={600}>Platinum sponzor</Text>
<Flex>
<Image  boxSize={"xl"}  h={"auto"} src={"/Sponsors/MSS.png"} mt={{ base: "50", md: "5px"}}></Image>
</Flex>
</Flex>

<Flex flexDir={"column"} alignItems={"center"} pb={"40"} >
<Text align={"center"} fontSize={{base: "5xl", md:"6xl"}} pb={"20"} textTransform={"uppercase"} fontWeight={600}>Zlatni sponzor</Text>
<Flex>
<Image boxSize={"xl"} h={"auto"} src={"/Sponsors/mistral.png"} ></Image>
</Flex>
</Flex>

<Flex flexDir={"column"} alignItems={"center"} >
<Text align={"center"} fontSize={{base: "5xl", md:"6xl"}} textTransform={"uppercase"} fontWeight={600} pb={"20"}>Partneri</Text>
<Flex alignItems={{base: "space-around", md:"space-between"}}  justifyContent={{base:"space-around",md:"space-evenly"}} flexWrap={"wrap"}>
<Image boxSizing={"80"} width={"auto"}  className={logo} h={"70"} src={"/Sponsors/intera.png"} mt={{ base: "50", md: "5px"}}></Image>
<Image boxSizing={"80"} width={"auto"}  className={logo} h={"70"} src={"/Sponsors/qsd.png"} mt={{ base: "50", md: "5px"}}></Image>
<Image boxSizing={"80"} width={"auto"}  className={logo} h={"70"} src={"/Sponsors/waltercode.png"} mt={{ base: "50", md: "5px"}}></Image>
<Image boxSizing={"80"} width={"auto"}  className={logo} h={"70"} src={"/Sponsors/telemach.png"} mt={{ base: "50", md: "5px"}}></Image>
<Image boxSizing={"80"} width={"auto"}  className={logo} h={"70"} src={"/Sponsors/bff.png"} mt={{ base: "50", md: "5px"}}></Image>
<Image boxSizing={"80"} width={"auto"}  className={logo} h={"70"} src={"/Sponsors/dm.png"} mt={{ base: "50", md: "5px"}}></Image>

</Flex>
</Flex>

</Flex>
            </Box>
    </Box>
  )
}

export default Jobfair