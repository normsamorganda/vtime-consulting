'use client'
import { Open_Sans } from "next/font/google"
import Hero from "@/views/Hero/Hero"
import Advantages from "@/views/Advantages/Advantages"
import Header from "@/views/Header/Header"
import Service from "@/views/Service/Service"
import Expertise from "@/views/Expertise/Expertise"
import Feature from "@/views/Feature/Feature"
import Affiliates from "@/views/Affiliates/Affilitates"
import Contact from "@/views/Contact/Contact"
import Footer from "@/views/Footer/Footer"
import FooterExtras from "@/views/FooterExtras/FooterExtras"
import { nAffiliatesBg } from "@/assets/Affiliates"

import {useState} from 'react'

const opensans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "300", "500", "600", "700", "800"],
})

export default function Home() {

  
  const [openDiv, setopenDiv] = useState(false)

  const handleShow = () => {
    setopenDiv(!openDiv)
  }



  return (<>

    <main className='flex flex-col items-center justify-between overflow-hidden'>
        <div className='text-black w-full'>
          <Header />
          <Hero />
          <Advantages />
          <Service />
          <Expertise />
          <Feature />
          <Affiliates />
          <Contact />
          <Footer />
         
          </div>
        <FooterExtras />
  
      </main>
     
 
  </>
   
  )
}
