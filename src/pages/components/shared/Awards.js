import React from 'react'
import { Box, Button, Center, Flex,Stack, Text ,Image, Container, Card} from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrophy} from '@fortawesome/free-solid-svg-icons'
function Awards() {

    const cardStyle={
        transition: "0.5s ease all",
backgroundColor: "#1a1a1a",
border: "2px solid black",
color: "white",
boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
    }

    const cardHoverStyle={
        backgroundColor: "#fcfcfc",
        border: "2px solid gray",
        color: "#1a1a1a",
        boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
            }

            const tekst ="ASdasdasd";
  return (
  
<Box>

<Flex justifyContent={"space-evenly"} alignItems={"flex-end"}>
<Card  role="group" w={"80"}  h={"sm"} align={"center"} justify={"center"} transition={"0.5s ease all"} bgColor={"#1a1a1a"} border={"2px solid black"}
color={"white"} boxShadow={"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}  _hover={{ bgColor: "#363636", border: "2px solid gray",
        color: "#white",}}>
<FontAwesomeIcon icon={faTrophy} fontSize={"70"}  color={"silver"} filter={"drop-shadow(20px 10px 20px black)"} />
<Text textTransform={"uppercase"} fontSize={{base:"20",md:"30"}}  textAlign={"center"}>Drugo mjesto</Text>
<Text textTransform={"uppercase"} fontSize={{base: "40", md:"50"}} textAlign={"center"} >1000 KM</Text>


</Card>

<Card role="group" w={"80"} h={"md"} align={"center"} transition={"0.5s ease all"} justify={"center"} bgColor={"#1a1a1a"} border={"2px solid black"}
color={"white"} boxShadow={"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"}  _hover={{bgColor: "#756300", border: "2px solid gray",
       }}>
       
<FontAwesomeIcon icon={faTrophy} fontSize={"80"} filter={"drop-shadow(20px 10px 10px black)"} color={"gold"} />
           
<Text textTransform={"uppercase"} fontSize={{base:"20",md:"30"}}  textAlign={"center"}>Prvo mjesto</Text>
<Text textTransform={"uppercase"} color={"gold"
} _groupHover={{color:"white"}} fontSize={{base: "40", md:"50"}} textAlign={"center"} >2000 KM</Text>



</Card>

<Card role="group" w={"80"}  h={"sm"} align={"center"} justify={"center"} transition={"0.5s ease all"}  bgColor={"#1a1a1a"} border={"2px solid black"}
color={"white"} boxShadow={"rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"} _hover={{bgColor: "#C85250", border: "2px solid gray",
color: "white",}} >
<FontAwesomeIcon icon={faTrophy}fontSize={"70"}  filter={"drop-shadow(20px 10px 10px black)"} color={"brown"}/>
<Text textTransform={"uppercase"} fontSize={{base:"20",md:"30"}} textAlign={"center"}>Trece mjesto</Text>
<Text textTransform={"uppercase"} fontSize={{base: "40", md:"50"}} textAlign={"center"} >500 KM</Text>

</Card>

</Flex>

</Box>

  )
}

export default Awards