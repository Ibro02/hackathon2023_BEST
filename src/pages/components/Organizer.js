import { Box, Button, Center, Flex,Stack, Text ,Image, Container} from "@chakra-ui/react"
import React from 'react'
import LastExpirience from "./LastExpirience"

function Organizer() {
  return (
<>

<Box align={"center"} id={"organizer"} fontSize={{base: "5xl", md:"6xl"}} py={20}  color={"white"} bgAttachment={"fixed"} minH={"100vh"} bgSize={'cover'} width={"100%"} >
    
    <Box py={20} fontWeight={700}>
<Text align={"center"} fontSize={{base: "5xl", md:"6xl"}} textTransform={"uppercase"} fontWeight={700} textShadow={"5px 5px 0 black"}>Organizatori</Text>
<Box bgColor={"#E63448"} width={{base:"80%", md:"lg"}} mx={"auto"} my={"5"} h={"3px"} align={"center"} borderRadius={"100%"}></Box>

<Image src="/BEST_signature_mostar_white.png" boxSize={40} boxSizing={"border-box"} width={"auto"}></Image>
    </Box>

<Flex fontSize={{base: "xl", md:"2xl"}} flexDir={{base: "column", md:"column", lg:"row"}} fontWeight={200} justifyContent={{base:"space-between", lg:"space-between"}} alignItems={{base: "space-between", md: "normal"}} backgroundColor={"#292929"} color={"whiteAlpha.900"} mx={{base: "1.5", md:"10"}}   borderRadius={"10"} boxShadow={" 1px 1px 2px black"}>

<Text   width={{base: "90%",md:"70%"}} justifyContent={"center"} my={{base:"10",lg:"auto"}} mx={{base:"auto", lg:"0"}} px={{base:"0", md: "5"}} textAlign={'justify'}>BEST Mostar je lokalna BEST grupa Univerziteta
“Džemal Bijedić” u Mostaru, koja broji više od 45
aktivnih članova. Za 11 godina postojanja izrasla je u
jednu od najprepoznatljivih studentskih organizacija u
Mostaru. Zahvaljujući zalaganju mladih i
entuzijastičnih članova organizacije, studentima
Univerziteta je omogućeno povezivanje, razmjena i
saradnja sa studentima iz cijele Evrope.
</Text>
<Box width={"auto"} boxSizing={"border-box"} boxSize={{base:"auto", md:"2xl", lg:"100%"}} margin={"auto"} height={{base:"auto", md:"auto"}} position={"relative"} >

<Image src="/Bestovci.jpg" display={{base:"none", md:"flex"}} shadow={"4px 4px 10px black"}  borderRadius={{base: '10px 0 0 10px', lg: "0 10px 10px 0"}} boxSize={"border-box"} bgSize={'cover'} ml={{base: "0", md: "0"}} my={"auto"} h={{base: "100%", md:"100%"}} width={{base: "100%", md:"100%", lg:"100%"}}></Image>

<Image src="/BestovciMd.jpg" display={{base:"flex", md:"none"}} shadow={"4px 4px 10px black"} boxSizing={"border-box"} borderRadius={{base: '10px 0 0 10px', lg: "0 10px 10px 0"}} boxSize={"border-box"} bgSize={'cover'} ml={{base: "0", md: "0"}} my={"auto"} h={{base: "100%", md:"100%"}} width={{base: "100%", md:"100%", lg:"0"}}></Image>

</Box>

</Flex>



</Box>

</>
  )
}

export default Organizer