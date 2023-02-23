import React from 'react'
import { Box } from '@chakra-ui/react'

function FirstLayout({children}) {
  return (
<Box align={"center"} fontSize={{base: "5xl", md:"6xl"}} py={"20"}  color={"white"} bgAttachment={"scroll"} minH={"100vh"} bgSize={'cover'} width={"100%"} backgroundImage={"/Net3.svg"}>
{children}
</Box>
  )
}

export default FirstLayout