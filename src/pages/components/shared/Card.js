import React from 'react'
import { Box, Button, Center, Flex,Stack, Text ,Image, Container} from "@chakra-ui/react"

function Card({children}) {
  return (
    <Box backgroundColor={"gray.700"} border={"2px solid black"}>
{children}
    </Box>
  )
}

export default Card