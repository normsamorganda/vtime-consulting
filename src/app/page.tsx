import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/views/Hero/Hero'
import Advantages from '@/views/Advantages/Advantages'
import Header from '@/views/Header/Header'
import Service from '@/views/Service/Service'
import Expertise from '@/views/Expertise/Expertise'
import Feature from '@/views/Feature/Feature'
import Affiliates from '@/views/Affiliates/Affilitates'
import Contact from '@/views/Contact/Contact'
import Footer from '@/views/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 border border-black">
        <div className='text-black border-black border-2 w-full h-full'>
          <Header/>
          <Hero/>
          <Advantages/>
          <Service/>
          <Expertise/>
          <Feature/>
          <Affiliates/>
          <Contact/>
          <Footer/>
        </div>
    </main>
  )
}
