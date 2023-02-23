import React from 'react'
import { Box, Flex, Text ,Image} from "@chakra-ui/react"

function Jobfair() {

    const styleRed = {
        color: '#E63448',
        fontWeight: '700',
        textTransform: "uppercase",
        textShadow: "1px 1px 0 black"
    
    }
    

  return (
    
    <Box id='jobfair'>

    <Box  px={{base: "0", md:10, lg:80}} py={20} textAlign={"justify"}>
    <Text  align={"center"} fontSize={{base: "5xl", md:"6xl"}} textTransform={"uppercase"} fontWeight={700} textShadow={"5px 5px 0 black"}>Jobfair</Text>
<Box bgColor={"#E63448"} width={{base:"60%", md:"m"}} mx={"auto"} my={"5"} h={"3px"} align={"center"} borderRadius={"10"}></Box>
<Flex flexDir={"column"}  m={{base: "1.5", md: 0
}}>

<Flex flexDir={"column-reverse"} justifyContent={"space-evenly"} p={{md:"10", base:"0"}} alignItems={"space-between"} fontWeight={100}>


<Text fontSize={{base: "xl", md:"2xl"}} flexDir={{base: "column", md:"column", lg:"row"}} fontWeight={200} justifyContent={{base:"space-between", lg:"space-between"}} alignItems={{base: "space-between", md: "normal"}} backgroundColor={"#292929"} color={"whiteAlpha.900"} mx={{base: "0", md:"10"}}   borderRadius={"10"} boxShadow={" 1px 1px 2px black"} p={"10"}>
Na <span style={styleRed}>JobFair-u</span> kompanije imaju priliku da prisustvuju raznim “soft skills” i
“hard skills” predavanjima. Također ne samo učesnici, već svi studenti i učenici će imati priliku da se upoznaju sa kompanijama sa Sajmu poslova i samim tim pronalaze moguću praksu ili posao.
</Text>
</Flex>

<Image  boxSizing={"80"} width={"auto"} m={"auto"}  h={"60"} src={"/job.png"} mt={{ base: "50", md: "5px"}}></Image>
</Flex>
            </Box>
    </Box>
  )
}

export default Jobfair