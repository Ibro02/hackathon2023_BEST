import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from './components/Hero'
import Navbar from './components/shared/Navbar.js'
import About from './components/About'
import Organizer from './components/Organizer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar/>
<Hero/>
<About/>
<Organizer/>
    </>
  )
}
