'use client'
import { headerBg3, whiteHeader, whiteLogo } from "@/assets/Header"
import MobileMenu from "@/components/MobileMenu/MobileMenu"
import { Search } from "@/components/Search"
import { Text } from "@/components/Text"
import useSize from "@/hooks/useSize"
import cx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { FaBars } from "react-icons/fa"
import {AiOutlineClose} from "react-icons/ai"
const navLinks = [
  {
    text: 'About us',
    link: '/About'
  },

  {
    text: 'Corporate',
    link: '/Corporate'
  },

  {
    text: 'Visa & Immigration',
    link: '/Visa&Immigration'
  },

  {
    text: 'Outsourcing',
    link: '/Outsourcing'
  },

  {
    text: 'Updates',
    link: '/Updates'
  },

  {
    text: 'Contact Us',
    link: '/Contact'
  },

]

const Header = () => {
  const { tablet, phone } = useSize()

  const [openDiv, setopenDiv] = useState(true)

  const handleShow = () => {
    setopenDiv(!openDiv)
  }


  return (
    <>
     <section className="relative">
       {/* <div className= {openDiv ? " relative bg-primary w-screen h-screen z-40 overflow-hidden" : ""}>
          <span className="text-xl font-bold text-black absolute right-12 top-5" onClick={() => {setopenDiv(!openDiv)}}>X</span>

          <Link href={'/'} className="underline mr-auto">Go back Home</Link>
          <Link href={'/About'} className="underline mr-auto">About</Link>
          <Link href={'/Corporate'} className="underline mr-auto">Corporate</Link>
          <Link href={'/Visa&Immigration'} className="underline mr-auto">Visa&Immigration</Link>
          <Link href={'/Outsourcing'} className="underline mr-auto">Outsourcing</Link>
          <Link href={'/Updates'} className="underline mr-auto">Updates</Link>

        </div> */}
      <div className="absolute top-1/2 -translate-y-1/2 w-[180px] laptop:w-[150px] left-[5%] z-10">
      {openDiv ? <FaBars className={cx("text-white w-10 h-10 md:hidden", 'phone:w-6')} onClick={handleShow}/> : <AiOutlineClose className={cx("text-white w-10 h-10 md:hidden", 'phone:w-6')} onClick={handleShow}/>  } 
     <div className="hidden md:flex md:justify-between">
      <div className="mr-6">
      <FaBars className="text-white w-5 h-10 block cursor-pointer"/>
      </div>
        <Image src={whiteLogo.src} width={500} height={100} alt="logo" />
     </div>
      </div>

      <section className="flex justify-between pt-2 relative">
        {/* left */}
        <section className={cx("bg-secondary h-10 flex justify-center rounded-tl-3xl relative w-[20%]", 'tablet:w-full')}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="80" height="40" className="absolute z-0 -right-[58px]"><path className="fill-secondary" d="M 0 50 L 80 50 C 30 50 30 0 0 0 L 0 0 Z"></path></svg>
        </section>
        {/* links */}
        {tablet ? "" : <div className={cx("flex gap-10 items-center", "laptopL:!gap-5")}>
          {navLinks.map((links, i) => {
            return <Link href={links.link} key={i} >
              <Text size="description" className={cx("hover:text-primary hover:cursor-pointer relative after:content-[' '] after:w-1 after:h-1 after:bg-primary after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:hidden hover:after:block after:rounded-full", " text-black !font-medium transition-all", "laptop:!text-xs")}>{links.text}</Text>
            </Link>
          })}
        </div>}
        {/* CENTER */}
        {tablet && <div className={cx("absolute top-1/2 translate-y-1/4 w-52 z-10 left-1/2 -translate-x-1/2", 'phone:w-40')}>
          <Image src={whiteLogo.src} width={500} height={300} alt="logo" />
        </div>}

        {/* right */}
        <section className={cx("bg-secondary h-10  w-[20%] flex justify-center rounded-tr-3xl relative", 'tablet:w-full')}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="80" height="40" className="absolute z-0 -left-[58px] scale-x-[-1]"><path className="fill-secondary" d="M 0 50 L 80 50 C 30 50 30 0 0 0 L 0 0 Z"></path></svg>
        </section>
      </section>

      <div className="absolute right-[3%] top-1/2 -translate-y-1/2">
        <Search />
      </div>
      <section className="bg-secondary h-10 mt-0 flex justify-center" />
      {/* <MobileMenu /> */}
      <div className={!openDiv ? "absolute bg-primary z-40 w-auto h-screen overflow-hidden" : "hidden" } >
          <div className="w-[600px]">
          <Link href={'/'} className="underline mr-auto">Go back Home</Link> <br></br>
          <Link href={'/About'} className="underline mr-auto">About</Link> <br></br>
          <Link href={'/Corporate'} className="underline mr-auto">Corporate</Link> <br></br>
          <Link href={'/Visa&Immigration'} className="underline mr-auto">Visa&Immigration</Link> <br></br>
          <Link href={'/Outsourcing'} className="underline mr-auto">Outsourcing</Link> <br></br>
          <Link href={'/Updates'} className="underline mr-auto">Updates</Link> 
          </div>

      </div> 

     
      
    </section>

   
    </>
   

  )
}

export default Header



// -webkit-clip-path: polygon(0 0, 100% 0, 78% 100%, 21% 100%);
// clip-path: polygon(0 0, 100% 0, 78% 100%, 21% 100%);


