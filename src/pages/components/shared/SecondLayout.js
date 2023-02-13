import React from 'react'
import { Box } from '@chakra-ui/react'

function SecondLayout({children}) {
    return (
        <Box alignItems={"center"}   bgColor={"#292929"} color={"whiteAlpha.900"} boxShadow={"0px 10px 80px 10px black"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"} backgroundImage={"/Net.svg"}>
        {children}
        </Box>
          )
}

export default SecondLayout