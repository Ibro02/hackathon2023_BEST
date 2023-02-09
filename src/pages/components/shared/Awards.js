import React from 'react'
import { Box, Button, Center, Flex,Stack, Text ,Image, Container, Card} from "@chakra-ui/react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrophy} from '@fortawesome/free-solid-svg-icons'
function Awards() {
  return (
  
<Box>

<Flex justifyContent={"space-evenly"}>
<Card   w={"80"}  h={"sm"} align={"center"} justify={"center"}>
<FontAwesomeIcon icon={faTrophy} fontSize={"80"} />
<Text textTransform={"uppercase"} fontSize={"40"}>Drugo mjesto</Text>

</Card>
<Card w={"80"} h={"sm"} align={"center"} justify={"center"}>
<FontAwesomeIcon icon={faTrophy} fontSize={"80"}/>
<Text textTransform={"uppercase"} fontSize={"40"}>Prvo mjesto</Text>


</Card>
<Card w={"80"}  h={"sm"} align={"center"} justify={"center"}>
<FontAwesomeIcon icon={faTrophy}fontSize={"80"} />
<Text textTransform={"uppercase"} fontSize={"40"}>Trece mjesto</Text>

</Card>

</Flex>

</Box>

  )
}

export default Awards