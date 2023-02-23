import React from 'react'
import { Box } from '@chakra-ui/react'

function ThirdLayout({children}) {
    return (
        <Box alignItems={"center"}   bgColor={"whiteAlpha.700"} color={"#292929"} boxShadow={"0px 10px 80px 10px black"} backgroundRepeat={"no-repeat"} backgroundSize={"cover"} backgroundImage={"/BlackNet3.svg"}>
        {children}
        </Box>
          )
}

export default ThirdLayout