import React from 'react'
import { Box, Button, Center, Flex,Stack, Text ,Image, Container} from "@chakra-ui/react"

function About() {




const styleRed = {
    color: '#E63448',
    fontWeight: '900',
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
    <Box alignItems={"center"}  bgColor={"#292929"} color={"whiteAlpha.900"} boxShadow={"50px 10px 80px 10px black"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"} backgroundImage={"/Net.svg"}>

               <Box py={40} px={10}>
        <Text align={"center"} fontSize={{base: "5xl", md:"6xl"}} textTransform={"uppercase"} fontWeight={700} textShadow={"5px 5px 0 black"}>O događaju</Text>
<Box bgColor={"#E63448"} width={{base:"60%", md:"m"}} mx={"auto"} my={"5"} h={"3px"} align={"center"} borderRadius={"10"}></Box>
<Flex flexDir={"row"}  m={{base: 5, md: 10}}>

<Flex flexDir={"column"} justifyContent={"space-between"} p={"10"} alignItems={"space-between"} fontWeight={100}>

<Text mt={10} mb={{base: 0, md: 10}} fontSize={{base: "2xl", md:"3xl"}}>
<span  style={styleRed}>Hackathon</span> je intenzivno programersko takmičenje timskog
karaktera koje se održava treću godinu zaredom.
Timovi od <span style={styleRed}>3</span> do <span style={styleRed}>4</span> člana imaju zadatak da tokom <span style={styleRed}>36</span> sati pokažu
kako svoju kreativnost, kritičko razmišljanje, prezentacione
vještine, tako i tehničke vještine. Cilj Hackathon-a je da studenti
u timu pokažu svoju efikasnost, rješavajući softverski problem
na temu koja se obrađuje na takmičenju.
</Text>
<Image  bgSize={'contain'} h={"auto"} my={"5"} width={"100%"} display={{base: "flex", md: "flex", lg:"none"}} src={"/HackathonWLogo.png"}></Image>
<Text fontSize={{base: "2xl", md:"3xl"}}>
Događaj se sastoji od dva dijela: <span  style={styleRed}>Jobfair</span> i <span  style={styleRed}>Hackathon</span>.
Na JobFair-u kompanije imaju priliku da prisustvuju raznim “soft skills” i
“hard skills” predavanjima. Također ne samo učesnici, već svi studenti i učenici će imati priliku da se upoznaju sa kompanijama sa Sajmu poslova i samim tim pronalaze moguću praksu ili posao.
</Text>
</Flex>

<Image  bgSize={'contain'} width={"40%"} textAlign={'justify'} m={"auto"} h={"50%"} display={{ base:"none", md: "none", lg: "flex"}} src={"/HackathonWLogo.png"}></Image>

</Flex>
                </Box> 
    </Box>
    </>

  )
}

export default About