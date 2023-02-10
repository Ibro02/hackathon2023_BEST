import React from 'react'
import { Box } from '@chakra-ui/react'

function FirstLayout({children}) {
  return (
<Box align={"center"} fontSize={{base: "5xl", md:"6xl"}} py={"20"}  color={"white"} bgAttachment={"fixed"} minH={"100vh"} bgSize={'cover'} width={"100%"} backgroundImage={"/OrganizersBg.svg"}>
{children}
</Box>
  )
}

export default FirstLayout