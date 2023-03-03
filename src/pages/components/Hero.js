import React, { useEffect } from 'react'
import { Box,Link, Button, Center, Flex,Stack, Text ,Image, Container} from "@chakra-ui/react"
import Typewriter from 'typewriter-effect';
import {hero} from '../../styles/Hero.module.css'
function Hero() {

  
  return (
  
 <Flex className={hero} width={'100%'}  bgAttachment={{base:"scroll",md: "fixed"}} minH={"100vh"} bgSize={'cover'} backgroundImage={"/HeroBg.svg"} 
    >
 <Center   m={'auto'} alignItems={'center'} justifyContent={'center'}>
     <Flex  mx="auto" alignItems={'center'} color='white' flexDir={'column'}>
 
      
   <Container size={"4xl"} my={{base:"20", md:"0"}}>
<Image alt={"logo"}bgSize={'contain'} width={"100%"} src={"/logo.png"}></Image>

     
{/* 
        <Text fontSize={'2xl'} my={"10"} mx={"20"} textAlign={"center"}>
   Jedinstveni događaj koji pruža priliku za učenje i nagrađuje znanje!
        </Text> */}
       <Box fontSize={'2xl'} my={"auto"} mx={"0"} textAlign={"center"}>
<Typewriter
    onInit={(typewriter) => {
    typewriter.changeDelay(60)
    typewriter.typeString('Jedinstveni događaj koji pruža priliku za učenje i nagrađuje znanje!')
  .start()
  }}
  options={{
    autoStart: true,
    loop: false,  
  }}
  
/>
  </Box> 
       
<Stack mx={"20"} my={"none"}>
<Flex direction={{base: "column", md: "row"}} alignItems={"center"} positon={"relative"} justifyContent={"space-between"} >

<Link href={"#hakaton"} textDecoration={"none !important"}>
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
href={"#hakaton"}
_hover={{
  bg: "blackAlpha.400",
  transform: 'translateY(-1px)',
    boxShadow: 'lg',
}}
// onClick={() => setColorCode(colorList[randomColor()])}
>
    Hackathon
      </Button>
    </Link>
<Link href={"#jobfair"} textDecoration={"none !important"}>
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
</Link>
           

  </Flex>
</Stack>
    </Container>    
    
     
    

      


     </Flex>

 </Center>
    </Flex>

   
  )
}

export default Hero