import { Box, Button, Center, Flex,Stack, Text ,Image, Container} from "@chakra-ui/react"
import React from 'react'

function Organizer() {
  return (
<>

<Box align={"center"} fontSize={{base: "5xl", md:"6xl"}}  color={"white"} bgAttachment={"fixed"} minH={"100vh"} bgSize={'cover'} width={"100%"} backgroundImage={"/OrganizersBg.svg"}>
    
    <Box py={40} fontWeight={700}>
<Text>Organizatori</Text>
<Box bgColor={"#E63448"} width={{base:"80%", md:"lg"}} mx={"auto"} my={"5"} h={"3px"} align={"center"} borderRadius={"100%"}></Box>

<Image src="/BESTLogo.png" shadow={"1px 1px 30px black"} backgroundColor="blackAlpha.600" borderRadius={"20"}></Image>
    </Box>

<Flex fontSize={{base: "xl", md:"2xl"}} flexDir={{base: "column", lg:"column", md:"row"}} fontWeight={200} justifyContent={"center"} alignContent={"space-between"} backgroundColor={"#292929"} color={"whiteAlpha.900"} mx={"10"} p={"5"} borderRadius={"10"} boxShadow={"  20px 30px 50px black"}>

<Text   ml={"15%"} justifyContent={"center"} margin={"auto"} textAlign={'justify'}>BEST Mostar je lokalna BEST grupa Univerziteta
“Džemal Bijedić” u Mostaru, koja broji više od 45
aktivnih članova. Za 11 godina postojanja izrasla je u
jednu od najprepoznatljivih studentskih organizacija u
Mostaru. Zahvaljujući zalaganju mladih i
entuzijastičnih članova organizacije, studentima
Univerziteta je omogućeno povezivanje, razmjena i
saradnja sa studentima iz cijele Evrope.
</Text>

<Image src="/Bestovci.jpg" shadow={"4px 4px 10px black"} boxSize={"border-box"} bgSize={'cover'} ml={"8%"} my={"auto"} h={"2xl"} width={"auto"}></Image>

</Flex>

</Box>

</>
  )
}

export default Organizer