import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  Image,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box position={"fixed"} zIndex={"100"}  width={"100%"} >
      <Flex
      
        bg={useColorModeValue('blackAlpha.600', 'white')}
        color={useColorModeValue('white', 'gray.600')}
        minH={'90px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'none'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}>
        <Flex
      
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
    
         {/* <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
            fontFamily={'heading'}
            color={useColorModeValue('white', 'gray.800')}>
          
          </Text>  */}
           <Image  width={"36"} align={useBreakpointValue({ base: 'center', md: 'left' })} src={"/BEST_signature_mostar_white.png"} >

</Image>
         

        </Flex>

        <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity >
        <MobileNav  />
      </Collapse>
    </Box>
  );
}


const DesktopNav = () => {
  const linkColor = useColorModeValue('whiteAlpha.900', 'gray.800');
  const linkHoverColor = useColorModeValue('gray.400', 'white');
  const popoverContentBgColor = useColorModeValue('blackAlpha.600', 'gray.800');

  return (
    <Stack direction={'row'} m={"auto"} spacing={4}  scroll={false}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}  >
          <Popover  trigger={'hover'}  placement={'bottom-start'} >
            <PopoverTrigger >
              <Link
                px={2}
                textTransform={"uppercase"}
                href={navItem.href ?? '#'}
                fontSize={'lg'}
               
                fontWeight={500}
                
                color={linkColor}
                _hover={{
                  textDecoration: 'none',
                  color: linkHoverColor,
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
              
           
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack >
                  {navItem.children.map((child) => (
                    <DesktopSubNav  key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};


const MobileNav = () => {
  return (
    <Stack
    scroll={false}
      bg={useColorModeValue('blackAlpha.800', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
      color={"white"}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle} >
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue('whiteAlpha.900', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }} >
        <Stack
        
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}
          scroll={false}
          >
            
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};


const DesktopSubNav = ({ label, href, subLabel } ) => {
  return (
    <Link
      href={href}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('blackAlpha.700', 'gray.900') }}> {/**pozadina dropdown-a */}
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={500}>
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};


const NAV_ITEMS = [
  {
    label: 'O događaju',
    href: "#about"
  },
  {
   label: 'Organizator',
   href: '#organizer',
 },
  {
    label: 'Prijašnja Iskustva',
    href: "#lastexp"
   
  },
  {
    label: 'Hakaton',
    href: '#hakaton',
  },
  {
    label: 'Jobfair',
    href: '#jobfair',
  },
  {
    label: 'Sponzori',
    href: '#',
  }
];