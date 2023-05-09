'use client'
import { headerBg3, whiteHeader, whiteLogo } from "@/assets/Header"
import { Search } from "@/components/Search"
import { Text } from "@/components/Text"
import useSize from "@/hooks/useSize"
import cx from "clsx"
import Image from "next/image"
import { useEffect, useState } from "react"
import { FaBars } from "react-icons/fa"

const navLinks = [
  'About us', 'Corporate', 'Visa & Immigration', 'Outsourcing', 'Updates', 'Contact Us'
]

const Header = () => {
  const { tablet, phone } = useSize()

  return (
    <section className="relative">
      <div className="absolute top-1/2 -translate-y-1/2 w-[15vw] left-[4%] z-10">
        {tablet ? <FaBars className="text-white w-10 h-10" /> : <Image src={whiteLogo.src} width={500} height={300} alt="logo" />
        }
      </div>

      <section className="flex justify-between pt-2 relative">
        {/* left */}
        <section className={cx("bg-secondary h-10 flex justify-center rounded-tl-3xl relative", tablet ? 'w-[100%]' : 'w-[20%]')}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="80" height="40" className="absolute z-0 -right-[58px]"><path className="fill-secondary" d="M 0 50 L 80 50 C 30 50 30 0 0 0 L 0 0 Z"></path></svg>
        </section>
        {/* links */}
        {tablet ? "" : <div className={cx("flex gap-8 items-center", "max-[1100px]:gap-4")}>
          {navLinks.map((links, i) => {
            return <Text key={i} size="description" className={cx("hover:text-primary hover:cursor-pointer relative after:content-[' '] after:w-1 after:h-1 after:bg-primary after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:hidden hover:after:block after:rounded-full", "max-[1300px]:!text-[12px] max-[1100px]:text-[10px]")}>{links}</Text>
          })}
        </div>}
        {/* CENTER */}
        {tablet && <div className="absolute top-1/2 translate-y-1/5 w-60 z-10 left-1/2 -translate-x-1/2">
          <Image src={whiteLogo.src} width={500} height={300} alt="logo" />
        </div>}

        {/* right */}
        <section className={cx("bg-secondary h-10  w-[20%] flex justify-center rounded-tr-3xl relative", tablet ? 'w-[100%]' : 'w-[20%]')}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="80" height="40" className="absolute z-0 -left-[58px] scale-x-[-1] "><path className="fill-secondary" d="M 0 50 L 80 50 C 30 50 30 0 0 0 L 0 0 Z"></path></svg>
        </section>
      </section>

      <div className="absolute right-[3%] top-1/2 -translate-y-1/2">
        <Search />
      </div>


      <section className="bg-secondary h-10 mt-0 flex justify-center" />
    </section>

  )
}

export default Header



// -webkit-clip-path: polygon(0 0, 100% 0, 78% 100%, 21% 100%);
// clip-path: polygon(0 0, 100% 0, 78% 100%, 21% 100%);


