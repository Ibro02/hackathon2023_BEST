import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'

import Hero from './components/Hero'
import Navbar from './components/shared/Navbar.js'
import About from './components/About'
import Organizer from './components/Organizer'
import LastExpirience from './components/LastExpirience'
import Hackathon from './components/Hakaton'
import { Box } from '@chakra-ui/react'
import Jobfair from './components/Jobfair'
import Footer from './components/Footer'
import FirstLayout from './components/shared/FirstLayout'
import SecondLayout from './components/shared/SecondLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar/>
    
<Hero/>
<About/>

<FirstLayout>
<Organizer/>
{<LastExpirience/>}
</FirstLayout>

<SecondLayout>
<Hackathon/>
</SecondLayout>

<FirstLayout>
<Jobfair/>
</FirstLayout>
<Footer/>

    </>
  )
}
