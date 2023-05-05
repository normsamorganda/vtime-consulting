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

const opensans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "300", "500", "600", "700", "800"],
})

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between'>
      <div className='text-black w-full px-[5px]'>
        <Header />
        <Hero />
        {/* <Advantages />
        <Service />
        <Expertise />
        <Feature />
        <Affiliates />
        <Contact />
        <Footer /> */}

      </div>
      {/* <FooterExtras /> */}
    </main>
  )
}
