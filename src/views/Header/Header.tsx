'use client'
import { headerBg3, whiteHeader, whiteLogo } from "@/assets/Header"
import MobileMenu from "@/components/MobileMenu/MobileMenu"
import { Search } from "@/components/Search"
import { Text } from "@/components/Text"
import useSize from "@/hooks/useSize"
import cx from "clsx"
import Image from "next/image"
import { useEffect, useState } from "react"
import { FaBars } from "react-icons/fa"
import {AiOutlineClose} from "react-icons/ai"
import {BiChevronRight} from "react-icons/bi"
import React from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation';
import ActiveLink from "@/components/ActiveLink/ActiveLink"
const navLinks = [

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

const subCat = [
  {
    id:1,
    text: 'The Company',
    link: '/TheCompany'
  },
  {
    id:2,
    text: 'Our Mission',
    link: '/OurMission'
  },
  {
    id:3,
    text: 'Our Vision',
    link: '/OurVision'
  },
  {
    id:4,
    text: 'Our Leaders',
    link: '/OurLeaders'
  },
  {
    id:5,
    text: 'Our Services',
    link: '/About'
  },
  {
    id:6,
    text: 'Advantages',
    link: '/Advantages'
  },
]

const Header = () => {
  const { tablet, phone } = useSize()

  const pathname = usePathname();

//active nav styling
  const isActive = (path:any) => {
    return pathname === path.link ? 'text-primary' : 'not-active';
    
  };


  const [openDiv, setopenDiv] = useState(true)
  const [dropDown, setdropDown] = useState(false)

  const handleShow = () => {
    setopenDiv(!openDiv)
  }

  const navDropDownHandle = () => {
    setdropDown(!dropDown)
  }

  return (
    <>
     <section className="relative">
      <div className="absolute top-1/2 -translate-y-1/2 w-[180px] laptop:w-[150px] left-[5%] z-10">
      {openDiv ? <FaBars className={cx("text-white w-10 h-10 md:hidden", 'phone:w-6')} onClick={handleShow}/> : <AiOutlineClose className={cx("text-white w-10 h-10 font-bold md:text-3xl md:hidden", 'phone:w-6')} onClick={handleShow}/>  } 
     <div className="hidden md:flex md:justify-between md:items-center">
      <div className="mr-6">
      <FaBars className="text-white w-5 h-10 block cursor-pointer"/>
      </div>
        <Image src={whiteLogo.src} width={500} height={100} alt="logo" className="h-[30px]" />
     </div>
      </div>

      <section className="flex justify-between pt-2 relative">
        {/* left */}
        <section className={cx("bg-secondary h-10 flex justify-center rounded-tl-3xl relative w-[20%]", 'tablet:w-full')}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="80" height="40" className="absolute z-0 -right-[58px]"><path className="fill-secondary" d="M 0 50 L 80 50 C 30 50 30 0 0 0 L 0 0 Z"></path></svg>
        </section>
        {/* links */}
        {tablet ? "" : <div className={cx("flex gap-10 items-center", "laptopL:!gap-5")}>

       <button onClick={navDropDownHandle} className="text-sm font-medium	 hover:text-primary hover:cursor-pointer relative after:content-[' '] after:w-1 after:h-1 after:bg-primary after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:hidden hover:after:block after:rounded-full">About Us</button>
        <div className={dropDown ? "absolute z-30 top-[61px] left-[350px] bg-[#fefefe] w-[300px] text-[12px] flex flex-col py-5 border-t-4 border-[#2a9df4]" : "hidden"}>
          {subCat.map(({text, link, id}) => (
        <Link 
        key={id} 
        className={`${isActive({link})} pl-8 pt-2`}
        href={link} 
        >
          {text}
          </Link> 
      ))}
        </div>
          {navLinks.map((links, i) => {
            return <Link href={links.link} key={i} className={isActive(links.link)}>
              <Text size="description" className={cx(`hover:text-primary hover:cursor-pointer relative after:content-[' '] after:w-1 after:h-1 after:bg-primary after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:hidden hover:after:block after:rounded-full`, " text-black !font-medium transition-all", "laptop:!text-xs")}>{links.text}</Text>
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
      <div className={!openDiv ? "absolute bg-[#2a9df4] z-40 w-auto h-[3500px] overflow-hidden transition-transform" : "hidden" } >
          <div className="w-[380px]">

            <div className="flex w-11/12 mx-auto justify-between pt-12">
               <Link href={'/About'} className="text-white text-md font-bold">About Us</Link> 
              <BiChevronRight className="text-white text-3xl"/>
            </div>

            <div className="flex w-11/12 mx-auto justify-between pt-12">
            <Link href={'/Corporate'}  className="text-white text-md font-bold"> Corporate</Link>
              <BiChevronRight className="text-white text-3xl"/>
            </div>

            <div className="flex w-11/12 mx-auto justify-between pt-12">
            <Link href={'/Visa&Immigration'}  className="text-white text-md font-bold"> Visa & Immigration</Link>
              <BiChevronRight className="text-white text-3xl"/>
            </div>

            <div className="flex w-11/12 mx-auto justify-between pt-12">
            <Link href={'/Outsourcing'}  className="text-white text-md font-bold"> Outsourcing</Link>
              <BiChevronRight className="text-white text-3xl"/>
            </div>

            <div className="flex w-11/12 mx-auto justify-between pt-12">
            <Link href={'/Updates'}  className="text-white text-md font-bold"> Updates</Link> 
              <BiChevronRight className="text-white text-3xl"/>
            </div>

            <div className="flex w-11/12 mx-auto justify-between pt-12">
            <Link href={'/Contact'}  className="text-white text-md font-bold">Contact us</Link> 
              <BiChevronRight className="text-white text-3xl"/>
            </div>

          </div>

      </div> 

     
      
    </section>

   
    </>
   

  )
}

export default Header



// -webkit-clip-path: polygon(0 0, 100% 0, 78% 100%, 21% 100%);
// clip-path: polygon(0 0, 100% 0, 78% 100%, 21% 100%);


