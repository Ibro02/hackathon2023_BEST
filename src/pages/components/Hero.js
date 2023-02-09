import React from 'react'

import { Box, Button, Center, Flex,Stack, Text ,Image, Container} from "@chakra-ui/react"

function Hero() {

  return (
  
 <Flex width={'100%'}  bgAttachment={"fixed"} minH={"100vh"} bgSize={'cover'} backgroundImage={"/HeroBg.svg"} 
    >
 <Center   m={'auto'} alignItems={'center'} justifyContent={'center'}>
     <Flex  mx="auto" alignItems={'center'} color='white' flexDir={'column'}>
 
      
   <Container size={"4xl"} my={{base:"20", md:"0"}}>
<Image bgSize={'contain'} width={"100%"} src={"/logo.png"} ></Image>

     

        <Text fontSize={'2xl'} my={"10"} mx={"20"} textAlign={"center"}>
       Jedinstveni događaj koji pruža priliku za učenje i nagrađuje znanje!
        </Text>

        
<Stack mx={"20"}>
<Flex direction={{base: "column", md: "row"}} alignItems={"center"} justifyContent={"space-between"} >

        <Button
         fontSize={'xl'}
         width={150}
         minH={'14'}
         px={8}
         bg={"#E63448"}
         color={'white'}
         borderRadius={'none'}
border={"2px solid #E63448"}
my={"4"}

_hover={{
  bg: "blackAlpha.400",
  transform: 'translateY(-1px)',
    boxShadow: 'lg',
}}
// onClick={() => setColorCode(colorList[randomColor()])}
>
    HackAtHon
      </Button>
    

<Button 
width={150}
px={8}
minH={'14'}
fontSize={'xl'}
border={"2px solid #E63448"}
bg={"blackAlpha.400"}
color={'white'}
borderRadius={'none'}
_hover={{
    bg: "#E63448",
    transform: 'translateY(-1px)',
    boxShadow: 'lg',
  }}
>JobFair</Button>
           

  </Flex>
</Stack>
    </Container>    
    
     
    

      


     </Flex>

 </Center>
    </Flex>

   
  )
}

export default Hero