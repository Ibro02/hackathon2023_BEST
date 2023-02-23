import React from 'react'
import { Divider,Box, Flex, Text ,Image, Link} from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <>
    <Flex  w={"100%"} h={"60"} bgColor={"gray.900"} alignContent={'center'} justifyContent={"space-between"} px={{base:"10%", xl:"30%"}} color={"whiteAlpha.800"}>
<Flex flexDir={"column"} flexWrap="nowrap" alignContent={"left"}>

<Image boxSizing={"border-box"}  bgSize={'contain'} h={"auto"} my={"5"} width={"40"} align={"left"}  src={"/BESTLogo.png"}/>
<Text  fontSize={{base:"15", md: "20"}} fontWeight={"900"}>
Board of European Students of Technology
</Text>
<Text fontSize={{base:"14",md:"15"}} fontWeight={"100"} color={"whiteAlpha.500"} alignItems={"left"}>
Made by ITD powered by MSS
</Text>
</Flex>


<Divider orientation='vertical' h={"70%"} margin={"auto"} mx={"5"}/>


<Flex alignItems={"center"} flexWrap={{base: "wrap", md: "nowrap"}} justifyContent={"center"} flexDir={"row"} m={"5"}>
<Link _hover={{color: "#3b5998 "}} href={"https://www.facebook.com/BESTMostar/"}><FontAwesomeIcon icon={faFacebookSquare} fontSize={50}className='facebook'/></Link>
<Link mx={{base: "2", md: "10"}} _hover={{color: "#FCAF45 "}} href={"https://www.instagram.com/best.mostar/"}><FontAwesomeIcon icon={faInstagram} fontSize={50} className='instagram'/></Link>
<Link _hover={{color: "#0072b1 "}} href={"https://www.linkedin.com/company/best-mostar/"}><FontAwesomeIcon icon={faLinkedin} fontSize={50}className='linkedin'/></Link>
</Flex>
    </Flex>
    </>
  )
}

export default Footer