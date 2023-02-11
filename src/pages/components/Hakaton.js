import React from 'react'
import { Box, Button, Center, Flex,Stack, Text ,Image, Container} from "@chakra-ui/react"
import Awards from './shared/Awards'

function Hackathon() {




const styleRed = {
    color: '#E63448',
    fontWeight: '700',
    textTransform: "uppercase",
    textShadow: "1px 1px 0 black"

}

// const styleYellow = {
//     color: '#F7DE43',
//     fontWeight: '900',
//     textTransform: "uppercase",
//     textShadow: "1px 1px 0 black"

// }
// const styleDark = {
//     color: 'white',
//     fontWeight: '900',
//     textTransform: "uppercase",
//     textShadow: "1px 1px 0 black"
// }



  return (
    <>
    <Box id='hakaton' >

               <Box py={40} px={{base:0, md: 6}} textAlign={"justify"}>
        <Text align={"center"} fontSize={{base: "5xl", md:"6xl"}} textTransform={"uppercase"} fontWeight={700} textShadow={"5px 5px 0 black"}>HackAtHon</Text>
<Box bgColor={"#E63448"} width={{base:"60%", md:"m"}} mx={"auto"} my={"5"} h={"3px"} align={"center"} borderRadius={"10"}></Box>
<Flex flexDir={"column"}  m={{base: 2, md: 10}}>

<Flex flexDir={"column"} justifyContent={"space-between"} p={"10"} alignItems={"space-between"} fontWeight={100}>

<Text mt={10} mb={{base: 0, md: 10}} fontSize={{base: "2xl", md:"3xl"}}>Na <span  style={styleRed}> Hackathon-u</span> studenti će u roku od <span  style={styleRed}>36 sati</span> imati zadatak da rade na rješavanju zadatog
problema uz nadzor mentora iz lokalnih IT kompanija.
Kompanije imaju pravo da, putem svog predstavnika,
nadgledaju rad učesnika te da podijele svoja znanja učesnicima
kako bi svi učesnici lakše i brže realizirali svoju ideju.

</Text>
{/* <Image  bgSize={'contain'} h={"auto"} my={"5"} width={"100%"} display={{base: "flex", md: "flex", lg:"none"}} src={"/HackathonWLogo.png"}></Image> */}
<Text fontSize={{base: "2xl", md:"3xl"}}>
Ovaj događaj se smatra <span  style={styleRed}>najinovativnijim</span> u organizaciji i ima
potencijal da postane najveće programersko takmičenje kojeg
organizuju studenti.
</Text>
</Flex>

<Awards/>


</Flex>
                </Box> 
    </Box>
    </>

  )
}

export default Hackathon